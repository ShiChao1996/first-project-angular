import { trigger, state, style, transition, animate,keyframes } from '@angular/core';


export const width = trigger('width', [
  state('inactive', style({
    height: 0,
    width: 0,
    opacity: 0
  })),
  state('active',   style({
    width:window.screen.width,
    opacity:0.5
  })),
  transition('inactive => active', animate('200ms ease-in-out')),
  transition('active => inactive', animate('200ms ease-in-out'))
]);
