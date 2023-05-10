import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export default class ProductService {
  constructor(private http: HttpClient) {}
}
