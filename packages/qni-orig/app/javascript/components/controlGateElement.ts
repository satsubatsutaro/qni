import {
  CONTROL_GATE_OPERATION_TYPE,
  ControlGateOperation,
} from "lib/operation"
import {
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  IconableMixin,
  JsonableMixin,
  SizeableMixin,
  TargetableMixin,
  WireableMixin,
} from "./mixins"
import { TemplateResult, html, render } from "@github/jtml"
import { attr, controller } from "@github/catalyst"

@controller
export class ControlGateElement extends DraggableMixin(
  TargetableMixin(
    WireableMixin(
      DisableableMixin(
        IconableMixin(HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement)))),
      ),
    ),
  ),
) {
  @attr iconType = "transparent"

  static create({
    draggable = false,
  }: Partial<{ draggable: boolean }> = {}): ControlGateElement {
    const el = document.createElement("control-gate") as ControlGateElement
    el.draggable = draggable
    return el
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({ mode: "open" })
    this.update()
    this.initDraggable()
  }

  update(): void {
    render(
      html`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.draggableStyle}

        <div id="body" data-action="mouseenter:control-gate#showHelp">
          ${this.wiresSvg} ${this.iconSvg}
        </div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    return `"${CONTROL_GATE_OPERATION_TYPE}"`
  }

  serialize(): ControlGateOperation {
    return { type: CONTROL_GATE_OPERATION_TYPE, targets: this.targets }
  }

  get iconSvg(): TemplateResult {
    return html`
      <svg
        id="icon"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
      >
        <circle cx="24" cy="24" r="8" fill="currentColor" />
      </svg>
    `
  }
}