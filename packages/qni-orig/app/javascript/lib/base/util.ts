export class Util {
  /**
   * Checks a precondition, throwing an exception containing the given message
   * in the case of failure.
   */
  static need(
    expression: boolean | unknown,
    message: string,
    args?: unknown[],
  ): void {
    if (expression !== true) {
      const argDesc =
        args === undefined
          ? "(not provided)"
          : `[${Array.prototype.slice.call(args).join(", ")}]`
      const msgDesc = message === undefined ? "(not provided)" : message
      const msg =
        "Precondition failed" +
        "\n\nMessage: " +
        msgDesc +
        "\n\nArgs: " +
        argDesc
      throw new Error(msg)
    }
  }

  static notNull<T>(v: T): asserts v is NonNullable<T> {
    Util.need(v !== null, "notNull")
  }
}