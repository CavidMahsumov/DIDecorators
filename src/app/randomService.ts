import { Injectable } from "@angular/core";

@Injectable({providedIn:"root"})
export class RandomService{
  public _random=0;
  constructor(){
    console.log("Random Number is Creating");
    this._random=Math.floor(Math.random()*1000)
  }

  getRandomNumber(){
    return this._random;
  }

}
