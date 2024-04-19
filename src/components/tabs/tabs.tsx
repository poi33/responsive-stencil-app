import { Component, h, Prop, Element, Fragment } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'res-tabs',
  styleUrl: 'tabs.scss',
  shadow: true,

})
/**
 * Handle state of all tabs.
 * Handles switching and passes the render state down to the res-tabs
 * Defaults to the first res-tab in the children
 */
export class Tabs {
  @Element() host: HTMLElement;

  @Prop() active: string = "0";

  @Prop() align: string = "horizontal";

  pressedHeading(nextActive: number) {
    this.host.setAttribute('active', nextActive.toString());
  }

  render() {
    const activeIndex = parseInt(this.active);
    const childElements = Array.from(this.host.children);
    childElements.forEach((element, index) => {
      element.setAttribute('active', (index == activeIndex).toString());
    });
    return <div class={classNames([
        "tabs",
        this.align == 'vertical' && 'tabs--vertical'
      ])}>
      <header class="tabs__header">
        <nav class={
          classNames([
            "tabs__nav",
            this.align == 'vertical' && 'tabs__nav--vertical'
          ])}
            dir="ltr">
          {
            childElements.map((element, index) => {
              const name = element.getAttribute("name") || '';

              return <button
                id={`tab-btn-${index}`}
                role="tab"
                aria-selected={(index == activeIndex).toString()}
                aria-controls="tab-frame"
                class={classNames([
                    'tabs__link',
                    index == activeIndex && 'tabs__link--active',
                    this.align == 'vertical' && 'tabs__link--vertical'
                  ])}
                onClick={() => this.pressedHeading(index)}
              >
                <h1>{name}</h1>
              </button>
            })
          }
        </nav>
      </header>
      <div id="tab-frame" role="tabpanel" aria-labelledby={`tab-btn-${activeIndex}`}>
        <slot></slot>
      </div>
    </div>
  }
}
