import { Component, Inject, Self } from '@angular/core';
import { RandomService } from './randomService';
import { RandomServiceIT } from './injection-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[RandomService]
})
export class AppComponent {
  title = 'DIDecorators';
  value=0;
  constructor( @Self() private randomService:RandomService){
    this.value=randomService.getRandomNumber();
  }
}
