import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './help-desk.component.html',
  styleUrls: ['./help-desk.component.scss']
})
export class HelpDeskComponent {
  status: 'UNSUBMITTED' | 'PROCESSING' | 'SENT' | 'ERRORED' = 'UNSUBMITTED';

  helpForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    question: new FormControl('', [Validators.required]),
    tool: new FormControl('', [Validators.required])
  });

  tools: string[] = ['ComStock and ResStock', 'BETTER', 'Asset Score', 'Building Performance Database (BPD)'];

  captchaResolved = false;

  constructor(private http: HttpClient) {
  }

  resolved(captchaResponse: string): void {
    this.captchaResolved = true;
  }

  submit(): void {
    this.helpForm.markAllAsTouched();
    if (!this.helpForm.valid) {
      return;
    }

    this.status = 'PROCESSING';

    const url = 'https://uyq1jkey4k.execute-api.us-west-2.amazonaws.com/stage';
    this.http.post(url, {
      first_name: this.helpForm.get('firstName').value,
      last_name: this.helpForm.get('lastName').value,
      email: this.helpForm.get('email').value,
      questions: this.helpForm.get('question').value,
      tool: this.helpForm.get('tool').value
    }).toPromise()
      .then(() => this.status = 'SENT')
      .catch(() => this.status = 'ERRORED');
  }
}
