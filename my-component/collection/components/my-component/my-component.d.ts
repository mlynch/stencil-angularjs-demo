import { EventEmitter } from '@stencil/core';
export declare class MyComponent {
    first: string;
    last: string;
    date: Date;
    onMyClick: EventEmitter;
    handleClick(e: Event): void;
    render(): JSX.Element;
}
