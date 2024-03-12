import { Component, Input, ViewEncapsulation, effect, input } from '@angular/core';

@Component({
  selector: 'app-acordeon',
  standalone: true,
  imports: [],
  templateUrl: './acordeon.component.html',
  styleUrl: './acordeon.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AcordeonComponent {
  //https://developer.chrome.com/docs/css-ui/exclusive-accordion?hl=es-419
  //https://angular.dev/guide/signals/inputs
  title= input.required<string>();
  ///@Input() name!:number Nooooo

  constructor(){
    effect(() => {
      console.log(this.title());
    });
  }
}
