import { DetailedError, Format, Seq, seq, Util } from "lib/base"
// import { Controls } from "lib/circuit"
import { Complex } from "./complex"

export class Matrix {
  /**
   * The 2x2 Pauli X matrix.
   */
  static PAULI_X = Matrix.square(0, 1, 1, 0)

  /**
   * The 2x2 Pauli Y matrix.
   */
  static PAULI_Y = Matrix.square(0, new Complex(0, -1), Complex.I, 0)

  /**
   * The 2x2 Pauli Z matrix.
   */
  static PAULI_Z = Matrix.square(1, 0, 0, -1)

  /**
   * The 2x2 Hadamard matrix.
   */
  static HADAMARD = Matrix.square(1, 1, 1, -1).times(Math.sqrt(0.5))

  public width: number
  public height: number
  public buffer: Float64Array | Float32Array

  /**
   * @param rows  The rows of complex coefficients making up the matrix.
   */
  static fromRows(rows: Complex[][]): Matrix {
    Util.need(
      Array.isArray(rows) && rows.every(Array.isArray),
      "array rows",
      rows,
    )
    Util.need(rows.length > 0, "non-zero height", rows)

    const seqRows = seq(rows)
    const h = rows.length
    const w = seqRows
      .map((e: Complex[]) => e.length)
      .distinct()
      .single(null)
    if (w === null) {
      throw new DetailedError("Inconsistent row widths.", { rows })
    }

    const buffer = new Float64Array(w * h * 2)
    let i = 0
    for (const row of rows) {
      for (const cell of row) {
        buffer[i] = Complex.realPartOf(cell)
        buffer[i + 1] = Complex.imagPartOf(cell)
        i += 2
      }
    }
    return new Matrix(w, h, buffer)
  }

  /**
   * Returns a matrix of the given dimensions, using the given function to
   * generate the coefficients.
   */
  static generate(
    width: number,
    height: number,
    coefficientRowColGenerator: (row: number, col: number) => number | Complex,
  ): Matrix {
    const buf = new Float64Array(width * height * 2)
    for (let r = 0; r < height; r++) {
      for (let c = 0; c < width; c++) {
        const k = (r * width + c) * 2
        const v = coefficientRowColGenerator(r, c)
        buf[k] = Complex.realPartOf(v)
        buf[k + 1] = Complex.imagPartOf(v)
      }
    }
    return new Matrix(width, height, buf)
  }

  /**
   * Returns a 1x1 matrix containing the given value.
   */
  static solo(coef: number | Complex): Matrix {
    return new Matrix(
      1,
      1,
      new Float64Array([Complex.realPartOf(coef), Complex.imagPartOf(coef)]),
    )
  }

  /**
   * Converts the given square block of coefficients into a square complex matrix.
   *
   * @param coefs The coefficients of the matrix, arranged in a flat array of
   * square length with the coefficients (which can be numeric or complex) in
   * row order.
   */
  static square(...coefs: (number | Complex)[]): Matrix {
    Util.need(Array.isArray(coefs), "Array.isArray(coefs)", coefs)
    const n = Math.round(Math.sqrt(coefs.length))
    Util.need(
      n * n === coefs.length,
      "Matrix.square: non-square number of arguments",
    )
    return Matrix.generate(n, n, (r, c) => coefs[r * n + c])
  }

  /**
   * Converts the array of complex coefficients into a column vector.
   */
  static col(...coefs: (number | Complex)[]): Matrix {
    Util.need(Array.isArray(coefs), "Array.isArray(coefs)", coefs)
    return Matrix.generate(1, coefs.length, (r) => coefs[r])
  }

  /**
   * Converts the array of complex coefficients into a row vector.
   */
  static row(...coefs: (number | Complex)[]): Matrix {
    Util.need(Array.isArray(coefs), "Array.isArray(coefs)", coefs)
    return Matrix.generate(coefs.length, 1, (r, c) => coefs[c])
  }

  /**
   * Returns the identity matrix, with 1s on the main diagonal and all other
   * entries zero.
   *
   * @param size  The dimension of the returned identity matrix.
   */
  static identity(size: number): Matrix {
    if (!Number.isInteger(size) || size <= 0) {
      throw new DetailedError("Bad size", { size })
    }
    const buf = new Float64Array(size * size * 2)
    for (let k = 0; k < size; k++) {
      buf[k * (size + 1) * 2] = 1
    }
    return new Matrix(size, size, buf)
  }

  static parse(text: string): Matrix {
    text = text.replace(/\s/g, "")

    if (
      text.length < 4 ||
      text.substr(0, 2) !== "{{" ||
      text.substr(text.length - 2, 2) !== "}}"
    ) {
      throw new Error("Not surrounded by {{}}.")
    }

    // Some kind of recursive descent parser would be a better idea, but here we are.
    return Matrix.fromRows(
      text
        .substr(2, text.length - 4)
        .split("},{")
        // eslint-disable-next-line @typescript-eslint/unbound-method
        .map((row) => row.split(",").map(Complex.parse)),
    )
  }

  /**
   * Returns a diagonal matrix of the given size, using the given function to
   * generate the diagonal coefficients.
   */
  static generateDiagonal(
    size: number,
    coefficientFunc: (e: number) => number | Complex,
  ): Matrix {
    const buf = new Float64Array(size * size * 2)
    for (let i = 0; i < size; i++) {
      const k = i * (size + 1) * 2
      const v = coefficientFunc(i)
      buf[k] = Complex.realPartOf(v)
      buf[k + 1] = Complex.imagPartOf(v)
    }
    return new Matrix(size, size, buf)
  }

