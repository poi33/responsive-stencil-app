import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'res-card',
    styleUrl: 'card.scss',
})


export class CardLayout {

    @Prop() imageUrl: string;

    @Prop() description: string;

    @Prop() headline: string; //required

    render() {
        return <article class="card-layout">
            { this.imageUrl && <img src={this.imageUrl} /> }
            <h1>{this.headline}</h1>
            { this.description && <p>{this.description}</p> }
        </article>
    }
}
