import { Component, h } from '@stencil/core';

@Component({
    tag: 'res-card-layout',
    styleUrl: 'card-layout.scss',
    shadow: true,
})


export class CardLayout {

    render() {
        return <section class="card-layout">
            <slot></slot>
        </section>
    }
}
