import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../utils/utils.service';
import { AboutUsModule } from './about-us.dependency';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import boardMembersJson from '../../../assets/resources/boardMemberInformation.json';
import blogs from '../../../assets/resources/blogs.json';
import { EXTERNAL_LINKS } from '../../services/external-links.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [AboutUsModule, CommonModule, RouterModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {

  globalLeaderInfo: any = {};
  boardMemberInfo: any = {};
  memberInfo: any;
  blogTitles: any;
  externalLinks = EXTERNAL_LINKS;
  constructor(
    private utilService: UtilsService,
    private router: Router
  ) {

  }
  ngOnInit() {
    this.globalLeaderInfo = boardMembersJson.globalLeaders;
    this.boardMemberInfo = boardMembersJson.boardMembers;
    this.initializeBlogs();
  }

  openModal(i: number, j: number, type: string) {
    if (type === 'globalLeader') {
      this.memberInfo = this.globalLeaderInfo[i][j];
    } else {
      this.memberInfo = this.boardMemberInfo[i][j];
    }
  }

  initializeBlogs() {
    this.blogTitles = blogs.blogContents;
  }

  openArticle(articleId: any) {
    this.router.navigate(['/blogs', articleId]);
  }
  openLink(linkType: String) {
    if (linkType === 'signup') {
      //window.open(`${this.externalLinks.signup}?email=${this.emailForm.value.email}`);
    } else if (linkType === 'contactUs') {
      window.open(`${this.externalLinks.contactUs}`);
    }
    else {
      window.open(`${this.externalLinks.signup}`);
    }
  }
}
