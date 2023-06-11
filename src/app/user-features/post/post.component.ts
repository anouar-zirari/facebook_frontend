import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Postservice } from 'src/app/service/post.service';
import { Post } from 'src/app/model/post';
import { UserService } from 'src/app/service/user.service';

@Injectable(
  {
    providedIn: 'root'
  }
)

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: Postservice, public userService: UserService) { }

  ngOnInit(): void {
    this.getPosts();
    // from chatgpt to desplay the new added post without refreshing the page
    this.postService.postAdded$.subscribe(() => {
      this.getPosts();  
    });
  }

  getPosts(){
    this.postService.getPostsByUser().subscribe(
      data => {
        this.posts = data;
        this.posts.reverse();
      }
    );
  }

  

}
