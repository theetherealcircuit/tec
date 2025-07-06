import { Component, NgZone } from '@angular/core';
import { NavigationEnd, Router, RouterConfigurationFeature } from '@angular/router';
import { UtilsService } from './utils/utils.service';
import { AppModule } from './app.dependency';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'theindiancircuit';

  constructor(
    private router: Router,
    private utilsService: UtilsService,
    private zone: NgZone
  ) {
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.zone.runOutsideAngular(() => {
          this.utilsService.scrollToTop();
        });
      }
    });
  }


  ngOnInit(): void {
    // this.utilsService.scrollToTop();
  }
}