  /**
   * Returns a matrix of the given size, with each column being mapped to a row
   * by the transition function.
   */
  static generateTransition(
    size: number,
    transitionFunc: (e: number) => number,
  ): Matrix {
    const buf = new Float64Array(size * size * 2)
    for (let c = 0; c < size; c++) {
      const r = transitionFunc(c)
      const k = (r * size + c) * 2
      buf[k] = 1
    }
    return new Matrix(size, size, buf)
  }

  /**
   * Returns a zero matrix of the given size.
   */
  static zero(width: number, height: number): Matrix {
    return new Matrix(width, height, new Float64Array(width * height * 2))
  }

  getColumn(colIndex: number): Complex[] {
    Util.need(
      colIndex >= 0 && colIndex <= this.width,
      "colIndex >= 0 && colIndex <= this.width",
    )
    const col = []
    for (let r = 0; r < this.height; r++) {
      col.push(this.cell(colIndex, r))
    }
    return col
  }

  /**
   * @param buffer  Complex value data, packed row-wise with real and imaginary
   * coefficients interleaved.
   */
  constructor(
    width: number,
    height: number,
    buffer: Float64Array | Float32Array,
  ) {
    if (width * height * 2 !== buffer.length) {
      throw new DetailedError("width*height*2 !== buffer.length", {
        width,
        height,
        len: buffer.length,
      })
    }
    this.width = width
    this.height = height
    this.buffer = buffer
  }

  /**
   * Determines if the matrix is approximately unitary or not.
   * @param {!number} epsilon Distance away from unitary the matrix is allowed to be. Defaults to 0.
   * @returns {!boolean}
   */
  isUnitary(epsilon: number): boolean {
    const n = this.width
    if (this.height !== n) {
      return false
    }
    return this.times(this.adjoint()).isApproximatelyEqualTo(
      Matrix.identity(n),
      epsilon,
    )
  }

  /**
   * Returns the conjugate transpose of the receiving operation (the adjoint is
   * the inverse when the matrix is unitary).
   */
  adjoint(): Matrix {
    const w = this.height
    const h = this.width
    const newBuf = new Float64Array(w * h * 2)
    for (let r = 0; r < h; r++) {
      for (let c = 0; c < w; c++) {
        const kIn = (c * this.width + r) * 2
        const kOut = (r * w + c) * 2
        newBuf[kOut] = this.buffer[kIn]
        newBuf[kOut + 1] = -this.buffer[kIn + 1]
      }
    }
    return new Matrix(w, h, newBuf)
  }

  /**
   * Returns the product of the receiving matrix and the given matrix or scalar.
   * @param other  A matrix or a scalar value.
   */
  times(other: Matrix | number | Complex): Matrix {
    return other instanceof Matrix
      ? this.timesMatrix(other)
      : this.timesScalar(other)
  }

  /**
   * Returns the matrix product (i.e. the composition) of the receiving matrix
   * and the given matrix.
   */
  private timesMatrix(other: Matrix): Matrix {
    if (this.width !== other.height) {
      throw new DetailedError("Incompatible sizes.", { this: this, other })
    }
    const w = other.width
    const h = this.height
    const n = this.width
    const newBuffer = new Float64Array(w * h * 2)
    for (let r = 0; r < h; r++) {
      for (let c = 0; c < w; c++) {
        const k3 = (r * w + c) * 2
        for (let k = 0; k < n; k++) {
          const k1 = (r * n + k) * 2
          const k2 = (k * w + c) * 2
          const r1 = this.buffer[k1]
          const i1 = this.buffer[k1 + 1]
          const r2 = other.buffer[k2]
          const i2 = other.buffer[k2 + 1]
          const r3 = r1 * r2 - i1 * i2
          const i3 = r1 * i2 + r2 * i1
          newBuffer[k3] += r3
          newBuffer[k3 + 1] += i3
        }
      }
    }
    return new Matrix(w, h, newBuffer)
  }

  /**
   * Returns the result of scaling the receiving matrix by the given scalar
   * factor.
   */
  private timesScalar(v: number | Complex): Matrix {
    const newBuffer = new Float64Array(this.buffer.length)
    const sr = Complex.realPartOf(v)
    const si = Complex.imagPartOf(v)
    for (let i = 0; i < newBuffer.length; i += 2) {
      const vr = this.buffer[i]
      const vi = this.buffer[i + 1]
      newBuffer[i] = vr * sr - vi * si
      newBuffer[i + 1] = vr * si + vi * sr
    }
    return new Matrix(this.width, this.height, newBuffer)
  }

  /**
   * Returns a rotation matrix that rotations by the given angle.
   *
   * @param theta  The angle the matrix should rotate by, in radians.
   * @returns A real matrix.
   */
  static rotation(theta: number): Matrix {
    const c = Math.cos(theta)
    const s = Math.sin(theta)
    return Matrix.square(c, -s, s, c)
  }

  /**
   * Determines if the receiving matrix is equal to the given matrix. This
   * method returns false, instead of throwing, when given badly typed
   * arguments.
   */
  isEqualTo(obj: Matrix | unknown): boolean {
    if (this === obj) {
      return true
    }
    if (!(obj instanceof Matrix)) {
      return false
    }

    const other = obj
    return (
      this.width === other.width &&
      this.height === other.height &&
      Seq.range(this.buffer.length).every(
        (i) => this.buffer[i] === other.buffer[i],
      )
    )
  }

  /**
   * Determines if the receiving matrix is approximately equal to the given
   * matrix.
   *
   * @param epsilon  Maximum distance between the two matrices.
   */
  isApproximatelyEqualTo(other: Matrix | unknown, epsilon: number): boolean {
    return (
      other instanceof Matrix &&
      this.width === other.width &&
      this.height === other.height &&
      Math.sqrt(this.minus(other).norm2()) <= epsilon
    )
  }

