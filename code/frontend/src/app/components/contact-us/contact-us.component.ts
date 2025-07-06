import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../utils/utils.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactUsModule } from './contact-us.dependency';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ContactUsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  submitted: boolean = false;
  constructor(
    private utilService: UtilsService, private fb: FormBuilder
  ) {

  }
  ngOnInit(): void {
    this.buildContactForm();
  }

  buildContactForm() {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10,15}$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get formctrls() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    } else {
      this.contactForm.markAllAsTouched(); // triggers validation errors
    }
  }

}