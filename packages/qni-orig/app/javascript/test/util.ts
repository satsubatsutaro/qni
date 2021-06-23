import { Complex } from "lib/math/complex"
import { describe, equate } from "lib/base"

export function isEqualTo(subject: unknown, other: unknown): boolean {
  return equate(subject, other)
}

export function isApproximatelyEqualTo(
  subject: unknown,
  other: unknown,
  epsilon = 0.000001,
): boolean {
  return isApproximatelyEqualToHelper(subject, other, epsilon)
}

export function isNotApproximatelyEqualTo(
  subject: unknown,
  other: unknown,
  epsilon = 0.000001,
): boolean {
  return !isApproximatelyEqualToHelper(subject, other, epsilon)
}

export function isApproximatelyEqualToHelper(
  subject: unknown,
  other: unknown,
  epsilon: number,
): boolean {
  if (subject === null) {
    return other === null
  } else if (subject === undefined) {
    return other === undefined
  } else if (hasIsApproximatelyEqualTo(subject)) {
    return subject.isApproximatelyEqualTo(other, epsilon)
  } else if (typeof subject === "number") {
    return (
      subject === other ||
      (typeof other === "number" && isNaN(subject) && isNaN(other)) ||
      (typeof other === "number" && Math.abs(subject - other) < epsilon)
    )
  } else if (isArrayIsh(subject)) {
    if (
      !isArrayIsh(other) ||
      (isArrayIsh(other) && other.length !== subject.length)
    ) {
      return false
    }
    for (let i = 0; i < subject.length; i++) {
      if (!isApproximatelyEqualToHelper(subject[i], other[i], epsilon)) {
        return false
      }
    }
    return true
  } else if (
    subject instanceof Object &&
    subject.toString() === "[object Object]"
  ) {
    return isApproximatelyEqualToHelperDestructured(subject, other, epsilon)
  } else if (subject === other) {
    return true
  }

  fail(
    "Expected " +
      describe(subject) +
      " to have an isApproximatelyEqualTo method",
  )
}

function hasIsApproximatelyEqualTo(object: unknown): object is Complex {
  return (
    (object as Complex).isApproximatelyEqualTo !== undefined &&
    typeof (object as Complex).isApproximatelyEqualTo === "function"
  )
}

function isApproximatelyEqualToHelperDestructured(
  subject: unknown,
  other: unknown,
  epsilon: number,
): boolean {
  const keys = []
  for (const subjectKey in subject as Record<string, unknown>) {
    if (hasOwnProperty(subject as Record<string, unknown>, subjectKey)) {
      keys.push(subjectKey)
    }
  }
  for (const otherKey in other as Record<string, unknown>) {
    if (
      hasOwnProperty(other as Record<string, unknown>, otherKey) &&
      !hasOwnProperty(subject as Record<string, unknown>, otherKey)
    ) {
      return false
    }
  }

  return keys.every(
    (key) =>
      hasOwnProperty(other as Record<string, unknown>, key) &&
      isApproximatelyEqualToHelper(
        (subject as Record<string, unknown>)[key],
        (other as Record<string, unknown>)[key],
        epsilon,
      ),
  )
}

export function hasOwnProperty<K extends PropertyKey>(
  obj: unknown,
  key: K,
): obj is Record<K, unknown> {
  return obj && key in obj
}

// export function hasOwnProperty<T>(obj: T, prop: PropertyKey): prop is keyof T {
//   return obj && Object.prototype.hasOwnProperty.call(obj, prop)
// }

export type ArrayIsh =
  | Array<unknown>
  | Float32Array
  | Float64Array
  | Int8Array
  | Int16Array
  | Int32Array
  | Uint8Array
  | Uint16Array
  | Uint32Array

export function isArrayIsh(value: unknown): value is ArrayIsh {
  return (
    Array.isArray(value) ||
    value instanceof Float32Array ||
    value instanceof Float64Array ||
    value instanceof Int8Array ||
    value instanceof Int16Array ||
    value instanceof Int32Array ||
    value instanceof Uint8Array ||
    value instanceof Uint16Array ||
    value instanceof Uint32Array
  )
}

function fail(message: string): never {
  throw new Error(message)
}