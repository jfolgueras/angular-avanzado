import { Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  //https://github.com/argyleink/gui-challenges/tree/main/dialog
  dialog = viewChild<ElementRef>('dialog');
  constructor(){

  }
  open(){
    const dialog:HTMLDialogElement =  this.dialog()?.nativeElement
    dialog.showModal();
  }
}
