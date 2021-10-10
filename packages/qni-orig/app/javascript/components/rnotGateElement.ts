import {
  ConfigurableMixin,
  ControllableMixin,
  DisableableMixin,
  DraggableMixin,
  HelpableMixin,
  IconableMixin,
  IfableMixin,
  JsonableMixin,
  LabelableMixin,
  SizeableMixin,
  WireableMixin,
} from "./mixins"
import { RNOT_GATE_OPERATION_TYPE, RnotGateOperation } from "lib/operation"
import { TemplateResult, html, render } from "@github/jtml"
import { attr, controller } from "@github/catalyst"

@controller
export class RnotGateElement extends ConfigurableMixin(
  DraggableMixin(
    ControllableMixin(
      WireableMixin(
        LabelableMixin(
          IfableMixin(
            DisableableMixin(
              IconableMixin(
                HelpableMixin(SizeableMixin(JsonableMixin(HTMLElement))),
              ),
            ),
          ),
        ),
      ),
    ),
  ),
) {
  @attr iconType = "square"

  static create({
    draggable = false,
    ifVar = "",
  }: Partial<{ draggable: boolean; ifVar: string }> = {}): RnotGateElement {
    const el = document.createElement("rnot-gate") as RnotGateElement
    el.draggable = draggable
    el.if = ifVar
    return el
  }

  connectedCallback(): void {
    if (this.shadowRoot !== null) return
    this.attachShadow({ mode: "open" })
    this.update()
    this.initDraggable()
    this.addEventListener("mouseenter", this.showHelp)
    this.addEventListener("mousedown", this.showRightClickPopup)
  }

  update(): void {
    render(
      html`${this.sizeableStyle} ${this.wiresStyle} ${this.iconStyle}
        ${this.labelStyle} ${this.draggableStyle} ${this.disabledStyle}

        <div id="body">${this.wiresSvg} ${this.iconSvg}</div>`,
      this.shadowRoot!,
    )
  }

  toJson(): string {
    if (this.if !== "") {
      return `"${RNOT_GATE_OPERATION_TYPE}<${this.if}"`
    } else {
      return `"${RNOT_GATE_OPERATION_TYPE}"`
    }
  }

  serialize(): RnotGateOperation {
    return {
      type: RNOT_GATE_OPERATION_TYPE,
      controls: this.controls,
      if: this.if !== "" ? this.if : null,
    }
  }

  get iconSvg(): TemplateResult {
    return html`<svg
      id="icon"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M10 24L13 24L14 36L17 36L18 12L38 12" />
      <path d="M24 32L34 18M34 32L24 18" />
    </svg>`
  }
}