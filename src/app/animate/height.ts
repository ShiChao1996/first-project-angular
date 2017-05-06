import { trigger, state, style, transition, animate,keyframes } from '@angular/core';

export const height1 = trigger('height1', [
  state('inactive', style({
    height:0,
  })),
  state('active',   style({
    height:200,
  })),
  transition('inactive => active', animate('300ms ease-in')),
  transition('active => inactive', animate('300ms ease-out'))
]);


export const height2 = trigger('height2', [
  state('inactive', style({
    height:0,
  })),
  state('active',   style({
    height:160,
  })),
  transition('inactive => active', animate('300ms ease-in')),
  transition('active => inactive', animate('300ms ease-out'))
]);

export const height3 = trigger('height3', [
  state('inactive', style({
    height:0,
  })),
  state('active',   style({
    height:200,
  })),
  transition('inactive => active', animate('300ms ease-in')),
  transition('active => inactive', animate('300ms ease-out'))
]);