  /**
   * Returns the difference from the receiving matrix to the given matrix.
   */
  minus(other: Matrix): Matrix {
    const { width: w, height: h, buffer: b1 } = this
    const b2 = other.buffer
    Util.need(
      other.width === w && other.height === h,
      "Matrix.minus: compatible sizes",
    )

    const newBuffer = new Float64Array(this.buffer.length)
    for (let i = 0; i < newBuffer.length; i++) {
      newBuffer[i] = b1[i] - b2[i]
    }
    return new Matrix(w, h, newBuffer)
  }

  /**
   * Returns the receiving matrix's squared euclidean length.
   */
  norm2(): number {
    let t = 0
    for (const e of this.buffer) {
      t += e * e
    }
    return t
  }

  /**
   * Returns a text representation of the receiving matrix.
   * (It uses curly braces so you can paste it into wolfram alpha.)
   */
  toString(format = Format.EXACT): string {
    const data = this.rows()
      .map((row) =>
        row.map((e) => e.toString(format)).join(format.itemSeparator),
      )
      .join("}" + format.itemSeparator + "{")
    return "{{" + data + "}}"
  }

  rows(): Complex[][] {
    return Seq.range(this.height)
      .map((row) =>
        Seq.range(this.width)
          .map((col) => this.cell(col, row))
          .toArray(),
      )
      .toArray()
  }

  cell(col: number, row: number): Complex {
    if (col < 0 || row < 0 || col >= this.width || row >= this.height) {
      throw new DetailedError("Cell out of range", {
        col,
        row,
        width: this.width,
        height: this.height,
      })
    }
    const i = (this.width * row + col) * 2
    return new Complex(this.buffer[i], this.buffer[i + 1])
  }

  set(col: number, row: number, value: Complex): void {
    if (col < 0 || row < 0 || col >= this.width || row >= this.height) {
      throw new DetailedError("Cell out of range", {
        col,
        row,
        width: this.width,
        height: this.height,
      })
    }
    const i = (this.width * row + col) * 2
    this.buffer[i] = value.real
    this.buffer[i + 1] = value.imag
  }

  /**
   * Determines if the matrix is approximately equal to its own conjugate
   * transpose or not.
   *
   * @param epsilon  Maximum error per entry.
   */
  isApproximatelyHermitian(epsilon: number): boolean {
    if (this.width !== this.height) {
      return false
    }
    for (let c = 0; c < this.width; c++) {
      for (let r = 0; r < this.height; r++) {
        const i = (this.width * r + c) * 2
        const j = (this.width * c + r) * 2
        if (Math.abs(this.buffer[i] - this.buffer[j]) > epsilon) {
          return false
        }
        if (Math.abs(this.buffer[i + 1] + this.buffer[j + 1]) > epsilon) {
          return false
        }
      }
    }
    return true
  }

  /**
   * Determines if the matrix is an identity matrix.
   */
  isIdentity(epsilon = 0): boolean {
    if (this.width !== this.height) {
      return false
    }
    for (let c = 0; c < this.width; c++) {
      for (let r = 0; r < this.height; r++) {
        const i = (this.width * r + c) * 2
        const dr = Math.abs(this.buffer[i] - (r === c ? 1 : 0))
        const di = Math.abs(this.buffer[i + 1])
        if (Math.max(dr, di) > epsilon) {
          return false
        }
      }
    }
    return !this.hasNaN()
  }

  /**
   * Determines if the matrix contains a NaN.
   */
  hasNaN(): boolean {
    for (let i = 0; i < this.buffer.length; i++) {
      if (isNaN(this.buffer[i])) {
        return true
      }
    }
    return false
  }

  /**
   * Determines if the matrix is a scaled identity matrix.
   */
  isScaler(epsilon = 0): boolean {
    if (this.width !== this.height) {
      return false
    }
    const sr = this.buffer[0]
    const si = this.buffer[1]
    for (let c = 0; c < this.width; c++) {
      for (let r = 0; r < this.height; r++) {
        const i = (this.width * r + c) * 2
        const dr = Math.abs(this.buffer[i] - (r === c ? sr : 0))
        const di = Math.abs(this.buffer[i + 1] - (r === c ? si : 0))
        if (Math.max(dr, di) > epsilon) {
          return false
        }
      }
    }
    return !this.hasNaN()
  }

  /**
   * Determines if the matrix can be factored into a permutation matrix times a
   * diagonal matrix.
   */
  isPhasedPermutation(epsilon = 0): boolean {
    if (this.width !== this.height) {
      return false
    }

    const n = this.width
    const colCounts = new Uint32Array(n)
    const rowCounts = new Uint32Array(n)

    // Count number of non-zero elements in each row and column.
    for (let col = 0; col < n; col++) {
      for (let row = 0; row < n; row++) {
        const i = (row * n + col) * 2
        const m = Math.max(
          Math.abs(this.buffer[i]),
          Math.abs(this.buffer[i + 1]),
        )
        if (isNaN(m) || m > epsilon) {
          colCounts[col] += 1
          rowCounts[row] += 1
        }
      }
    }

    // Phased permutations have at most one entry in each row and column.
    return seq(colCounts)
      .concat(rowCounts)
      .every((e) => e <= 1)
  }

  /**
   * @returns The transpose of the receiving matrix.
   */
  transpose(): Matrix {
    const w = this.height
    const h = this.width
    const newBuf = new Float64Array(w * h * 2)
    for (let r = 0; r < h; r++) {
      for (let c = 0; c < w; c++) {
        const kIn = (c * this.width + r) * 2
        const kOut = (r * w + c) * 2
        newBuf[kOut] = this.buffer[kIn]
        newBuf[kOut + 1] = this.buffer[kIn + 1]
      }
    }
    return new Matrix(w, h, newBuf)
  }

