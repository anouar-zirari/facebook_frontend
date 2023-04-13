import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  stute = {
    text: 'lkasjdflkjasdflkjasdflklkjasdfkljasdklasd;lkjasd;lkjasd;lfkjasf;klasjdf;lkasjf;lksdflkjsad;lfkasdflkslksdflksd;lfkjsdfl;ksdjflk',
    image: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
