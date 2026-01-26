import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../utils/utils.service';
import { AboutUsModule } from './about-us.dependency';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { EXTERNAL_LINKS } from '../../services/external-links.service';
const teamMembers = [
  {
    id: "jayant-pathak",
    name: "Jayant Pathak",
    role: "Explorer",
    image: "team/8.png",
    bio: `A lifelong explorer, Jayant has spent a decade traversing India’s cultural and ecological landscapes. His journeys shaped the vision of The Ethereal Circuit, a regenerative travel movement rooted in mindful exploration and community impact.`
  },

  {
    id: "pranshu-soni",
    name: "Pranshu Soni",
    role: "Archaeology",
    image: "team/11.jpg",
    bio: `Pranshu is an archaeologist specializing in ancient Indian art, temple architecture, and iconography. His research-driven approach enriches each circuit with factual depth, cultural nuance, and immersive learning rooted in India’s earliest artistic traditions.`
  },

  {
    id: "pushpa-patel",
    name: "Pushpa Patel",
    role: "Mountaineer & Cyclist",
    image: "team/12.jpg",
    bio: `Pushpa is a NIM-certified mountaineer with extensive experience in trekking, cycling tours, wildlife safaris, and eco-adventure planning. She brings strong field expertise to crafting safe, engaging, and nature-centered outdoor modules for travelers and students.`
  },

  {
    id: "dr-amrita-chowdhary",
    name: "Dr. Amrita Chowdhary",
    role: "Historian & Educator",
    image: "team/13.jpg",
    bio: `With over 25 years of academic experience, Dr. Amrita is a historian specializing in Indian culture, pedagogy, and research mentorship. Former Senior Lecturer at various universities, she brings scholarly depth and educational insight to our learning journeys.`
  },

  {
    id: "akanksha-modi",
    name: "Akanksha Modi",
    role: "Architect",
    image: "team/14.jpg",
    bio: `Akanksha is an architect and independent researcher known for her work on stepwells. Fondly called “Baori Baaisa”, she leads community-based conservation, documentation, and revival efforts, bringing India’s water heritage to life for our travelers.`
  },

  {
    id: "umesh-menaria",
    name: "Umesh Menaria",
    role: "Wildlife Photographer",
    image: "team/15.jpg",
    bio: `Umesh is a prominent figure from Menar, known for documenting its birds, culture, and community life. As a journalist and wildlife photographer, he plays a key role in championing “Bird Village Menar” on regional and digital platforms.`
  },

  {
    id: "hullas-purohit",
    name: "Hullas Purohit",
    role: "Classical Music",
    image: "team/16.jpg",
    bio: `Hullas is a rising classical vocalist from Bikaner, nurtured in the traditions of Haveli Sangeet and Rajasthan’s folk heritage. With multiple accolades and Pan-India performances, he brings soulful musical experiences to our cultural evenings.`
  },

  {
    id: "shubhi-sharma",
    name: "Shubhi Sharma",
    role: "Kids & Youth Engagement",
    image: "team/18.jpg",
    bio: `Shubhi Sharma is a young educator who curates experiential learning workshops and manages dynamic, kid-centric events. Her creativity, empathy, and hands-on approach helps us build genuine bonds with young minds, making every session engaging, safe, and memorable.`
  },
  {
    id: "Aaditya Saxena",
    name: "Aaditya Saxena",
    role: "Astronomy",
    image: "team/10.jpg",
    bio: `is a young astronomy communicator with 15k+ followers and an award-winning asteroid research paper. Known for capturing early frames of Comet R2 SWAN and interstellar 3I ATLAS, he brings exceptional precision and passion to our night-sky experiences`
  },
  {
    id: "sandeep-ratnoo",
    name: "Sandeep Ratnoo",
    role: "Folk Music",
    image: "team/9.jpg",
    bio: `Sandeep is a renowned curator of Rajasthani folk music, working closely with communities like the Manganiyars to preserve and promote traditional arts. His cultural storytelling enriches our circuits with authentic soundscapes and living heritage.`
  }
];

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
  teamMembers: any = teamMembers;
  externalLinks = EXTERNAL_LINKS;
  constructor(
    private utilService: UtilsService,
    private router: Router
  ) {

  }
  ngOnInit() {
    this.utilService.scrollToTop();
  }

  openModal(i: number, j: number, type: string) {
    if (type === 'globalLeader') {
      this.memberInfo = this.globalLeaderInfo[i][j];
    } else {
      this.memberInfo = this.boardMemberInfo[i][j];
    }
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
