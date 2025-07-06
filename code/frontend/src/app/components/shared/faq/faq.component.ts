import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import faqConfig from '../../../../assets/resources/faqConfig.json';
import { FaqDependency } from './faq.dependency';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [FaqDependency],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent implements OnInit {
  urlEnd: string = "";
  faqList: { id: number; question: string; answer: string; tags: string[]; }[] = [];
  constructor(private router: Router) {
  }
  ngOnInit() {
    this.initializeFaq();
  }

  initializeFaq() {
    let url = this.router.url;
    this.urlEnd = url.substring(url.lastIndexOf('/') + 1);
    this.faqList = faqConfig.filter(x => x.tags.indexOf(this.urlEnd) > -1);
  }

  isCollapsed(faqId: number): boolean {
    const element = document.getElementById('collapse' + faqId);
    return !element || !element.classList.contains('show');
  }
}