  /**
   * Returns the sum of the receiving matrix and the given matrix.
   */
  plus(other: Matrix): Matrix {
    const { width: w, height: h, buffer: b1 } = this
    const b2 = other.buffer
    Util.need(
      other.width === w && other.height === h,
      "Matrix.plus: compatible sizes",
    )

    const newBuffer = new Float64Array(this.buffer.length)
    for (let i = 0; i < newBuffer.length; i++) {
      newBuffer[i] = b1[i] + b2[i]
    }
    return new Matrix(w, h, newBuffer)
  }

  /**
   * Returns the tensor product of the receiving matrix and the given matrix.
   */
  tensorProduct(other: Matrix): Matrix {
    const w1 = this.width
    const h1 = this.height
    const w2 = other.width
    const h2 = other.height
    const w = w1 * w2
    const h = h1 * h2
    const newBuffer = new Float64Array(w * h * 2)
    for (let r1 = 0; r1 < h1; r1++) {
      for (let r2 = 0; r2 < h2; r2++) {
        for (let c1 = 0; c1 < w1; c1++) {
          for (let c2 = 0; c2 < w2; c2++) {
            const k1 = (r1 * w1 + c1) * 2
            const k2 = (r2 * w2 + c2) * 2
            const k3 = ((r1 * h2 + r2) * w + (c1 * w2 + c2)) * 2
            const cr1 = this.buffer[k1]
            const ci1 = this.buffer[k1 + 1]
            const cr2 = other.buffer[k2]
            const ci2 = other.buffer[k2 + 1]
            const cr3 = cr1 * cr2 - ci1 * ci2
            const ci3 = cr1 * ci2 + ci1 * cr2
            newBuffer[k3] = cr3
            newBuffer[k3 + 1] = ci3
          }
        }
      }
    }
    return new Matrix(w, h, newBuffer)
  }

  /**
   * Returns the result of tensor-product-ing the receiving matrix with itself
   * the given number of times.
   *
   * @param exponent The number of times the matrix is tensor-product-ed with
   * itself.
   */
  tensorPower(exponent: number): Matrix {
    if (!Number.isInteger(exponent) || exponent < 0) {
      throw new DetailedError("Bad exponent", { exponent })
    }
    let t = Matrix.identity(1)
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let p = this
    for (let m = 1; m <= exponent; m *= 2) {
      if ((m & exponent) !== 0) {
        t = t.tensorProduct(p)
      }
      p = p.tensorProduct(p)
    }
    return t
  }

  timesQubitOperation(
    operation2x2: Matrix,
    qubitIndex: number,
    controlMask: number,
    desiredValueMask: number,
  ): Matrix {
    Util.need(
      (controlMask & (1 << qubitIndex)) === 0,
      "Matrix.timesQubitOperation: self-controlled",
    )
    Util.need(
      operation2x2.width === 2 && operation2x2.height === 2,
      "Matrix.timesQubitOperation: not 2x2",
    )

    const { width: w, height: h, buffer: old } = this
    const [ar, ai, br, bi, cr, ci, dr, di] = operation2x2.buffer

    Util.need(
      h >= 2 << qubitIndex,
      "Matrix.timesQubitOperation: qubit index out of range",
    )

    const buf = new Float64Array(old)
    let i = 0
    for (let r = 0; r < h; r++) {
      const isControlled = ((controlMask & r) ^ desiredValueMask) !== 0
      const qubitVal = (r & (1 << qubitIndex)) !== 0
      for (let c = 0; c < w; c++) {
        if (!isControlled && !qubitVal) {
          const j = i + (1 << qubitIndex) * 2 * w
          const xr = buf[i]
          const xi = buf[i + 1]
          const yr = buf[j]
          const yi = buf[j + 1]

          buf[i] = xr * ar - xi * ai + yr * br - yi * bi
          buf[i + 1] = xr * ai + xi * ar + yr * bi + yi * br
          buf[j] = xr * cr - xi * ci + yr * dr - yi * di
          buf[j + 1] = xr * ci + xi * cr + yr * di + yi * dr
        }
        i += 2
      }
    }
    return new Matrix(w, h, buf)
  }

  /**
   * Returns a single-qubit quantum operation corresponding to the given
   * 3-dimensional rotation in some useful way.
   *
   * The mapping is chosen so that rotating around each axis runs through the
   * respective pauli matrix, and so that cutting a rotation in half square
   * roots the result, and a few other nice properties.
   *
   * The direction of the given x, y, z vector determines which axis to rotate
   * around, and the length of the vector determines what fraction of an entire
   * turn to rotate. For example, if [x, y, z] is [1/√8), 0, 1/√8], then the
   * rotation is a half-turn around the X+Z axis and the resulting operation is
   * the Hadamard operation {{1, 1}, {1, -1}}/√2.
   *
   * @param x  The x component of the rotation vector.
   * @param y  The y component of the rotation vector.
   * @param z  The z component of the rotation vector.
   */
  static fromPauliRotation(x: number, y: number, z: number): Matrix {
    const sinc = (t) => {
      if (Math.abs(t) < 0.0002) {
        return 1 - (t * t) / 6.0
      }
      return Math.sin(t) / t
    }

    x = -x * Math.PI * 2
    y = -y * Math.PI * 2
    z = -z * Math.PI * 2

    const s = -11 * x + -13 * y + -17 * z >= 0 ? 1 : -1 // phase correction discontinuity on an awkward plane
    const theta = Math.sqrt(x * x + y * y + z * z)
    const sigma_v = Matrix.PAULI_X.times(x)
      .plus(Matrix.PAULI_Y.times(y))
      .plus(Matrix.PAULI_Z.times(z))

    /** @type {!Complex} */
    const [cos, sin] = Util.snappedCosSin(s * theta)
    const ci = new Complex(1 + cos, sin).times(0.5)
    /** @type {!Complex} */
    const cv = new Complex(
      Math.sin(theta / 2) * sinc(theta / 2),
      -s * sinc(theta),
    ).times(s * 0.5)

    //noinspection JSCheckFunctionSignatures
    const m = Matrix.identity(2).times(ci).minus(sigma_v.times(cv))
    const expectNiceValuesCorrection = (v) =>
      Format.simplifyByRounding(v, 0.0000000000001)
    return m.transformRealAndImagComponentsWith(expectNiceValuesCorrection)
  }

