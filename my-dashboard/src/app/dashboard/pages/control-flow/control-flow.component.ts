import { Component, Signal, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

type Grade = 'A'|'B'|'C'

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})


export default class ControlFlowComponent {

  public grade = signal<boolean>(true);

  toogle():void{

    this.grade.update(value => !value);
  }


}

