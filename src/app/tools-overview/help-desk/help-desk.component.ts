import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  templateUrl: './help-desk.component.html',
  styleUrls: ['./help-desk.component.scss']
})
export class HelpDeskComponent {
  status = "UNSUBMITTED";

  helpForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    question: new FormControl('', [Validators.required]),
    tool: new FormControl('', [Validators.required]),
  });

  tools: string[] = ['ComStock and ResStock', 'BETTER', 'Asset Score', 'Building Performance Database (BPD)'];


  captchaResolved = false;
  resolved(captchaResponse: string): void {
    this.captchaResolved = true
  }

  submit = function () {
    this.helpForm.markAllAsTouched();
    if (!this.helpForm.valid) {
      return
    }

    this.status = "PROCESSING";

    setTimeout(() => {
      this.status = "SUBMITTED";
    }, 2000);
  }
}
