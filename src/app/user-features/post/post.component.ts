import { Component, Injectable, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Postservice } from 'src/app/service/post.service';
import { Post } from 'src/app/model/post';
import { UserService } from 'src/app/service/user.service';
import { PostOptionsComponent } from '../post-options/post-options.component';

@Injectable(
  {
    providedIn: 'root'
  }
)

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, PostOptionsComponent],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[] = [];

  @Input("mode")
  mode!: string;

  constructor(private postService: Postservice, public userService: UserService) { }

  ngOnInit(): void {
    if(this.mode == 'community')
      this.community();
    else
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

  community(){
    return this.postService.getCommunity().subscribe(
      data => this.posts = data
    )
  }

  

}
