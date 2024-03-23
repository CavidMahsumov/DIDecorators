import { Component, Inject } from '@angular/core';
import { RandomServiceIT } from '../../injection-token';
import { RandomService } from '../../randomService';

@Component({
  selector: 'app-acomponent',
  templateUrl: './acomponent.component.html',
  styleUrl: './acomponent.component.scss',
  providers : [RandomService]
})
export class AComponentComponent {
  value=0;
  constructor(private randomService:RandomService){
    this.value=randomService.getRandomNumber();
  }
}
