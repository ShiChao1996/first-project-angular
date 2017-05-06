import { trigger, state, style, transition, animate,keyframes } from '@angular/core';

export const fadeIn = trigger('fadeIn', [
  state('in', style({transform: 'translateX(0)'})),
  transition('void => *', [
    animate(800, keyframes([
      style({opacity: 0}),
      style({opacity: 0.2}),
      style({opacity: 0.4}),
      style({opacity: 0.6}),
      style({opacity: 0.8}),
      style({opacity: 1})
    ]))
  ]),
  transition('* => void', [
    animate(800, keyframes([
      style({opacity: 1}),
      style({opacity: 0.8}),
      style({opacity: 0.6}),
      style({opacity: 0.4}),
      style({opacity: 0.2}),
      style({opacity: 0})
    ]))
  ])
]);
