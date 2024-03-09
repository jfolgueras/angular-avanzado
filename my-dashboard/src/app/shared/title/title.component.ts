import { Component, Input, input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `
    <h1>{{titulo}}</h1>
  `,
  styles: ``
})

export class TitleComponent {

  @Input()
  public titulo:string='';

}
