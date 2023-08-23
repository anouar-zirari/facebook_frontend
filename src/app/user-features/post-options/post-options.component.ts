import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/model/comment';
import { LikeDto } from 'src/app/model/likeDto';
import { Post } from 'src/app/model/post';
import { postOptionService } from 'src/app/service/post-option.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-post-options',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-options.component.html',
  styleUrls: ['./post-options.component.css']
})
export class PostOptionsComponent implements OnInit {

  @Input("post")
  post!: Post;

  comments: Comment[] = [];
  commentll: boolean = false;
  comment!: string;
  likesNumber: LikeDto = new LikeDto;

  constructor(private postOptionService: postOptionService, private userService: UserService) { }

  ngOnInit(): void {
    this.findAllCommentForPost();
    this.getPostLikes();
    
  }

  // saveComment()

  findAllCommentForPost() {
    this.postOptionService.getAllCommentForPost(this.post.id).subscribe(
      data => {
        this.comments = data;
      }
    );
  }

  openComments() {
    if(this.commentll == false)
      this.commentll = true;
    else
      this.commentll = false;
  }



  addComment() {
      this.postOptionService.savePostOption(
      this.userService.logedUser.id, this.post.id, this.comment, 0).subscribe(
      () => this.findAllCommentForPost()
    );
    
  }

  addLike() {
    this.postOptionService.savePostOption(this.userService.logedUser.id, this.post.id, null, 1).subscribe(
      () => this.ngOnInit()
    )
  }

  getPostLikes(){
    this.postOptionService.getPostLikes(this.post.id).subscribe(
      data => {
        this.likesNumber = data;
      }
      
    )
  }

}
