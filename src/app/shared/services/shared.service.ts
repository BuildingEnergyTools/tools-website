import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly colSize = [32.9, 32.9, 32.8];

  constructor() { }
}
