import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class MenuComponent {

}
