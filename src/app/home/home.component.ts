import { Component } from '@angular/core';
import { SharedService } from '@shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public sharedService: SharedService) {
  }
}