  private transformRealAndImagComponentsWith(
    func: (e: number) => number,
  ): Matrix {
    const buf = this.buffer.slice()
    for (let i = 0; i < buf.length; i++) {
      buf[i] = func(buf[i])
    }
    return new Matrix(this.width, this.height, buf)
  }

  /**
   * Returns a matrix for an n-wire circuit that swaps wires i and j.
   */
  static fromWireSwap(
    numWires: number,
    swapWire1: number,
    swapWire2: number,
  ): Matrix {
    const bitSwap = (n) => {
      const m1 = 1 << swapWire1
      const m2 = 1 << swapWire2
      let s = n & ~(m1 | m2)
      if ((n & m1) !== 0) {
        s |= m2
      }
      if ((n & m2) !== 0) {
        s |= m1
      }
      return s
    }
    return Matrix.generateTransition(1 << numWires, bitSwap)
  }

  /**
   * Factors the matrix int u*s*v parts, where u and v are unitary matrices and
   * s is a real diagonal matrix.
   */
  singularValueDecomposition(
    epsilon = 0,
    maxIterations = 100,
  ): { U: Matrix; S: Matrix; V: Matrix } {
    if (this.width !== this.height) {
      throw new DetailedError("Expected a square matrix.", this)
    }

    // eslint-disable-next-line prefer-const
    let { U, S, V } =
      this.width === 2
        ? this._unordered_singularValueDecomposition_2x2()
        : this._unordered_singularValueDecomposition_iterative(
            epsilon,
            maxIterations,
          )

    // Fix ordering, so that the singular values are ascending.
    const permutation = Seq.range(this.width)
      .sortedBy((i) => -S.cell(i, i).norm2())
      .toArray()
    for (let i = 0; i < S.width; i++) {
      const j = permutation.indexOf(i)
      if (i !== j) {
        U._inline_colMix_postMultiply(i, j, Matrix.PAULI_X)
        V._inline_rowMix_preMultiply(i, j, Matrix.PAULI_X)
        const si = i * (S.width + 1) * 2
        const sj = j * (S.width + 1) * 2
        ;[S.buffer[si], S.buffer[sj]] = [S.buffer[sj], S.buffer[si]]
        ;[S.buffer[si + 1], S.buffer[sj + 1]] = [
          S.buffer[sj + 1],
          S.buffer[si + 1],
        ]
        ;[permutation[j], permutation[i]] = [permutation[i], permutation[j]]
      }
    }

    // Fix phases.
    for (let i = 0; i < S.width; i++) {
      U._inline_colScale_postMultiply(i, S.cell(i, i).unit())
    }

    // Discard off-diagonal elements.
    S = Matrix.generateDiagonal(S.width, (k) => S.cell(k, k).abs())

    return { U, S, V }
  }

  _unordered_singularValueDecomposition_2x2(): {
    U: Matrix
    S: Matrix
    V: Matrix
  } {
    // Initial dirty work of clearing a corner is handled by the LQ decomposition.
    const U = Matrix.identity(2)
    // eslint-disable-next-line prefer-const
    let { L: S, Q: V } = this.lqDecomposition()

    // Cancel phase factors, leaving S with only real entries.
    const au = S.cell(0, 0).unit()
    const cu = S.cell(0, 1).unit()
    U._inline_colScale_postMultiply(0, au)
    U._inline_colScale_postMultiply(1, cu)
    S._inline_rowScale_preMultiply(0, au.conjugate())
    S._inline_rowScale_preMultiply(1, cu.conjugate())
    const du = S.cell(1, 1).unit()
    S._inline_colScale_postMultiply(1, du.conjugate())
    V._inline_rowScale_preMultiply(1, du)

    // Decompose the 2x2 real matrix.
    const [a, , b, , c, , d] = S.buffer
    const t = a + d
    const x = b + c
    const y = b - c
    const z = a - d
    const theta_0 = Math.atan2(x, t) / 2.0
    const theta_d = Math.atan2(y, z) / 2.0
    const s_0 = Math.sqrt(t * t + x * x) / 2.0
    const s_d = Math.sqrt(z * z + y * y) / 2.0
    U._inline_colMix_postMultiply(0, 1, Matrix.rotation(theta_0 - theta_d))
    V._inline_rowMix_preMultiply(0, 1, Matrix.rotation(theta_0 + theta_d))
    S = Matrix.square(s_0 + s_d, 0, 0, s_0 - s_d)

    return { U, S, V }
  }

  _unordered_singularValueDecomposition_iterative(
    epsilon = 0,
    maxIterations = 100,
  ): { U: Matrix; S: Matrix; V: Matrix } {
    let U = Matrix.identity(this.width)
    let S = this._clone()
    let V = Matrix.identity(this.width)
    let iter = 0
    while (!S.isDiagonal(epsilon) && iter++ < maxIterations) {
      const { Q: Ql, R: Sl } = S.qrDecomposition()
      const { L: Sr, Q: Qr } = Sl.lqDecomposition()
      U = U.times(Ql)
      S = Sr
      V = Qr.times(V)
    }

    return { U, S, V }
  }

