import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly colSize = [33, 32.9, 33];

  constructor() { }
}
