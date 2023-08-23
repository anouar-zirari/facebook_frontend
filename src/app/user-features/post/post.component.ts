import { Component, Injectable, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Postservice } from 'src/app/service/post.service';
import { Post } from 'src/app/model/post';
import { UserService } from 'src/app/service/user.service';
import { PostOptionsComponent } from '../post-options/post-options.component';
import { ImageComponent } from '../image/image.component';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { __param } from 'tslib';

@Injectable(
  {
    providedIn: 'root'
  }
)

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, PostOptionsComponent, ImageComponent],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[] = [];

  @Input("mode")
  mode!: string;

  constructor(private postService: Postservice, public userService: UserService,
    private activatedRouter: ActivatedRoute) { }

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
    
    let userId: number;
    this.activatedRouter.params.subscribe(
      (prams: Params) => {
        userId = prams['userId']
        this.postService.getCommunity(userId).subscribe(
          data => this.posts = data
        );
      }
    )

    
  }

  

}
