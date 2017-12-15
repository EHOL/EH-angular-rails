import { Component, OnInit, Input } from '@angular/core';
import { About } from '../about';

@Component({
  selector: 'app-about-detail',
  templateUrl: './about-detail.component.html',
  styleUrls: ['./about-detail.component.css']
})
export class AboutDetailComponent implements OnInit {

  @Input() about: About;

  constructor() { }

  ngOnInit() {
  }

}
