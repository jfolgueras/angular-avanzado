import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count=signal(0,{equal: ()=>false});
  handlerClick(ev:Event){
    ev.stopPropagation();

    //this.count.set(this.count()+1)
    //$$invalidate(0, count += 1); this.count +=1
    this.count.update(value=>value+1)
  }
}

