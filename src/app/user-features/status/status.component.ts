import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Postservice } from 'src/app/service/post.service';
import { Post } from 'src/app/model/post';
import { PostComponent } from '../post/post.component';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  post: Post = new Post();

  constructor(
    private postService: Postservice, 
    private postComponent: PostComponent,
    ) { }

  ngOnInit(): void {
  }

  share(){
    this.postService.share(this.post).subscribe(() => {
      alert('Post has been added');
      this.postService.emitPostAdded();
    }); 
  }

}