  private _inline_colMix_postMultiply(
    col1: number,
    col2: number,
    op: Matrix,
  ): void {
    const [a, b, c, d] = op._2x2Breakdown()
    for (let row = 0; row < this.width; row++) {
      const x = this.cell(col1, row)
      const y = this.cell(col2, row)
      const v1 = x.times(a).plus(y.times(c))
      const v2 = x.times(b).plus(y.times(d))
      const k1 = (row * this.width + col1) * 2
      const k2 = (row * this.width + col2) * 2
      this.buffer[k1] = v1.real
      this.buffer[k1 + 1] = v1.imag
      this.buffer[k2] = v2.real
      this.buffer[k2 + 1] = v2.imag
    }
  }

  private _2x2Breakdown(): Complex[] {
    return [
      new Complex(this.buffer[0], this.buffer[1]),
      new Complex(this.buffer[2], this.buffer[3]),
      new Complex(this.buffer[4], this.buffer[5]),
      new Complex(this.buffer[6], this.buffer[7]),
    ]
  }

  private _inline_rowMix_preMultiply(
    row1: number,
    row2: number,
    op: Matrix,
  ): void {
    const [a, b, c, d] = op._2x2Breakdown()
    for (let col = 0; col < this.width; col++) {
      const x = this.cell(col, row1)
      const y = this.cell(col, row2)
      const v1 = x.times(a).plus(y.times(b))
      const v2 = x.times(c).plus(y.times(d))
      const k1 = (row1 * this.width + col) * 2
      const k2 = (row2 * this.width + col) * 2
      this.buffer[k1] = v1.real
      this.buffer[k1 + 1] = v1.imag
      this.buffer[k2] = v2.real
      this.buffer[k2 + 1] = v2.imag
    }
  }

  _inline_colScale_postMultiply(col: number, scale: Complex): void {
    for (let row = 0; row < this.height; row++) {
      const v1 = this.cell(col, row)
      const v2 = v1.times(scale)
      const k = (row * this.width + col) * 2
      this.buffer[k] = v2.real
      this.buffer[k + 1] = v2.imag
    }
  }

  /**
   * Factors the receiving square matrix into a lower diagonal matrix L times a
   * unitary matrix Q.
   */
  lqDecomposition(): { L: Matrix; Q: Matrix } {
    const { Q, R } = this.adjoint().qrDecomposition()
    return { L: R.adjoint(), Q: Q.adjoint() }
  }

  /**
   * Factors the receiving square matrix into a unitary matrix Q times an upper
   * diagonal matrix R.
   */
  qrDecomposition(): { Q: Matrix; R: Matrix } {
    if (this.width !== this.height) {
      throw new DetailedError("Expected a square matrix.", this)
    }
    const Q = Matrix.identity(this.width)
    const R = this._clone()
    for (let row = 0; row < this.height; row++) {
      for (let col = 0; col < row && col < this.width; col++) {
        // We're going to cancel out the value below the diagonal with a Givens rotation.

        const belowDiag = R.cell(col, row) // Zero this.
        const onDiag = R.cell(col, col) // With this.

        // Determine how much to rotate.
        const mag1 = onDiag.abs()
        const mag2 = belowDiag.abs()
        if (mag2 === 0) {
          continue // Already zero'd.
        }
        const theta = -Math.atan2(mag2, mag1)
        const cos = Math.cos(theta)
        const sin = Math.sin(theta)

        // Need to cancel phases before rotating.
        const phase1 = onDiag.unit().conjugate()
        const phase2 = belowDiag.unit().conjugate()

        // Apply the rotation to R (and cancel it with Q).
        const op = Matrix.square(
          phase1.times(cos),
          phase2.times(-sin),
          phase1.times(sin),
          phase2.times(cos),
        )
        R._inline_rowMix_preMultiply(col, row, op)
        Q._inline_colMix_postMultiply(col, row, op.adjoint())
      }

      // Cancel imaginary factors on diagonal.
      const u = R.cell(row, row).unit()
      R._inline_rowScale_preMultiply(row, u.conjugate())
      Q._inline_colScale_postMultiply(row, u)
    }
    return { Q, R }
  }

  private _clone(): Matrix {
    return new Matrix(this.width, this.height, this.buffer.slice())
  }

  private _inline_rowScale_preMultiply(row: number, scale: Complex): void {
    for (let col = 0; col < this.width; col++) {
      const v1 = this.cell(col, row)
      const v2 = v1.times(scale)
      const k = (row * this.width + col) * 2
      this.buffer[k] = v2.real
      this.buffer[k + 1] = v2.imag
    }
  }

  /**
   * Determines if the matrix is square and only has entries along its main
   * diagonal.
   */
  isDiagonal(epsilon = 0): boolean {
    for (let c = 0; c < this.width; c++) {
      for (let r = 0; r < this.height; r++) {
        if (r === c) {
          continue
        }
        const k = (this.width * r + c) * 2
        const dr = Math.abs(this.buffer[k])
        const di = Math.abs(this.buffer[k + 1])
        const d = Math.max(dr, di)
        if (isNaN(d) || d > epsilon) {
          return false
        }
      }
    }
    return this.width === this.height
  }

  /**
   * Returns the unitary matrix closest to the receiving matrix, "repairing" it
   * into a unitary form.
   */
  closestUnitary(epsilon = 0, maxIterations = 100): Matrix {
    const svd = this.singularValueDecomposition(epsilon, maxIterations)
    return svd.U.times(svd.V)
  }

