import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import * as $ from "jquery";

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

  submit(): void {
    this.helpForm.markAllAsTouched();
    if (!this.helpForm.valid) {
      return;
    }

    this.status = 'PROCESSING';

    const url = 'https://uyq1jkey4k.execute-api.us-west-2.amazonaws.com/stage';
    $.ajax({
      type: 'POST',
      url,
      contentType: 'application/json',
      // crossDomain: true, // remove in production environments
      dataType: 'json',
      // dataType: 'jsonp', // use JSONP for done() callback to work locally
      data: JSON.stringify({
        first_name: $('#first_name').val(),
        last_name: $('#last_name').val(),
        email: $('#email').val(),
        questions: $('#questions').val(),
        tool: $('input[name=tool]:checked').val()
      })
    }).done(result => {
      this.status = 'SENT';
    }).fail((jqXHR, textStatus, error) => {
      this.status = 'ERRORED';
    });
  }
}