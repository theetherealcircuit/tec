import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  private _hasChildren = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => { 
      const urlSegments = this.router.url.split('/');
      this._hasChildren.next(urlSegments.length > 2);
    });
  }

  get hasChildren() {
    return this._hasChildren.asObservable();
  }
}