  /**
   * Computes the eigenvalues and eigenvectors of a 2x2 matrix.
   */
  eigenDecomposition(): { val: Complex; vec: Matrix }[] {
    if (this.width !== 2 || this.height !== 2) {
      throw new Error("Not implemented: non-2x2 eigen decomposition")
    }
    const [a, b, c, d] = this._2x2Breakdown()
    const vals = Complex.rootsOfQuadratic(
      Complex.ONE,
      a.plus(d).times(-1),
      a.times(d).minus(b.times(c)),
    )
    if (vals.length === 0) {
      throw new Error("Degenerate")
    }
    if (vals.length === 1) {
      return [
        { val: vals[0], vec: Matrix.col(1, 0) },
        { val: vals[0], vec: Matrix.col(0, 1) },
      ]
    }
    return vals.map((v) => {
      // x*(a-L) + y*b = 0
      let [x, y] = [b.times(-1), a.minus(v)]
      if (x.isEqualTo(0) && y.isEqualTo(0)) {
        [x, y] = [v.minus(d), c]
      }
      if (!x.isEqualTo(0)) {
        y = y.dividedBy(x)
        x = Complex.ONE
      }
      const m = Math.sqrt(x.norm2() + y.norm2())
      if (m === 0) {
        throw new Error("Unexpected degenerate")
      }
      return { val: v, vec: Matrix.col(x, y).times(1 / m) }
    })
  }

  /**
   * Lifts a numeric function so that it applies to matrices by using the
   * eigendecomposition and applying the function
   * to the eigenvalue coefficients.
   */
  liftApply(complexFunction: (e: Complex) => Complex): Matrix {
    let t = this.times(0)
    for (const { val, vec } of this.eigenDecomposition()) {
      const fVal = complexFunction(val)
      const part = vec.times(vec.adjoint())
      t = t.plus(part.times(fVal))
    }
    return t
  }

  /**
   * Returns the matrix' trace (i.e. the sum of its diagonal elements, i.e. the
   * sum of its eigenvalues if it's square).
   */
  trace(): Complex {
    let total_r = 0
    let total_i = 0
    const d = this.width * 2 + 2
    for (let i = 0; i < this.buffer.length; i += d) {
      total_r += this.buffer[i]
      total_i += this.buffer[i + 1]
    }
    return new Complex(total_r, total_i)
  }

