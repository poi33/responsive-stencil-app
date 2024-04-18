import { Component, h, Prop, Element } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'res-tabs',
  styleUrl: 'tabs.scss',
  shadow: true,
})
/**
 * Handle conditional rendering of tabs.
 * Handles switching and passes the render state down to the res-tabs
 * Defaults to the first res-tab in the children
 */
export class Tabs {
  children: Array<Element>;

  @Element() host: HTMLElement;

  @Prop() active: string = "0";

  pressedHeading(nextActive: number) {
    this.host.setAttribute('active', nextActive.toString());
  }

  componentWillLoad() {
    this.children = Array.from(this.host.children) || Array();
  }

  render() {
    const activeIndex = parseInt(this.active);
    this.children.forEach((element, index) => {
      element.setAttribute('active', (index == activeIndex).toString());
    });

    return <section class="tabs">
      <header class="tabs__header">
        <nav class="tabs__nav" dir="ltr">
          {
            this.children.map((element, index) => {
              const name = element.getAttribute("name") || '';

              return <button
                role="tab"
                aria-selected={(index == activeIndex).toString()}
                class={classNames([
                    'tabs__link',
                    index == activeIndex && 'tabs__link--active'
                  ])}
                onClick={() => this.pressedHeading(index)}
              >
                <h1>{name}</h1>
              </button>
            })
          }
        </nav>
      </header>
      <section>
        <slot></slot>
      </section>
    </section>
  }
}
