import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

 type framework = {
  name:string
  date:string
}

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-detection.component.html',
  styles: ``
})
export default class ChangeDetectionComponent {

  myframework:framework = {
    name : 'Angular',
    date : 'ene-2024'
  }

  public frameworksAsSignal = signal(this.myframework);

  constructor(){
    setTimeout(() => {

      this.frameworksAsSignal.update(value => ({
        ...value,name:'React'
      }))

     }, 3000);
  }

}
