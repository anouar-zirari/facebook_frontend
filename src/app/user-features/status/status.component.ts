import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Postservice } from 'src/app/service/post.service';
import { Post } from 'src/app/model/post';
import { PostComponent } from '../post/post.component';
import { UserService } from 'src/app/service/user.service';
import { ImageComponent } from '../image/image.component';
import { imageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule, FormsModule, ImageComponent],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  @ViewChild(ImageComponent) viewData!: ImageComponent;
  post: Post = new Post();
  selectedImage!: any;

  constructor(
    private postService: Postservice, 
    private postComponent: PostComponent,
    private imageService: imageService
    ) { }

  ngOnInit(): void {
  }

  share(){
    this.postService.share(this.post, this.viewData.selectedFile).subscribe(() => {  
      this.postService.emitPostAdded();
      alert('Post has been added');
    }); 
  }

  // onFileChanged(event: any) {
  //   this.selectedImage = event.target.files[0];
  //   this.imageService.setSelectedImage(this.selectedImage);
  // }

}
