import { Component } from '@angular/core';
import { EXTERNAL_LINKS } from '../../../services/external-links.service';

@Component({
  selector: 'app-powered',
  standalone: true,
  imports: [],
  templateUrl: './powered.component.html',
  styleUrl: './powered.component.scss'
})
export class PoweredComponent {
  externalLinks = EXTERNAL_LINKS;
}
