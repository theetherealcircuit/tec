import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, NgControl, ReactiveFormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
  event: string;
  date: string;
  status: string;
  contactedBy: string;
  feedback: string;
}

@Component({
  selector: 'app-admin-users',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './admin-users.component.html',
  styleUrl: './admin-users.component.scss'
})
export class AdminUsersComponent implements OnInit {

  usersForm!: FormGroup;
  statusOptions = ["Pending", "Contacted", "Booked"];
  scriptURL: any = "https://script.google.com/macros/s/AKfycbwycvpAb8iILM94sbmYe_YLXBxGqH4iAxoYz_s_LkpFmnI3Gaie-XE0yJs0KQ2xgmjA/exec";

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.fetchUsersFromSheet();
  }
  activeTab: string = 'Pending';

  setTab(tab: string) {
    this.activeTab = tab;
  }

  getFilteredUsers(): FormGroup[] {
    return this.usersArray.controls
      .filter(control =>
        (control.value.originalStatus || control.value.status) === this.activeTab
      )
      .map(control => control as FormGroup);
  }


  updateUser(user: FormGroup) {
    const payload = user.value;

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = this.scriptURL;
    form.target = 'hidden_iframe';

    Object.keys(payload).forEach(key => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = payload[key];
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    user.patchValue({ originalStatus: payload.status });
  }


  fetchUsersFromSheet() {
    this.http.get<any[]>(this.scriptURL)
      .subscribe(data => {

        const formattedData = data.map(user => ({
          id: user.ID,
          name: user.Name,
          phone: user.Phone,
          email: user.Email,
          event: user.Event,
          date: user.Date,
          status: user.Status,
          contactedBy: user.ContactedBy || '',
          feedback: user.Feedback || '',
          originalStatus: user.Status
        }));

        this.initForm(formattedData);
      });
  }


  initForm(users: User[]) {
    this.usersForm = this.fb.group({
      users: this.fb.array(users.map(user => this.createUserGroup(user)))
    });
  }

  createUserGroup(user: User) {
    return this.fb.group({
      id: [user.id],
      name: [user.name],
      phone: [user.phone],
      email: [user.email],
      event: [user.event],
      date: [user.date],
      status: [user.status],
      originalStatus: [user.status],
      feedback: [user.feedback],
      contactedBy: [user.contactedBy || '']
    });
  }

  get usersArray(): FormArray {
    return this.usersForm?.get('users') as FormArray;
  }


  saveData() {
    localStorage.setItem('mhfUsers', JSON.stringify(this.usersForm.value.users));
  }
}