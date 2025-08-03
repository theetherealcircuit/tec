import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { EXTERNAL_LINKS } from '../../../services/external-links.service';
import { UtilsService } from '../../../utils/utils.service';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs/operators';
import { SharedDependencies } from '../shared.dependency';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedDependencies],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  externalLinks = EXTERNAL_LINKS;
  partnerUrls = ['brokers', 'suppliers', 'freight-forwarders', 'institutional-investors'];
  companyUrls = ['about-us', 'careers', 'blogs', 'contact-us'];
  currentTab = 'home';
  currentUrl: string = "";
  homeRoute: boolean = true;

  showNavigationArrows = false;
  showNavigationIndicators = false;
  // images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private elementRef: ElementRef,
    private router: Router,
    private utilsService: UtilsService, config: NgbCarouselConfig
  ) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  @HostListener('window:scroll')
  onWindowScroll() {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;  // Use scrollY for vertical position
      const headerHeight = this.elementRef.nativeElement.offsetHeight;

      // Adjust threshold based on your desired transition behavior
      this.isScrolled = scrollPosition > headerHeight;
    });
  }

  ngOnInit() {
    this.currentUrl = this.router.url;
    console.log(this.currentUrl);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
      }
      if (this.currentUrl == '/home') {
        this.homeRoute = true;
      } else {
        this.homeRoute = false;
      }
    });
  }

  openLink(linkType: string) {
    this.utilsService.trackButtonClick();
    this.utilsService.openLink(linkType);
  }

}