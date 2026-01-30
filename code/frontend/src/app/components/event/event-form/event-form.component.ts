import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UtilsService } from '../../../utils/utils.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-form',
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.scss'
})
export class EventFormComponent implements OnInit {
  eventForm!: FormGroup;
  submitted: boolean = false;
  alertMessage: string = '';
  adminWhatsApp = "7378160496";  // <-- Replace with your WhatsApp number
  scriptURl: any = "https://script.google.com/macros/s/AKfycbwycvpAb8iILM94sbmYe_YLXBxGqH4iAxoYz_s_LkpFmnI3Gaie-XE0yJs0KQ2xgmjA/exec";
  constructor(
    private utilService: UtilsService, private fb: FormBuilder, private http: HttpClient
  ) {

  }

  ngOnInit(): void {
    this.buildContactForm();
    this.utilService.scrollToTop();
  }

  buildContactForm() {
    this.eventForm = this.fb.group({
      fullName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^[a-zA-Z\s]+$/)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[6-9]\d{9}$/) // Indian mobile format
        ]
      ],
      event: ['', Validators.required]
    });
  }


  get formctrls() {
    return this.eventForm.controls;
  }

  eventsList = [
    "Mewar Heritage Festival (Menar,2026)",
  ];





  register() {
    if (this.eventForm.invalid) {
      this.eventForm.markAllAsTouched();
      return;
    }


    const form = this.eventForm.value;
    const date = new Date().toLocaleString();

    const sheetData: { [key: string]: string } = {
      name: form.fullName,
      phone: form.phone,
      email: form.email,
      event: form.event,
      date: date,
      status: 'Pending',
      contactedBy: '',
      feedback: '',
    };

    const formEl = document.createElement('form');
    formEl.method = 'POST';
    formEl.action = this.scriptURl;
    formEl.target = 'hidden_iframe';

    Object.keys(sheetData).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = sheetData[key];
      formEl.appendChild(input);
    });

    document.body.appendChild(formEl);
    formEl.submit();
    document.body.removeChild(formEl);

    this.alertMessage = "Registration successful! We will contact you soon.";

    // Optional auto-hide
    // setTimeout(() => {
    //   this.alertMessage = '';
    // }, 4000);

    this.eventForm.reset();
    /* -----------------------------
   1. SEND WHATSAPP TO ADMIN
------------------------------*/
    const adminMsg =
      `New Registration:%0A%0A` +
      `Name: ${form.fullName}%0A` +
      `Phone: ${form.phone}%0A` +
      `Email: ${form.email}%0A` +
      `Event: ${form.event}%0A` +
      `Date: ${date}`;

    window.open(`https://wa.me/${this.adminWhatsApp}?text=${adminMsg}`, "_blank");
  }
}
