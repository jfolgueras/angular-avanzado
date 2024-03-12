import { Component, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateService } from './create.service';
import { spinner } from './spinner';
import { GridComponent } from './calendar/grid/grid.component';
import { CounterComponent } from './signal/counter/counter.component';
import { TimerComponent } from './signal/timer/timer.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AcordeonComponent } from './acordeon/acordeon.component';
import { ModalComponent } from './modal/modal.component';

interface Response{
  id:number,
  name:string
}

export interface ISpinner{
  error(message:string):void,
  on():void,
  off():void
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GridComponent,
    CounterComponent,
    TimerComponent,
    LayoutComponent,
    AcordeonComponent,
    ModalComponent
  ],
  providers:[CreateService<Response>],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements ISpinner{
  title = 'my-app';
  message= ''
  modal = viewChild<ModalComponent>('modal');
  constructor(private service:CreateService<Response>){
    //this.create({id:1,name:'pedro'});
  }
  on(): void {
    console.log("on")
  }
  off(): void {
    console.log("off")
  }
  error(message: string) {
    this.message = message;
  };
  @spinner("el cliente no existe")
  async create(request:any){
    const response = await this.service.add(request)
  }
  handlerClick(ev:Event){
    this.modal()?.open()
  }
}
