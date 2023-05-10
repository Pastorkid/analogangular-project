import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shared',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared.page.html',
  styleUrls: ['./shared.page.css'],
})
export default class SharedComponent {
  constructor() {}
  products: Array<{
    productName: string;
    productsize: number;
    productId: number;
  }> = [
    { productName: 'bigbag', productsize: 3, productId: 1 },
    { productName: 'smallbag', productsize: 4, productId: 2 },
    { productName: 'bigbag', productsize: 5, productId: 3 },
    { productName: 'bigbag', productsize: 6, productId: 4 },
  ];
}
