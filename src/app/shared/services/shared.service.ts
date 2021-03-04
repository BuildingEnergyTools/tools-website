import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly colSize = [25, 25, 25, 25];

  constructor() { }
}
