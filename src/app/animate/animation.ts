import { Injectable } from '@angular/core';

@Injectable()

export class AnimationService{
  public startMove(obj,json,fnEnd?){
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
      let finished = true;
      for(let attr in json){
        let cur = 0;
        let style = obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];


        if(attr=='opacity'){
          cur = Math.round(100*parseFloat(style));
        }
        else{
          cur = parseInt(style);
        }

        let speed = (json[attr]-cur)/6;
        speed = speed>0?Math.ceil(speed):Math.floor(speed);

        if(cur!=json[attr]){
          finished = false;
        }
        if(attr=='opacity'){
          obj.style.opacity = (cur+speed)/100;
          obj.style.filter = 'alpha(opacity:'+(cur+speed)+')';
        }
        else{
          obj.style[attr] = cur+speed+'px';
        }
      }
      if(finished){
        clearInterval(obj.timer);
        if(fnEnd)fnEnd();
      }
    },30);
  }
}
