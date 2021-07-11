import {
  ControlGateInstruction,
  HadamardGateInstruction,
  MeasureInstruction,
  NotGateInstruction,
  PhaseGateInstruction,
  RootNotGateInstruction,
  RxGateInstruction,
  RyGateInstruction,
  RzGateInstruction,
  SeriarizedInstruction,
  SwapGateInstruction,
  WriteInstruction,
  YGateInstruction,
  ZGateInstruction,
} from "lib/editor/gates"
import { StateVector } from "lib/simulator/stateVector"
import { instructionNameFor } from "./base"
import { PARSE_COMPLEX_TOKEN_MAP_RAD, Complex } from "./math"
import { parseFormula } from "./math"

export class Simulator {
  public state: StateVector
  public blochVectors: { [bit: number]: [number, number, number] }
  public bits: { [bit: number]: number }
  public flags: { [key: string]: boolean }
  private eiphiCache!: { [phi: string]: Complex }

  constructor(bits: string | StateVector) {
    if ("string" === typeof bits) {
      this.state = new StateVector(bits)
    } else {
      this.state = bits
    }
    this.bits = {}
    this.flags = {}
    this.eiphiCache = {}
  }

  runStep(instructions: SeriarizedInstruction[]): Simulator {
    this.blochVectors = {}
    const doneSwapTargets: [number, number][] = []
    const doneCPhaseTargets: [number, number][] = []
    const doneControlTargets: number[][] = []

    instructions.forEach((each, bit) => {
      switch (each.type) {
        case "qubit-label":
        case "i-gate":
          break
        case instructionNameFor("display:bloch"):
          this.applyBlochDisplay(bit)
          break
        case instructionNameFor("gate:hadamard"):
          this.applyHadamardGate(each, bit)
          break
        case instructionNameFor("gate:not"):
          this.applyNotGate(each, bit)
          break
        case instructionNameFor("gate:y"):
          this.applyYGate(each, bit)
          break
        case instructionNameFor("gate:z"):
          this.applyZGate(each, bit)
          break
        case instructionNameFor("gate:phase"):
          this.applyPhaseGate(each, bit, doneCPhaseTargets)
          break
        case "write":
          this.applyWriteGate(each, bit)
          break
        case "measure":
          this.applyMeasureGate(each, bit)
          break
        case "root-not-gate":
          this.applyRootNotGate(each, bit)
          break
        case "rx-gate":
          this.applyRxGate(each, bit)
          break
        case "ry-gate":
          this.applyRyGate(each, bit)
          break
        case "rz-gate":
          this.applyRzGate(each, bit)
          break
        case "control-gate":
          this.applyControlGate(each, instructions, doneControlTargets)
          break
        case "swap-gate":
          this.applySwapGate(each, doneSwapTargets)
          break
        default:
          throw new Error("Unknown instruction")
      }
    })

    return this
  }

  write(value: number, ...targets: number[]): Simulator {
    targets.forEach((t) => {
      const pZero = this.pZero(t)
      if ((value == 0 && pZero == 0) || (value == 1 && pZero == 1)) {
        this.x(t)
      }
    })
    return this
  }

