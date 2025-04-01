/**
 * Copyright 2025 Ryan-Mindick
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `ddd-steps-list`
 * 
 * @demo index.html
 * @element ddd-steps-list-items
 */
export class DddStepsListItems extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-steps-list-items";
  }

  constructor() {
    super();
    this.step = 0;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      step: { type: Number, reflect: true }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--ddd-steps-list-items-label-font-size, var(--ddd-font-size-s));
      }
      circle {
        width: 250px;
        height: 250px;
        line-height: 200px;
        border-radius: 50%; 
        display: flex;
        text-align: center;
        color: white;
        font-size: 16px;
        margin: 0 auto 40px;
      }
      .circle-color {
        background-color: var(--ddd--theme-default-navy60);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
  <div class="wrapper">
    <div class="circle">${this.step}  </div>
    <h3><span>${this.t.title}:</span> ${this.title}</h3>
    <slot></slot>
  </div>`;
  }
}

globalThis.customElements.define(DddStepsListItems.tag, DddStepsList);