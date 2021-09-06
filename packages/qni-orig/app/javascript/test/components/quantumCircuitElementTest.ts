import "components"
import { QuantumCircuitElement } from "quantum_circuit_component/quantumCircuitElement"

QUnit.module("QuantumCircuitElement", (hooks) => {
  let el: QuantumCircuitElement

  hooks.beforeEach(() => {
    el = document.createElement("quantum-circuit") as QuantumCircuitElement
  })

  hooks.afterEach(() => {
    document.body.removeChild(el)
  })

  QUnit.module("QuantumCircuitElement.h", () => {
    QUnit.test(".h(0)", (assert) => {
      document.body.append(el)
      el.h(0)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 1)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"H"')
    })

    QUnit.test(".h(1)", (assert) => {
      document.body.append(el)
      el.h(1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"H"')
    })

    QUnit.test(".h(0, 1)", (assert) => {
      document.body.append(el)
      el.h(0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"H"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"H"')
    })

    QUnit.test(".h(1, 3)", (assert) => {
      document.body.append(el)
      el.h(1, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"H"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"H"')
    })

    QUnit.test(".h() returns a QuantumCircuitElement", (assert) => {
      document.body.append(el)
      const result = el.h(0)

      assert.equal(el, result)
    })

    QUnit.test(".h() appends missing dropzones", (assert) => {
      document.body.append(el)
      el.x(0)
      el.h(1)

      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), 1)
    })

    QUnit.test(".h(-1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.h(-1))
    })

    QUnit.test(".h(16)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.h(16))
    })
  })

  QUnit.module("QuantumCircuitElement.x", () => {
    QUnit.test(".x(0)", (assert) => {
      document.body.append(el)
      el.x(0)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 1)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"X"')
    })

    QUnit.test(".x(1)", (assert) => {
      document.body.append(el)
      el.x(1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"X"')
    })

    QUnit.test(".x(0, 1)", (assert) => {
      document.body.append(el)
      el.x(0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"X"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"X"')
    })

    QUnit.test(".x(1, 3)", (assert) => {
      document.body.append(el)
      el.x(1, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"X"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"X"')
    })

    QUnit.test(".x() returns a QuantumCircuitElement", (assert) => {
      document.body.append(el)
      const result = el.x(0)

      assert.equal(el, result)
    })

    QUnit.test(".x() appends missing dropzones", (assert) => {
      document.body.append(el)
      el.h(0)
      el.x(1)

      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), 1)
    })

    QUnit.test(".x(-1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.x(-1))
    })

    QUnit.test(".x(16)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.x(16))
    })
  })

  QUnit.module("QuantumCircuitElement.cnot", () => {
    QUnit.test(".cnot(0, 1)", (assert) => {
      document.body.append(el)
      el.cnot(0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"•"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"X"')
    })

    QUnit.test(".cnot(1, 2)", (assert) => {
      document.body.append(el)
      el.cnot(1, 2)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 3)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"•"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), '"X"')
    })

    QUnit.test(".cnot(1, 3)", (assert) => {
      document.body.append(el)
      el.cnot(1, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"•"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"X"')
    })

    QUnit.test(".cnot() returns a QuantumCircuitElement", (assert) => {
      document.body.append(el)
      const result = el.cnot(0, 1)

      assert.equal(el, result)
    })

    QUnit.test(".cnot() appends missing dropzones", (assert) => {
      document.body.append(el)
      el.h(0)
      el.cnot(0, 1)

      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), 1)
    })

    QUnit.test(".cnot(-1, 0)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.cnot(-1, 0))
    })

    QUnit.test(".cnot(0, -1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.cnot(0, -1))
    })

    QUnit.test(".cnot(16, 0)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.cnot(16, 0))
    })

    QUnit.test(".cnot(0, 16)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.cnot(0, 16))
    })
  })

  QUnit.module("QuantumCircuitElement.ccnot", () => {
    QUnit.test(".ccnot(0, 1, 2)", (assert) => {
      document.body.append(el)
      el.ccnot(0, 1, 2)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 3)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"•"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"•"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), '"X"')
    })

    QUnit.test(".ccnot(1, 2, 3)", (assert) => {
      document.body.append(el)
      el.ccnot(1, 2, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"•"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), '"•"')
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"X"')
    })

    QUnit.test(".ccnot() returns a QuantumCircuitElement", (assert) => {
      document.body.append(el)
      const result = el.ccnot(0, 1, 2)

      assert.equal(el, result)
    })

    QUnit.test(".ccnot() appends missing dropzones", (assert) => {
      document.body.append(el)
      el.h(0)
      el.ccnot(0, 1, 2)

      assert.equal(el.circuitSteps[0].dropzones.length, 3)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
    })

    QUnit.test(".ccnot(-1, 0, 1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.ccnot(-1, 0, 1))
    })

    QUnit.test(".ccnot(0, -1, 1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.ccnot(0, -1, 1))
    })

    QUnit.test(".ccnot(0, 1, -1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.ccnot(0, 1, -1))
    })

    QUnit.test(".ccnot(16, 0, 1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.ccnot(16, 0, 1))
    })

    QUnit.test(".ccnot(0, 16, 1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.ccnot(0, 16, 1))
    })

    QUnit.test(".ccnot(0, 1, 16)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.ccnot(0, 1, 16))
    })
  })

  QUnit.module("QuantumCircuitElement.y", () => {
    QUnit.test(".y(0)", (assert) => {
      document.body.append(el)
      el.y(0)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 1)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"Y"')
    })

    QUnit.test(".y(1)", (assert) => {
      document.body.append(el)
      el.y(1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Y"')
    })

    QUnit.test(".y(0, 1)", (assert) => {
      document.body.append(el)
      el.y(0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"Y"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Y"')
    })

    QUnit.test(".y(1, 3)", (assert) => {
      document.body.append(el)
      el.y(1, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Y"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"Y"')
    })

    QUnit.test(".y() returns a QuantumCircuitElement", (assert) => {
      document.body.append(el)
      const result = el.y(0)

      assert.equal(el, result)
    })

    QUnit.test(".y() appends missing dropzones", (assert) => {
      document.body.append(el)
      el.h(0)
      el.y(1)

      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), 1)
    })

    QUnit.test(".y(-1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.y(-1))
    })

    QUnit.test(".y(16)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.y(16))
    })
  })

  QUnit.module("z", () => {
    QUnit.test(".z(0)", (assert) => {
      document.body.append(el)
      el.z(0)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 1)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"Z"')
    })

    QUnit.test(".z(1)", (assert) => {
      document.body.append(el)
      el.z(1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Z"')
    })

    QUnit.test(".z(0, 1)", (assert) => {
      document.body.append(el)
      el.z(0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"Z"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Z"')
    })

    QUnit.test(".z(1, 3)", (assert) => {
      document.body.append(el)
      el.z(1, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Z"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"Z"')
    })

    QUnit.test(".z() returns a QuantumCircuitElement", (assert) => {
      document.body.append(el)
      const result = el.z(0)

      assert.equal(el, result)
    })

    QUnit.test(".z() appends missing dropzones", (assert) => {
      document.body.append(el)
      el.h(0)
      el.z(1)

      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), 1)
    })

    QUnit.test(".z(-1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.z(-1))
    })

    QUnit.test(".z(16)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.z(16))
    })
  })

  QUnit.module("phase", () => {
    QUnit.test(".phase(0.123, 0)", (assert) => {
      document.body.append(el)
      el.phase(0.123, 0)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 1)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"P(0.123)"')
    })

    QUnit.test(".phase(0.123, 1)", (assert) => {
      document.body.append(el)
      el.phase(0.123, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"P(0.123)"')
    })

    QUnit.test(".phase(0.123, 0, 1)", (assert) => {
      document.body.append(el)
      el.phase(0.123, 0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"P(0.123)"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"P(0.123)"')
    })

    QUnit.test(".phase(1, 3)", (assert) => {
      document.body.append(el)
      el.phase(0.123, 1, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"P(0.123)"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"P(0.123)"')
    })

    QUnit.test(".phase() returns a QuantumCircuitElement", (assert) => {
      document.body.append(el)
      const result = el.phase(0.123, 0)

      assert.equal(el, result)
    })

    QUnit.test(".phase() appends missing dropzones", (assert) => {
      document.body.append(el)
      el.h(0)
      el.phase(0.123, 1)

      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), 1)
    })

    QUnit.test(".phase(0.123, -1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.phase(0.123, -1))
    })

    QUnit.test(".phase(0.123, 16)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.phase(0.123, 16))
    })
  })

  QUnit.module("rnot", () => {
    QUnit.test(".rnot(0)", (assert) => {
      document.body.append(el)
      el.rnot(0)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 1)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"X^½"')
    })

    QUnit.test(".rnot(1)", (assert) => {
      document.body.append(el)
      el.rnot(1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"X^½"')
    })

    QUnit.test(".rnot(0, 1)", (assert) => {
      document.body.append(el)
      el.rnot(0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"X^½"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"X^½"')
    })

    QUnit.test(".rnot(1, 3)", (assert) => {
      document.body.append(el)
      el.rnot(1, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"X^½"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"X^½"')
    })

    QUnit.test(".rnot() returns a QuantumCircuitElement", (assert) => {
      document.body.append(el)
      const result = el.rnot(0)

      assert.equal(el, result)
    })

    QUnit.test(".rnot() appends missing dropzones", (assert) => {
      document.body.append(el)
      el.h(0)
      el.rnot(1)

      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), 1)
    })

    QUnit.test(".rnot(-1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.rnot(-1))
    })

    QUnit.test(".rnot(16)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.rnot(16))
    })
  })

  QUnit.module("rx", () => {
    QUnit.test(".rx(0.123, 0)", (assert) => {
      document.body.append(el)
      el.rx(0.123, 0)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 1)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"Rx(0.123)"')
    })

    QUnit.test(".rx(0.123, 1)", (assert) => {
      document.body.append(el)
      el.rx(0.123, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Rx(0.123)"')
    })

    QUnit.test(".rx(0.123, 0, 1)", (assert) => {
      document.body.append(el)
      el.rx(0.123, 0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"Rx(0.123)"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Rx(0.123)"')
    })

    QUnit.test(".rx(0.123, 1, 3)", (assert) => {
      document.body.append(el)
      el.rx(0.123, 1, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Rx(0.123)"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"Rx(0.123)"')
    })

    QUnit.test(".rx() returns a QuantumCircuitElement", (assert) => {
      document.body.append(el)
      const result = el.rx(0.123, 0)

      assert.equal(el, result)
    })

    QUnit.test(".rx() appends missing dropzones", (assert) => {
      document.body.append(el)
      el.h(0)
      el.rx(0.123, 1)

      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), 1)
    })

    QUnit.test(".rx(0.123, -1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.rx(0.123, -1))
    })

    QUnit.test(".rx(0.123, 16)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.rx(0.123, 16))
    })
  })

  QUnit.module("ry", () => {
    QUnit.test(".ry(0.123, 0)", (assert) => {
      document.body.append(el)
      el.ry(0.123, 0)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 1)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"Ry(0.123)"')
    })

    QUnit.test(".ry(0.123, 1)", (assert) => {
      document.body.append(el)
      el.ry(0.123, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Ry(0.123)"')
    })

    QUnit.test(".ry(0.123, 0, 1)", (assert) => {
      document.body.append(el)
      el.ry(0.123, 0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"Ry(0.123)"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Ry(0.123)"')
    })

    QUnit.test(".ry(0.123, 1, 3)", (assert) => {
      document.body.append(el)
      el.ry(0.123, 1, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Ry(0.123)"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"Ry(0.123)"')
    })

    QUnit.test(".ry() returns a QuantumCircuitElement", (assert) => {
      document.body.append(el)
      const result = el.ry(0.123, 0)

      assert.equal(el, result)
    })

    QUnit.test(".ry() appends missing dropzones", (assert) => {
      document.body.append(el)
      el.h(0)
      el.ry(0.123, 1)

      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), 1)
    })

    QUnit.test(".ry(0.123, -1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.ry(0.123, -1))
    })

    QUnit.test(".ry(0.123, 16)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.ry(0.123, 16))
    })
  })

  QUnit.module("rz", () => {
    QUnit.test(".rz(0.123, 0)", (assert) => {
      document.body.append(el)
      el.rz(0.123, 0)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 1)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"Rz(0.123)"')
    })

    QUnit.test(".rz(0.123, 1)", (assert) => {
      document.body.append(el)
      el.rz(0.123, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Rz(0.123)"')
    })

    QUnit.test(".rz(0.123, 0, 1)", (assert) => {
      document.body.append(el)
      el.rz(0.123, 0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"Rz(0.123)"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Rz(0.123)"')
    })

    QUnit.test(".rz(0.123, 1, 3)", (assert) => {
      document.body.append(el)
      el.rz(0.123, 1, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Rz(0.123)"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"Rz(0.123)"')
    })

    QUnit.test(".rz() returns a QuantumCircuitElement", (assert) => {
      document.body.append(el)
      const result = el.rz(0.123, 0)

      assert.equal(el, result)
    })

    QUnit.test(".rz() appends missing dropzones", (assert) => {
      document.body.append(el)
      el.h(0)
      el.rz(0.123, 1)

      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), 1)
    })

    QUnit.test(".rz(0.123, -1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.rz(0.123, -1))
    })

    QUnit.test(".rz(0.123, 16)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.rz(0.123, 16))
    })
  })

  QUnit.module("control", () => {
    QUnit.test(".control(0)", (assert) => {
      document.body.append(el)
      el.control(0)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 1)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"•"')
    })

    QUnit.test(".control(1)", (assert) => {
      document.body.append(el)
      el.control(1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"•"')
    })

    QUnit.test(".control(0, 1)", (assert) => {
      document.body.append(el)
      el.control(0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"•"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"•"')
    })

    QUnit.test(".control(1, 3)", (assert) => {
      document.body.append(el)
      el.control(1, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"•"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"•"')
    })

    QUnit.test(".control() returns a QuantumCircuitElement", (assert) => {
      document.body.append(el)
      const result = el.control(0)

      assert.equal(el, result)
    })

    QUnit.test(".control() appends missing dropzones", (assert) => {
      document.body.append(el)
      el.h(0)
      el.control(1)

      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), 1)
    })

    QUnit.test(".control(-1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.control(-1))
    })

    QUnit.test(".control(16)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.control(16))
    })
  })

  QUnit.module("swap", () => {
    QUnit.test(".swap(0, 1)", (assert) => {
      document.body.append(el)
      el.swap(0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"Swap"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Swap"')
    })

    QUnit.test(".swap(1, 3)", (assert) => {
      document.body.append(el)
      el.swap(1, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Swap"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"Swap"')
    })

    QUnit.test(".swap() returns a QuantumCircuitElement", (assert) => {
      document.body.append(el)
      const result = el.swap(0, 1)

      assert.equal(el, result)
    })

    QUnit.test(".swap() appends missing dropzones", (assert) => {
      document.body.append(el)
      el.h(0)
      el.swap(0, 1)

      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), 1)
    })

    QUnit.test(".swap(-1, 0)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.swap(-1, 0))
    })

    QUnit.test(".swap(0, 16)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.swap(0, 16))
    })
  })

  QUnit.module("QuantumCircuitElement.bloch", () => {
    QUnit.test(".bloch(0)", (assert) => {
      document.body.append(el)
      el.bloch(0)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 1)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"Bloch"')
    })

    QUnit.test(".bloch(1)", (assert) => {
      document.body.append(el)
      el.bloch(1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Bloch"')
    })

    QUnit.test(".bloch(0, 1)", (assert) => {
      document.body.append(el)
      el.bloch(0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"Bloch"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Bloch"')
    })

    QUnit.test(".bloch(1, 3)", (assert) => {
      document.body.append(el)
      el.bloch(1, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Bloch"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"Bloch"')
    })

    QUnit.test(".bloch() returns a QuantumCircuitElement", (assert) => {
      document.body.append(el)
      const result = el.bloch(0)

      assert.equal(el, result)
    })

    QUnit.test(".bloch() appends missing dropzones", (assert) => {
      document.body.append(el)
      el.h(0)
      el.bloch(1)

      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), 1)
    })

    QUnit.test(".bloch(-1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.bloch(-1))
    })

    QUnit.test(".bloch(16)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.bloch(16))
    })
  })

  QUnit.module("write", () => {
    QUnit.test(".write(0, 0)", (assert) => {
      document.body.append(el)
      el.write(0, 0)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 1)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"|0>"')
    })

    QUnit.test(".write(1, 0)", (assert) => {
      document.body.append(el)
      el.write(1, 0)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 1)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"|1>"')
    })

    QUnit.test(".write(0, 1)", (assert) => {
      document.body.append(el)
      el.write(0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"|0>"')
    })

    QUnit.test(".write(1, 1)", (assert) => {
      document.body.append(el)
      el.write(1, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"|1>"')
    })

    QUnit.test(".write(0, 0, 1)", (assert) => {
      document.body.append(el)
      el.write(0, 0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"|0>"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"|0>"')
    })

    QUnit.test(".write(1, 0, 1)", (assert) => {
      document.body.append(el)
      el.write(1, 0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"|1>"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"|1>"')
    })

    QUnit.test(".write(0, 1, 3)", (assert) => {
      document.body.append(el)
      el.write(0, 1, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"|0>"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"|0>"')
    })

    QUnit.test(".write(1, 1, 3)", (assert) => {
      document.body.append(el)
      el.write(1, 1, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"|1>"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"|1>"')
    })

    QUnit.test(".write() returns a QuantumCircuitElement", (assert) => {
      document.body.append(el)
      const result = el.write(0, 0)

      assert.equal(el, result)
    })

    QUnit.test(".write() appends missing dropzones", (assert) => {
      document.body.append(el)
      el.h(0)
      el.write(0, 1)

      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), 1)
    })

    QUnit.test(".write(0, -1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.write(0, -1))
    })

    QUnit.test(".write(0, 16)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.write(0, 16))
    })
  })

  QUnit.module("QuantumCircuitElement.measure", () => {
    QUnit.test(".measure(0)", (assert) => {
      document.body.append(el)
      el.measure(0)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 1)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"Measure"')
    })

    QUnit.test(".measure(1)", (assert) => {
      document.body.append(el)
      el.measure(1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Measure"')
    })

    QUnit.test(".measure(0, 1)", (assert) => {
      document.body.append(el)
      el.measure(0, 1)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), '"Measure"')
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Measure"')
    })

    QUnit.test(".measure(1, 3)", (assert) => {
      document.body.append(el)
      el.measure(1, 3)

      assert.equal(el.circuitSteps.length, 1)
      assert.equal(el.circuitSteps[0].dropzones.length, 4)
      assert.equal(el.circuitSteps[0].dropzones[0].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), '"Measure"')
      assert.equal(el.circuitSteps[0].dropzones[2].toJson(), 1)
      assert.equal(el.circuitSteps[0].dropzones[3].toJson(), '"Measure"')
    })

    QUnit.test(".measure() returns a QuantumCircuitElement", (assert) => {
      document.body.append(el)
      const result = el.measure(0)

      assert.equal(el, result)
    })

    QUnit.test(".measure() appends missing dropzones", (assert) => {
      document.body.append(el)
      el.h(0)
      el.measure(1)

      assert.equal(el.circuitSteps[0].dropzones.length, 2)
      assert.equal(el.circuitSteps[0].dropzones[1].toJson(), 1)
    })

    QUnit.test(".measure(-1)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.measure(-1))
    })

    QUnit.test(".measure(16)", (assert) => {
      document.body.append(el)

      assert.throws(() => el.measure(16))
    })
  })
})
