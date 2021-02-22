import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly colSize = [23, 33, 26, 18];

  constructor() { }
}
