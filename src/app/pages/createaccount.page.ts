import { Component } from '@angular/core';
import { AuthformloginComponent } from '../component/authformlogin.component';

@Component({
  standalone: true,
  imports: [AuthformloginComponent],
  template: `<app-authformlogin />`,
})
export default class CreateAccountComponent {}
