import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './help-desk.component.html',
  styleUrls: ['./help-desk.component.scss']
})
export class HelpDeskComponent {
  status: 'UNSUBMITTED' | 'PROCESSING' | 'SENT' | 'ERRORED' = 'UNSUBMITTED';

  helpForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    question: new FormControl('', Validators.required),
    tool: new FormControl('', Validators.required),
    recaptcha: new FormControl(null, Validators.required)
  });

  tools: string[] = [
    'Asset Score',
    'Audit Template',
    'BEDES',
    'BETTER',
    'Building Performance Database (BPD)',
    'BuildingSync',
    'ComStock',
    'General',
    'Multiple Tools',
    'ResStock',
    'SEED',
    'UBID',
  ];

  constructor(private http: HttpClient) {
  }

  submit(): void {
    this.helpForm.markAllAsTouched();
    if (!this.helpForm.valid) {
      return;
    }

    this.status = 'PROCESSING';

    this.http.post(environment.help_desk_uri, {
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
