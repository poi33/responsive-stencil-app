import { Component, h, Prop } from '@stencil/core';
import classNames from 'classnames';

@Component({
    tag: 'res-card',
    styleUrl: 'card.scss',
})

/**
 * A wrapper for cards to be rendered in a grid
 */
export class CardLayout {

    @Prop() imageurl: string;

    @Prop() imagealt: string; //required with imageUrl

    @Prop() imagepos: 'top' | 'center' | 'bottom' = 'center';

    @Prop() description: string;

    @Prop() headline: string; //required

    render() {
        return <article class="card">
            {this.imageurl &&
                <img class={classNames([
                    'card__teaser',
                    getPositionClass(this.imagepos)
                ])}
                src={this.imageurl}
                alt={this.imagealt} />
            }
            <div class="card__text">
                <h1 class="card__headline">{this.headline}</h1>
                {this.description &&
                    <p class="card__description">{this.description}</p>
                }
            </div>
        </article>
    }
}

function getPositionClass(imagepos: string) {
    switch(imagepos) {
        case 'top':
            return 'card__teaser--top';
        case 'bottom':
            return 'card__teaser--bottom';
        default:
            return 'card__teaser--center';
    }
}
