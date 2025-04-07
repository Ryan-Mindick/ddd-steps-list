/**
 * Copyright 2025 Ryan-Mindick
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./ddd-steps-list-items.js"

/**
 * `ddd-steps-list`
 * 
 * @demo index.html
 * @element ddd-steps-list
 */
export class DddStepsList extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-steps-list";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      dddPrimary: { type: Boolean, attribute: 'ddd-primary', reflect: true}
    };
  }

  constructor() {
    super();
    this.dddPrimary = false;
  }
  
  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`<slot @slotchange="${this._onSlotChange}"></slot>
    `;
  }

  firstUpdated() {
    this._validateChildren();
  }

  _onSlotChange() {
    this._validateChildren();
  }

  _validateChildren() {
  let stepCount = 0;
    for (const child of this.children) {
      const tag = child.tagName.toLowerCase();
      if (tag !== 'ddd-steps-list-item') {
        this.removeChild(child);
      } else {
        stepCount++;
        child.step = stepCount;
        if (this.dddPrimary) {
          child.setAttribute('data-primary', '');
        } else {
          child.removeAttribute('data-primary');
        }
      }
    }
  }

  updated(changedProps) {
    if (changedProps.has('dddPrimary')) {
      const items = this.querySelectorAll('ddd-steps-list-item');
      for (const item of items) {
        if (this.dddPrimary) {
          item.setAttribute('data-primary', '');
        } else {
          item.removeAttribute('data-primary');
        }
      }
    }
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DddStepsList.tag, DddStepsList);