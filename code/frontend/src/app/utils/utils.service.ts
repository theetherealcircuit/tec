import { DOCUMENT, ViewportScroller } from "@angular/common";
import { EXTERNAL_LINKS } from "../services/external-links.service";
import { environment } from "../environments/environment";
import { Inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";


@Injectable({
  providedIn: "root"
})
export class UtilsService {
  externalLinks = EXTERNAL_LINKS;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private viewportScroller: ViewportScroller,
    private cookieService: CookieService) { }

  scrollToTop() {

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 1000);
  }

  public scrollToId(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  trackButtonClick() {
    const currentPath = this.router.url.split('?')[0].replace(/^.*?\//, '');
    this.cookieService.set('sourcePage', this.getSource(currentPath), 1 / 24, '/', this.getTargetDomain(), true, 'Lax');
    this.cookieService.set('sourcePage', this.getSource(currentPath), 1 / 24, '/', this.getDomain(), true, 'Lax');
  }

  getTargetDomain() {
    if (environment.apiUrl) {
      if (environment.apiUrl.split('//').length > 1) {
        return environment.apiUrl.split('//')[1];
      }
    }
    return undefined;
  }

  getDomain(): string {
    const { protocol, hostname, port } = window.location;
    return hostname;
  }

  openLink(linkType: string, email: string = '') {
    console.log(linkType, email);
    let url = '';
    let encodedEmail = encodeURIComponent(email);
    switch (linkType) {
      case 'signup':
        url = `${this.externalLinks.signup}${email ? `?email=${encodedEmail}` : ''}`;
        break;
      case 'becomePartner':
        url = `${this.externalLinks.signup}${email ? `?email=${encodedEmail}` : ''}`;
        break;
      case 'contactUs':
        url = this.externalLinks.contactUs;
        break;
      case 'login':
        url = this.externalLinks.login;
        break;
      case 'terms':
        window.open(this.externalLinks.terms, "_blank");
        return;
      case 'privacy':
        window.open(this.externalLinks.privacy, "_blank");
        return;
      default:
        return;
    }
    window.location.href = url;
  }

  getSource(path: string) {
    switch (path) {
      case 'home':
        return 'trader';
      case 'brokers':
        return 'broker';
      case 'suppliers':
        return 'supplier';
      case 'freight-forwarders':
        return 'freight-forwarder';
      case 'institutional-investors':
        return 'investor';
      default:
        return 'trader';
    }
  }
}