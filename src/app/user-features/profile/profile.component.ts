import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from '../status/status.component';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, StatusComponent, PostComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  shownElement = '';

  

  constructor() { }

  ngOnInit(): void {
    this.shownElement = 'posts';
  }

  toggle(elementName: string){
    this.shownElement = elementName;
  }

}
