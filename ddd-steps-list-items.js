/**
 * Copyright 2025 Ryan-Mindick
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";


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
    this.dddPrimary = false;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      dddPrimary: { type: Boolean, attribute: 'ddd-primary', reflect: true}
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
      
      :host(:last-child) {
        margin-bottom: 0;
      }

      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }

      .circle {
        width: 50px;
        height: 50px;
        border-radius: 50%; 
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        margin: 0 auto 40px;
   background-color: red;
      }

      .content {
        flex: 1;
      }

      h3 {
        display: inline-block;
      }

      :host([data-primary]) .circle {
        background-color: var(--ddd-theme-default-navy60);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <div class="circle">${this.step}</div>
        <div class="content"><slot></slot></div>
    </div>`;
  }
}

globalThis.customElements.define(DddStepsListItems.tag, DddStepsListItems);