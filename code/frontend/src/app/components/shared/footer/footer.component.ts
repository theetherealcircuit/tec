import { Component, inject } from '@angular/core';
import { EXTERNAL_LINKS } from '../../../services/external-links.service';
import { UtilsService } from '../../../utils/utils.service';
import { RouterModule } from '@angular/router';
import { FeatherModule } from 'angular-feather';
import { SharedDependencies } from '../shared.dependency';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SharedDependencies],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  externalLinks = EXTERNAL_LINKS;

  private utilService: UtilsService = inject(UtilsService);

  openLink(linkType: string) {
    this.utilService.trackButtonClick();
    this.utilService.openLink(linkType);
  }
}
