import { injectActivatedRoute } from '@analogjs/router';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-sharedproductId-details',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './[productId].page.html',
  styleUrls: ['./[productId].page.scss'],
})
export default class SharedProductIdComponent {
  private readonly route = injectActivatedRoute();
  readonly productId$ = this.route.paramMap.pipe(
    map((params) => params.get('productId'))
  );
}
