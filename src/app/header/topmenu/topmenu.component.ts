import { Component } from '@angular/core';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrl: './topmenu.component.css'
})
export class TopmenuComponent {
menulist:string[]=['Help','Exchange and Return','Order Tracker','Log in/Signin'];
}
