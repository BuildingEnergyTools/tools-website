import { Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  templateUrl: './help-desk.component.html',
  styleUrls: ['./help-desk.component.scss']
})
export class HelpDeskComponent {
	
  firstNameFormControl = new FormControl('', [Validators.required]);
  lastNameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  selectedTool: string;
  tools: string[] = ['ComStock and ResStock', 'BETTER', 'Asset Score', 'Building Performance Database (BPD)'];

  questionFormControl = new FormControl('', [Validators.required]);
}