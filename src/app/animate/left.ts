import { trigger, state, style, transition, animate,keyframes } from '@angular/core';

export const left = trigger('left', [
  state('inactive', style({
    backgroundColor: '#eee',
    left:-200,
    opacity:0.9
  })),
  state('active',   style({
    backgroundColor: '#cfd8dc',
    left:0,
    opacity:1
  })),
  transition('inactive => active', animate('200ms ease-in-out')),
  transition('active => inactive', animate('200ms ease-in-out'))
]);
