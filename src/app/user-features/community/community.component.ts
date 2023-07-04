import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StatusComponent } from '../status/status.component';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule, StatusComponent, PostComponent],
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