  /**
   * Returns the bloch sphere vector (as an x,y,z array) corresponding to this
   * density matrix.
   */
  qubitDensityMatrixToBlochVector(): number[] {
    if (this.width !== 2 || this.height !== 2) {
      throw new DetailedError("Need a 2x2 density matrix.", this)
    }
    if (!this.isApproximatelyHermitian(0.01)) {
      throw new DetailedError("Density matrix should be Hermitian.", this)
    }
    if (!this.trace().isApproximatelyEqualTo(1, 0.01)) {
      throw new DetailedError("Density matrix should have unit trace.", this)
    }

    // Density matrix from bloch vector equation: M = 1/2 (I + vσ)
    //noinspection JSUnusedLocalSymbols
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ar, ai, br, bi, cr, ci, dr, di] = this.buffer
    const x = -cr - br
    const y = bi - ci
    const z = dr - ar
    return [x, y, z]
  }

  /**
   * Returns the square matrix' determinant (i.e. the product of its
   * eigenvalues).
   */
  determinant(): Complex {
    Util.need(this.width === this.height, "Must be square")
    const n = this.width
    if (n === 1) {
      return this.cell(0, 0)
    }
    return Seq.range(n)
      .map((k) => {
        const cutColMatrix = Matrix.generate(n - 1, n - 1, (r, c) =>
          this.cell(c + (c < k ? 0 : 1), r + 1),
        )
        return cutColMatrix
          .determinant()
          .times(this.cell(k, 0))
          .times(Math.pow(-1, k))
      })
      .aggregate(Complex.ZERO, (a, e) => a.plus(e))
  }

  /**
   * Returns the matrix U = exp(i φ) (I cos(θ/2) - v σ i sin(θ/2)).
   */
  static fromAngleAxisPhaseRotation(
    angle: number,
    axis: number[],
    phase: number,
  ): Matrix {
    const [x, y, z] = axis
    Util.need(
      Math.abs(x * x + y * y + z * z - 1) < 0.000001,
      "Not a unit axis.",
    )

    const vσ = Matrix.PAULI_X.times(x)
      .plus(Matrix.PAULI_Y.times(y))
      .plus(Matrix.PAULI_Z.times(z))
    const [cos, sin] = Util.snappedCosSin(-angle / 2)
    return Matrix.identity(2)
      .times(cos)
      .plus(vσ.times(new Complex(0, sin)))
      .times(Complex.polar(1, phase))
  }

  /**
   * Given a single-qubit operation matrix U, finds φ, θ, and v=[x,y,z] that satisfy
   * U = exp(i φ) (I cos(θ/2) - v σ i sin(θ/2))
   */
  qubitOperationToAngleAxisRotation(): {
    axis: number[]
    angle: number
    phase: number
  } {
    Util.need(this.width === 2 && this.height === 2, "Need a 2x2 matrix.")
    Util.need(this.isUnitary(0.01), "Need a unitary matrix.")

    // Extract orthogonal components, adjusting for factors of i.
    const [a, b, c, d] = this._2x2Breakdown()
    const wφ = a.plus(d)
    const xφ = b.plus(c).dividedBy(Complex.I)
    const yφ = b.minus(c)
    const zφ = a.minus(d).dividedBy(Complex.I)

    // Cancel global phase factor, pushing all values onto the real line.
    // let φ = seq([wφ, xφ, yφ, zφ]).maxBy(e => e.abs())
    //   .unit()
    //   .times(2) as Complex
    const t: Complex = seq([wφ, xφ, yφ, zφ]).maxBy((e: Complex) => e.abs())
    let φ = t.unit().times(2)

    const w = Math.min(1, Math.max(-1, wφ.dividedBy(φ).real))
    let x = xφ.dividedBy(φ).real
    let y = yφ.dividedBy(φ).real
    let z = zφ.dividedBy(φ).real
    let θ = -2 * Math.acos(w)

    // Normalize axis.
    const n = Math.sqrt(x * x + y * y + z * z)
    if (n < 0.0000001) {
      // There's an axis singularity near θ=0. Just default to no rotation around the X axis.
      return { axis: [1, 0, 0], angle: 0, phase: φ.phase() }
    }
    x /= n
    y /= n
    z /= n

    // Prefer θ in [-π, π].
    if (θ <= -Math.PI) {
      θ += 2 * Math.PI
      φ = φ.times(-1)
    }

    // Prefer axes that point positive-ward.
    if (x + y + z < 0) {
      x = -x
      y = -y
      z = -z
      θ = -θ
    }

    return { axis: [x, y, z], angle: θ, phase: φ.phase() }
  }

  /**
   * Computes the cross product of two 3d column vectors.
   */
  cross3(other: Matrix): Matrix {
    Util.need(
      this.width === 1 && this.height === 3,
      "This isn't a 3d column vector.",
    )
    Util.need(
      other.width === 1 && other.height === 3,
      "Other's not a 3d column vector.",
    )
    return Matrix.generate(1, 3, (r) => {
      const [i, j] = [(r + 1) % 3, (r + 2) % 3]
      const a = this.cell(0, i).times(other.cell(0, j))
      const b = this.cell(0, j).times(other.cell(0, i))
      return a.minus(b)
    })
  }

  isUpperTriangular(epsilon = 0): boolean {
    for (let r = 0; r < this.height; r++) {
      for (let c = 0; c < r && c < this.width; c++) {
        const k = (r * this.width + c) * 2
        const v1 = this.buffer[k]
        const v2 = this.buffer[k + 1]
        if (isNaN(v1) || isNaN(v2) || v1 * v1 + v2 * v2 > epsilon * epsilon) {
          return false
        }
      }
    }
    return true
  }

  isLowerTriangular(epsilon = 0): boolean {
    for (let r = 0; r < this.height; r++) {
      for (let c = r + 1; c < this.width; c++) {
        const k = (r * this.width + c) * 2
        const v1 = this.buffer[k]
        const v2 = this.buffer[k + 1]
        if (isNaN(v1) || isNaN(v2) || v1 * v1 + v2 * v2 > epsilon * epsilon) {
          return false
        }
      }
    }
    return true
  }

  /**
   * Computes the magnitudes of the eigenvalues of the matrix, using the QR
   * algorithm.
   */
  eigenvalueMagnitudes(epsilon: number, maxIterations = 1000): Complex[] {
    if (this.width !== this.height) {
      throw new DetailedError("Expected a square matrix.", this)
    }
    let iteration = 0
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let m = this
    while (!m.isUpperTriangular(epsilon) && iteration < maxIterations) {
      const { Q, R } = m.qrDecomposition()
      if (R.isIdentity(epsilon)) {
        return Seq.repeat(1, this.width).toArray()
      }
      m = R.times(Q)
      iteration++
    }
    return Seq.range(this.width)
      .map((i) => m.cell(i, i).abs())
      .sortedBy((e) => -e)
      .toArray()
  }

  /**
   * Expands a qubit operation so that it applies to a larger register of
   * qubits, with optional controls.
   */
  // expandedForQubitInRegister(
  //   targetQubitOffset: number,
  //   registerSize: number,
  //   controls: Controls,
  // ): Matrix {
  //   const used = Math.round(Math.log2(this.width))
  //   const result = Matrix.identity(
  //     1 << (registerSize - targetQubitOffset - used),
  //   )
  //     .tensorProduct(this)
  //     .tensorProduct(Matrix.identity(1 << targetQubitOffset))
  //     ._clone()

  //   for (let c = 0; c < result.width; c++) {
  //     for (let r = 0; r < result.height; r++) {
  //       if (!controls.allowsState(c) || !controls.allowsState(r)) {
  //         const k = 2 * (c + r * result.width)
  //         result.buffer[k] = c === r ? 1 : 0
  //         result.buffer[k + 1] = 0
  //       }
  //     }
  //   }

  //   return result
  // }

  // applyToStateVectorAtQubitWithControls(
  //   stateVector: Matrix,
  //   qubitIndex: number,
  //   controls: Controls,
  // ): Matrix {
  //   const chunkSize = this.width * 2
  //   const chunkBuf = stateVector.buffer.slice(0, chunkSize)
  //   const strideLength = 2 << qubitIndex
  //   const strideChunkSize = (strideLength * chunkSize) >> 1
  //   const resultBuf = stateVector.buffer.slice()
  //   for (
  //     let strideChunkStart = 0;
  //     strideChunkStart < resultBuf.length;
  //     strideChunkStart += strideChunkSize
  //   ) {
  //     for (
  //       let strideOffset = 0;
  //       strideOffset < strideLength;
  //       strideOffset += 2
  //     ) {
  //       if (!controls.allowsState((strideChunkStart | strideOffset) >> 1)) {
  //         continue
  //       }

  //       // Collect inputs into a small contiguous vector.
  //       let k = strideChunkStart + strideOffset
  //       for (let i = 0; i < chunkBuf.length; i += 2) {
  //         chunkBuf[i] = stateVector.buffer[k]
  //         chunkBuf[i + 1] = stateVector.buffer[k + 1]
  //         k += strideLength
  //       }

  //       const transformedChunk = this.times(
  //         new Matrix(1, chunkBuf.length >> 1, chunkBuf),
  //       )

  //       // Scatter outputs.
  //       k = strideChunkStart + strideOffset
  //       for (let i = 0; i < chunkBuf.length; i += 2) {
  //         resultBuf[k] = transformedChunk.buffer[i]
  //         resultBuf[k + 1] = transformedChunk.buffer[i + 1]
  //         k += strideLength
  //       }
  //     }
  //   }
  //   return new Matrix(1, stateVector.height, resultBuf)
  // }
}