  x(...targets: number[]): Simulator {
    targets.forEach((t) => {
      for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
        if ((bit & (1 << t)) == 0) {
          const a0 = bit
          const a1 = a0 ^ (1 << t)
          const va0 = this.state.amplifier(a0)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(a0, va1)
          this.state.setAmplifier(a1, va0)
        }
      }
    })
    return this
  }

  y(...targets: number[]): Simulator {
    targets.forEach((t) => {
      for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
        if ((bit & (1 << t)) == 0) {
          const a0 = bit
          const a1 = a0 ^ (1 << t)
          const va0 = this.state.amplifier(a0)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(
            a0,
            va1.times(new Complex(-1, 0)).times(Complex.I),
          )
          this.state.setAmplifier(a1, va0.times(Complex.I))
        }
      }
    })
    return this
  }

  z(...targets: number[]): Simulator {
    targets.forEach((t) => {
      for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
        if ((bit & (1 << t)) == 0) {
          const a0 = bit
          const a1 = a0 ^ (1 << t)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(a1, va1.times(new Complex(-1, 0)))
        }
      }
    })
    return this
  }

  h(...targets: number[]): Simulator {
    targets.forEach((t) => {
      for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
        if ((bit & (1 << t)) == 0) {
          const a0 = bit
          const a1 = a0 ^ (1 << t)
          const va0 = this.state.amplifier(a0)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(a0, va0.plus(va1).dividedBy(Math.sqrt(2)))
          this.state.setAmplifier(a1, va0.minus(va1).dividedBy(Math.sqrt(2)))
        }
      }
    })
    return this
  }

  phase(phi: string, ...targets: number[]): Simulator {
    const u11 = this.eiphi(phi)

    targets.forEach((t) => {
      for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
        if ((bit & (1 << t)) == 0) {
          const a0 = bit
          const a1 = a0 ^ (1 << t)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(a1, u11.times(va1))
        }
      }
    })
    return this
  }

  rx(theta: string, ...targets: number[]): Simulator {
    const numTheta = parseFormula<number>(theta, PARSE_COMPLEX_TOKEN_MAP_RAD)
    const costheta2 = Math.cos(numTheta / 2)
    const sintheta2 = Math.sin(numTheta / 2)

    targets.forEach((t) => {
      for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
        if ((bit & (1 << t)) == 0) {
          const a0 = bit
          const a1 = a0 ^ (1 << t)
          const va0 = this.state.amplifier(a0)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(
            a0,
            va0.times(costheta2).minus(va1.times(Complex.I).times(sintheta2)),
          )
          this.state.setAmplifier(
            a1,
            va1.times(costheta2).minus(va0.times(Complex.I).times(sintheta2)),
          )
        }
      }
    })
    return this
  }

  ry(theta: string, ...targets: number[]): Simulator {
    const numTheta = parseFormula<number>(theta, PARSE_COMPLEX_TOKEN_MAP_RAD)
    const costheta2 = Math.cos(numTheta / 2)
    const sintheta2 = Math.sin(numTheta / 2)

    targets.forEach((t) => {
      for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
        if ((bit & (1 << t)) == 0) {
          const a0 = bit
          const a1 = a0 ^ (1 << t)
          const va0 = this.state.amplifier(a0)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(
            a0,
            va0.times(costheta2).minus(va1.times(sintheta2)),
          )
          this.state.setAmplifier(
            a1,
            va0.times(sintheta2).plus(va1.times(costheta2)),
          )
        }
      }
    })
    return this
  }

  rz(theta: string, ...targets: number[]): Simulator {
    const numTheta = parseFormula<number>(theta, PARSE_COMPLEX_TOKEN_MAP_RAD)
    const i = Complex.I
    const e = new Complex(Math.E, 0)

    targets.forEach((t) => {
      for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
        if ((bit & (1 << t)) == 0) {
          const a0 = bit
          const a1 = a0 ^ (1 << t)
          const va0 = this.state.amplifier(a0)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(
            a0,
            va0.times(
              e.raisedTo(new Complex(-1, 0).times(i).times(numTheta / 2)),
            ),
          )
          this.state.setAmplifier(
            a1,
            va1.times(e.raisedTo(i.times(numTheta / 2))),
          )
        }
      }
    })
    return this
  }

  rnot(...targets: number[]): Simulator {
    targets.forEach((t) => {
      for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
        if ((bit & (1 << t)) == 0) {
          const a0 = bit
          const a1 = a0 ^ (1 << t)
          const va0 = this.state.amplifier(a0)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(
            a0,
            new Complex(0, -1)
              .plus(1)
              .times(va0)
              .plus(Complex.I.plus(1).times(va1))
              .dividedBy(2),
          )
          this.state.setAmplifier(
            a1,
            Complex.I.plus(1)
              .times(va0)
              .plus(new Complex(0, -1).plus(1).times(va1))
              .dividedBy(2),
          )
        }
      }
    })
    return this
  }

  swap(target0: number, target1: number): Simulator {
    this.cnot(target0, target1).cnot(target1, target0).cnot(target0, target1)
    return this
  }

  cswap(control: number, target0: number, target1: number): Simulator {
    this.ccnot(control, target0, target1)
      .ccnot(control, target1, target0)
      .ccnot(control, target0, target1)
    return this
  }

  cnot(control: number, ...targets: number[]): Simulator {
    targets.forEach((t) => {
      for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
        if ((bit & (1 << t)) == 0 && (bit & (1 << control)) != 0) {
          const a0 = bit
          const a1 = a0 ^ (1 << t)
          const va0 = this.state.amplifier(a0)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(a0, va1)
          this.state.setAmplifier(a1, va0)
        }
      }
    })
    return this
  }

  ch(control: number, ...targets: number[]): Simulator {
    targets.forEach((t) => {
      for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
        if ((bit & (1 << t)) == 0 && (bit & (1 << control)) != 0) {
          const a0 = bit
          const a1 = a0 ^ (1 << t)
          const va0 = this.state.amplifier(a0)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(a0, va0.plus(va1).times(Math.sqrt(0.5)))
          this.state.setAmplifier(a1, va0.minus(va1).times(Math.sqrt(0.5)))
        }
      }
    })
    return this
  }

  cphase(phi: string, target0: number, target1: number): Simulator {
    const u11 = this.eiphi(phi)

    for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
      if ((bit & (1 << target0)) == 0 && (bit & (1 << target1)) != 0) {
        const a0 = bit
        const a1 = a0 ^ (1 << target0)
        const va1 = this.state.amplifier(a1)

        this.state.setAmplifier(a1, u11.times(va1))
      }
    }
    return this
  }

  ccz(control1: number, control2: number, target: number): Simulator {
    for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
      if (
        (bit & (1 << target)) != 0 &&
        (bit & (1 << control1)) != 0 &&
        (bit & (1 << control2)) != 0
      ) {
        this.state.setAmplifier(bit, this.state.amplifier(bit).times(-1))
      }
    }
    return this
  }

  ccnot(control1: number, control2: number, target: number): Simulator {
    this.h(target).ccz(control1, control2, target).h(target)
    return this
  }

  read(...targets: number[]): Simulator {
    targets.forEach((t) => {
      const pZero = this.pZero(t)
      const rand = Math.random()

      if (rand <= pZero) {
        for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
          if ((bit & (1 << t)) != 0) this.state.setAmplifier(bit, Complex.ZERO)
          this.state.setAmplifier(
            bit,
            this.state.amplifier(bit).dividedBy(Math.sqrt(pZero)),
          )
        }
        this.bits[t] = 0
      } else {
        for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
          if ((bit & (1 << t)) == 0) this.state.setAmplifier(bit, Complex.ZERO)
          this.state.setAmplifier(
            bit,
            this.state.amplifier(bit).dividedBy(Math.sqrt(1 - pZero)),
          )
        }
        this.bits[t] = 1
      }
    })
    return this
  }

  magnitudes(): number[] {
    const m = []
    for (let r = 0; r < this.state.matrix.height; r++) {
      m.push(this.state.matrix.cell(0, r).abs())
    }
    return m
  }

  phases(): number[] {
    const p = []
    for (let r = 0; r < this.state.matrix.height; r++) {
      p.push((this.state.matrix.cell(0, r).phase() / Math.PI) * 180)
    }
    return p
  }

  private pZero(target: number): number {
    let p = 0
    for (let bit = 0; bit < 1 << this.state.nqubit; bit++) {
      if ((bit & (1 << target)) == 0) {
        p += Math.pow(this.state.amplifier(bit).abs(), 2)
      }
    }
    return this.round(p, 5)
  }

  private round(n: number, decimal: number): number {
    return Math.round(n * Math.pow(10, decimal)) / Math.pow(10, decimal)
  }

  private applyBlochDisplay(bit: number): void {
    this.blochVectors[bit] = this.state.matrix
      .qubitDensityMatrix(bit)
      .qubitDensityMatrixToBlochVector()
  }

  private applyWriteGate(gate: WriteInstruction, bit: number): void {
    this.write(gate.value, bit)
  }

  private applyMeasureGate(gate: MeasureInstruction, bit: number): void {
    this.read(bit)
    if (gate.set) {
      this.flags[gate.set] = this.bits[bit] == 1
    }
  }

  private applyNotGate(gate: NotGateInstruction, bit: number): void {
    const controls = gate.controls

    if (controls.length == 0) {
      if (gate.if) {
        if (this.flags[gate.if]) {
          this.x(bit)
        }
      } else {
        this.x(bit)
      }
    } else if (controls.length == 1) {
      this.cnot(controls[0], bit)
    } else {
      const controlBits = controls.reduce((result, each) => {
        return result | (1 << each)
      }, 0)
      for (let b = 0; b < 1 << this.state.nqubit; b++) {
        if ((b & controlBits) != controlBits) continue

        if ((b & (1 << bit)) == 0) {
          const a0 = b
          const a1 = a0 ^ (1 << bit)
          const va0 = this.state.amplifier(a0)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(a0, va1)
          this.state.setAmplifier(a1, va0)
        }
      }
    }
  }

  private applyYGate(gate: YGateInstruction, bit: number): void {
    const controls = gate.controls

    if (controls.length == 0) {
      if (gate.if) {
        if (this.flags[gate.if]) {
          this.y(bit)
        }
      } else {
        this.y(bit)
      }
    } else {
      const controlBits = controls.reduce((result, each) => {
        return result | (1 << each)
      }, 0)
      for (let b = 0; b < 1 << this.state.nqubit; b++) {
        if ((b & controlBits) != controlBits) continue

        if ((b & (1 << bit)) == 0) {
          const a0 = b
          const a1 = a0 ^ (1 << bit)
          const va0 = this.state.amplifier(a0)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(
            a0,
            va1.times(new Complex(-1, 0)).times(Complex.I),
          )
          this.state.setAmplifier(a1, va0.times(Complex.I))
        }
      }
    }
  }

  private applyZGate(gate: ZGateInstruction, bit: number): void {
    const controls = gate.controls

    if (controls.length == 0) {
      if (gate.if) {
        if (this.flags[gate.if]) {
          this.z(bit)
        }
      } else {
        this.z(bit)
      }
    } else {
      const controlBits = controls.reduce((result, each) => {
        return result | (1 << each)
      }, 0)
      for (let b = 0; b < 1 << this.state.nqubit; b++) {
        if ((b & controlBits) != controlBits) continue

        if ((b & (1 << bit)) == 0) {
          const a0 = b
          const a1 = a0 ^ (1 << bit)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(a1, va1.times(new Complex(-1, 0)))
        }
      }
    }
  }

  private applyRootNotGate(gate: RootNotGateInstruction, bit: number): void {
    if (gate.if) {
      if (this.flags[gate.if]) {
        this.rnot(bit)
      }
    } else {
      this.rnot(bit)
    }
  }

  private applyRxGate(gate: RxGateInstruction, bit: number): void {
    const controls = gate.controls

    if (controls.length == 0) {
      if (gate.if) {
        if (this.flags[gate.if]) {
          this.rx(gate.theta, bit)
        }
      } else {
        this.rx(gate.theta, bit)
      }
    } else {
      const controlBits = controls.reduce((result, each) => {
        return result | (1 << each)
      }, 0)
      const numTheta = parseFormula<number>(
        gate.theta,
        PARSE_COMPLEX_TOKEN_MAP_RAD,
      )
      const costheta2 = Math.cos(numTheta / 2)
      const sintheta2 = Math.sin(numTheta / 2)

      for (let b = 0; b < 1 << this.state.nqubit; b++) {
        if ((b & controlBits) != controlBits) continue

        if ((b & (1 << bit)) == 0) {
          const a0 = b
          const a1 = a0 ^ (1 << bit)
          const va0 = this.state.amplifier(a0)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(
            a0,
            va0.times(costheta2).minus(va1.times(Complex.I).times(sintheta2)),
          )
          this.state.setAmplifier(
            a1,
            va1.times(costheta2).minus(va0.times(Complex.I).times(sintheta2)),
          )
        }
      }
    }
  }

  private applyRyGate(gate: RyGateInstruction, bit: number): void {
    const controls = gate.controls

    if (controls.length == 0) {
      if (gate.if) {
        if (this.flags[gate.if]) {
          this.ry(gate.theta, bit)
        }
      } else {
        this.ry(gate.theta, bit)
      }
    } else {
      const controlBits = controls.reduce((result, each) => {
        return result | (1 << each)
      }, 0)
      const numTheta = parseFormula<number>(
        gate.theta,
        PARSE_COMPLEX_TOKEN_MAP_RAD,
      )
      const costheta2 = Math.cos(numTheta / 2)
      const sintheta2 = Math.sin(numTheta / 2)

      for (let b = 0; b < 1 << this.state.nqubit; b++) {
        if ((b & controlBits) != controlBits) continue

        if ((b & (1 << bit)) == 0) {
          const a0 = b
          const a1 = a0 ^ (1 << bit)
          const va0 = this.state.amplifier(a0)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(
            a0,
            va0.times(costheta2).minus(va1.times(sintheta2)),
          )
          this.state.setAmplifier(
            a1,
            va0.times(sintheta2).plus(va1.times(costheta2)),
          )
        }
      }
    }
  }

  private applyRzGate(gate: RzGateInstruction, bit: number): void {
    const controls = gate.controls

    if (controls.length == 0) {
      if (gate.if) {
        if (this.flags[gate.if]) {
          this.rz(gate.theta, bit)
        }
      } else {
        this.rz(gate.theta, bit)
      }
    } else {
      const controlBits = controls.reduce((result, each) => {
        return result | (1 << each)
      }, 0)
      const numTheta = parseFormula<number>(
        gate.theta,
        PARSE_COMPLEX_TOKEN_MAP_RAD,
      )
      const i = Complex.I
      const e = new Complex(Math.E, 0)

      for (let b = 0; b < 1 << this.state.nqubit; b++) {
        if ((b & controlBits) != controlBits) continue

        if ((b & (1 << bit)) == 0) {
          const a0 = b
          const a1 = a0 ^ (1 << bit)
          const va0 = this.state.amplifier(a0)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(
            a0,
            va0.times(
              e.raisedTo(new Complex(-1, 0).times(i).times(numTheta / 2)),
            ),
          )
          this.state.setAmplifier(
            a1,
            va1.times(e.raisedTo(i.times(numTheta / 2))),
          )
        }
      }
    }
  }

  private applyPhaseGate(
    gate: PhaseGateInstruction,
    bit: number,
    gatesDone: [number, number][],
  ): void {
    const controls = gate.controls
    const targets = gate.targets

    if (controls.length == 0) {
      if (targets.length == 0) {
        if (gate.phi) {
          this.phase(gate.phi, bit)
        }
      } else if (targets.length == 2) {
        if (
          gatesDone.some((done) => {
            return done[0] === targets[0] && done[1] === targets[1]
          })
        ) {
          return
        }
        this.cphase(gate.phi, targets[0], targets[1])
        gatesDone.push(targets as [number, number])
      }
    } else {
      const controlBits = controls.reduce((result, each) => {
        return result | (1 << each)
      }, 0)
      for (let b = 0; b < 1 << this.state.nqubit; b++) {
        if ((b & controlBits) != controlBits) continue

        const u11 = this.eiphi(gate.phi)
        if ((b & (1 << bit)) == 0) {
          const a0 = b
          const a1 = a0 ^ (1 << bit)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(a1, u11.times(va1))
        }
      }
    }
  }

  private applyHadamardGate(gate: HadamardGateInstruction, bit: number): void {
    const controls = gate.controls

    if (controls.length == 0) {
      if (gate.if) {
        if (this.flags[gate.if]) {
          this.h(bit)
        }
      } else {
        this.h(bit)
      }
    } else {
      const controlBits = controls.reduce((result, each) => {
        return result | (1 << each)
      }, 0)
      for (let b = 0; b < 1 << this.state.nqubit; b++) {
        if ((b & controlBits) != controlBits) continue

        if ((b & (1 << bit)) == 0) {
          const a0 = b
          const a1 = a0 ^ (1 << bit)
          const va0 = this.state.amplifier(a0)
          const va1 = this.state.amplifier(a1)

          this.state.setAmplifier(a0, va0.plus(va1).dividedBy(Math.sqrt(2)))
          this.state.setAmplifier(a1, va0.minus(va1).dividedBy(Math.sqrt(2)))
        }
      }
    }
  }

  private applyControlGate(
    gate: ControlGateInstruction,
    instructions: SeriarizedInstruction[],
    gatesDone: number[][],
  ): void {
    const targets = gate.targets.sort()

    if (targets.length < 2) return

    if (
      gatesDone.some((done) => {
        return String(done) === String(targets)
      })
    ) {
      return
    }

    const allControl = targets.every((each) => {
      return instructions[each].type === "control-gate"
    })
    if (!allControl) return

    const controls = targets.slice(1)
    const controlBits = controls.reduce((result, each) => {
      return result | (1 << each)
    }, 0)

    const bit = targets[0]
    for (let b = 0; b < 1 << this.state.nqubit; b++) {
      if ((b & controlBits) != controlBits) continue

      if ((b & (1 << bit)) == 0) {
        const a0 = b
        const a1 = a0 ^ (1 << bit)
        const va1 = this.state.amplifier(a1)

        this.state.setAmplifier(a1, va1.times(-1))
      }
    }

    gatesDone.push(targets)
  }

  private applySwapGate(
    gate: SwapGateInstruction,
    gatesDone: [number, number][],
  ): void {
    const targets = gate.targets

    if (targets.length != 2) return
    if (
      gatesDone.some((done) => {
        return done[0] === targets[0] && done[1] === targets[1]
      })
    ) {
      return
    }

    if (gate.controls.length == 0) {
      this.swap(targets[0], targets[1])
      gatesDone.push(targets)
    } else if (gate.controls.length == 1) {
      gatesDone.push(targets)
      this.cswap(gate.controls[0], targets[0], targets[1])
    }
  }

  // e^iφ
  private eiphi(phi: string): Complex {
    const cache = this.eiphiCache[phi]
    if (cache) return cache

    const numPhi = parseFormula<number>(phi, PARSE_COMPLEX_TOKEN_MAP_RAD)
    const i = Complex.I
    const e = new Complex(Math.E, 0)
    const eiphi = e.raisedTo(i.times(numPhi))
    this.eiphiCache[phi] = eiphi

    return eiphi
  }
}
