import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'res-tab',
    styleUrl: 'tab.scss',
    shadow: true,
})

/**
 * Handle if the individual tab should be rendered or not.
 * Possible to toggle with active prop
 */
export class Tab {

    @Prop() active: boolean;

    // used by the tabs component
    @Prop() name: string; // required

    render() {
        return (this.active &&
            <div class="tab">
                <slot></slot>
            </div>
        )
    }
}
