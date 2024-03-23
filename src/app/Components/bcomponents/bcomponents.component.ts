import { Component, Inject } from '@angular/core';
import { RandomServiceIT } from '../../injection-token';
import { RandomService } from '../../randomService';

@Component({
  selector: 'app-bcomponents',
  templateUrl: './bcomponents.component.html',
  styleUrl: './bcomponents.component.scss',
  providers:[RandomService]
})
export class BComponentsComponent {
  value=0;
  constructor(private randomService:RandomService){
    this.value= randomService.getRandomNumber();
  }
}
