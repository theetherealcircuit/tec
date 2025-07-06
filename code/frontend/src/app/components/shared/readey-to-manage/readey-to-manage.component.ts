import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EXTERNAL_LINKS } from '../../../services/external-links.service';
import { ReadyToManageModule } from './readey-to-manage.dependency';
import { UtilsService } from '../../../utils/utils.service';

@Component({
  selector: 'app-readey-to-manage',
  standalone: true,
  imports: [ReadyToManageModule],
  templateUrl: './readey-to-manage.component.html',
  styleUrl: './readey-to-manage.component.scss'
})
export class ReadeyToManageComponent {
  emailForm: FormGroup;
  externalLinks = EXTERNAL_LINKS;
  constructor(private utilsService: UtilsService) {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {}
  

  get email() {
    return this.emailForm.get('email');
  }

  openLink(linkType: string) {
    this.utilsService.trackButtonClick();
    this.utilsService.openLink(linkType, this.emailForm.value.email);
  }

}
