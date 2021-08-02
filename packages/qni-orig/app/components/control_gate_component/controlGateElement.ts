import { controller, attr, target } from "@github/catalyst"
import { html, render } from "@github/jtml"

const verticalWires = html`<svg
  id="wires"
  width="100"
  height="100"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
>
  <line
    id="wire-top"
    x1="50"
    y1="0"
    x2="50"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
  <line
    id="wire-bottom"
    x1="50"
    y1="100"
    x2="50"
    y2="50"
    stroke-width="2"
    stroke="currentColor"
    vector-effect="non-scaling-stroke"
  ></line>
</svg>`

const controlDotIcon = html`
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

@controller
export class ControlGateElement extends HTMLElement {
  @target body: HTMLElement

  @attr wireTop = false
  @attr wireBottom = false

  connectedCallback(): void {
    this.attachShadow({ mode: "open" })
    this.update()
  }

  update(): void {
    render(
      html`<style>
          #body {
            align-items: center;
            display: flex;
            justify-content: center;
            position: relative;
            height: 2rem;
            width: 2rem;
          }

          #wires {
            position: absolute;
            bottom: -2px;
            left: -2px;
            right: -2px;
            top: -2px;
            height: calc(100% + 4px);
            width: calc(100% + 4px);
            overflow: visible;
          }

          #wire-top,
          #wire-bottom {
            color: var(--colors-gate, #43c000);
            stroke-width: 4;
            display: none;
          }

          #body.wire-top #wire-top {
            display: block;
            transform-origin: top;
            transform: translateY(-25%) scaleY(1.5);
          }

          #body.wire-bottom #wire-bottom {
            display: block;
            transform-origin: bottom;
            transform: translateY(25%) scaleY(1.5);
          }

          #icon {
            position: absolute;
            bottom: -2px;
            left: -2px;
            right: -2px;
            top: -2px;
            height: calc(100% + 4px);
            width: calc(100% + 4px);
            color: var(--colors-gate, #43c000);
            stroke: currentColor;
          }
        </style>

        <div
          id="body"
          class="${this.wireTopClassString} ${this.wireBottomClassString}"
          data-target="control-gate.body"
        >
          ${verticalWires} ${controlDotIcon}
        </div>`,
      this.shadowRoot!,
    )
  }

  private get wireTopClassString(): string {
    return this.wireTop ? "wire-top" : ""
  }

  private get wireBottomClassString(): string {
    return this.wireBottom ? "wire-bottom" : ""
  }
}