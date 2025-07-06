import { Component, OnInit, inject } from '@angular/core';
import { UtilsService } from '../../utils/utils.service';
import blogs from '../../../assets/resources/blogs.json';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EXTERNAL_LINKS } from '../../services/external-links.service';
import { ArticleDependencies } from './article.dependency';
@Component({
  selector: 'app-article',
  standalone: true,
  imports: [ArticleDependencies],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {
  emailForm: FormGroup;
  // blogTitles: any[] = [];
  blogContent: any;
  blogTitle: any;
  dateOfPublish: any;
  blogImagePath: any;
  articleId!:string;
  blog4Id:string="tradeLyncs-launches-free-business-accounts";
  getStartedLink:string=EXTERNAL_LINKS.signup;
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  constructor(private utilsService: UtilsService,) {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.initializeArticle(params['id']);
      } else {
        this.router.navigate(['/blogs']);
      }
    });
  }

  initializeArticle(articleId: any) {
    this.articleId=articleId;
    const article = blogs.blogContents.find(x => x.id.toString() === articleId);
    if (article) {
      this.blogTitle = article.title;
      this.blogContent = article.content;
      this.dateOfPublish = article.date;
      this.blogImagePath = article.imagePathBanner;
    } else {
      this.router.navigate(['/blogs']);
    }
  }
  get email() {
    return this.emailForm.get('email');
  }

  openLink(linkType: string) {
    console.log(linkType);
    this.utilsService.trackButtonClick();
    this.utilsService.openLink(linkType, this.emailForm.value.email);
  }
}
