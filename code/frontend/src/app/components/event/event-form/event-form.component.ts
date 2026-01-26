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
  adminWhatsApp = "7378160496";  // <-- Replace with your WhatsApp number
  googleScriptURL = "https://script.google.com/macros/s/AKfycbyR3wCQExbLMUbt2WaaZdCjmgbR8BmDx2zkXOF8Rp9-gd69Arqm_UcDREIFRB6CbFzB/exec";
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
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10,15}$/)]],
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

    const sheetData = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      event: form.event,
      date: date,
      status: 'Pending'
    };

    this.http.post(this.googleScriptURL, sheetData).subscribe({
      next: () => console.log("Saved to Google Sheet"),
      error: (err) => console.log("Error in registering", err)
    });
    /* -----------------------------
       1. SEND WHATSAPP TO ADMIN
    ------------------------------*/
    const adminMsg =
      `New Registration:%0A%0A` +
      `Name: ${form.name}%0A` +
      `Phone: ${form.phone}%0A` +
      `Email: ${form.email}%0A` +
      `Event: ${form.event}%0A` +
      `Date: ${date}`;

    window.open(`https://wa.me/${this.adminWhatsApp}?text=${adminMsg}`, "_blank");
  }
}
