import { Component, OnInit } from '@angular/core';
import { About } from '../about';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutMeComponent implements OnInit {

  selectedAbout: About;

  aboutme: About[];


  constructor(private aboutService: AboutService) {} 
    
  

  ngOnInit() {
    this.getAboutme();
  }
  
  onSelect(about: About): void {
    this.selectedAbout = about;
  }

  getAboutme(): void {
      this.aboutService.getAboutme()
        .subscribe(aboutme => this.aboutme = aboutme);


  }
}
