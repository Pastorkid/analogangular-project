import { Component } from '@angular/core';
import { AuthformComponent } from '../component/authform.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AuthformComponent],
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.css'],
})
export default class HomeComponent {}
