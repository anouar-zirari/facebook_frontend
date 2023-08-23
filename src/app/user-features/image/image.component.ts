import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { imageService } from 'src/app/service/image.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { share } from 'rxjs';
import { StatusComponent } from '../status/status.component';
import { Postservice } from 'src/app/service/post.service';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input('postId')
  postId: any;
  @Input('fromStatus')
  fromStatus!: string;
  @ViewChild(StatusComponent) viewStatusComponent!: StatusComponent;


  selectedFile!: File;
  message!: string;
  imageSrc!: string;
  mimeType!: any;
  imageUrl!: any;
  imagePath!: any;
  checkForImage: boolean = false;
  showImage: boolean = false;
  showforStatus: boolean = false;
  postIds: number[] = [];

  constructor(private imageService: imageService, private postService: Postservice) { }

  ngOnInit(): void {
    this.getImageForPost();
  }

  onFileChanged(e: any) {

    this.selectedFile = e.target.files[0];
    this.mimeType = e.target.files[0].type;

    if (this.mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported .';
      return
    }
    let reader = new FileReader();

    reader.readAsDataURL(this.selectedFile);
    this.imagePath = this.selectedFile;
    reader.onloadend = (_event) => {
      this.imageUrl = reader.result;
      this.checkForImage = true;
    }
  }



  // getImage() {
  //   console.log(this.postIds);
    
  //   if (this.postIds.includes(this.postId)) {
  //     this.showImage = true;
  //     this.imageService.getFiles(this.postId).subscribe(
  //       (imageBlob: Blob) => {
  //         const reader = new FileReader();
  //         reader.onloadend = () => {
  //           this.imageSrc = reader.result as string;
  //         };
  //         reader.readAsDataURL(imageBlob);
  //       }
  //     );
  //   }
  // }

  getImageForPost() {
    this.postService.getPostsWithImageId().subscribe(
      data => {
        this.postIds = data;
        if (this.postIds.includes(this.postId)) {
          this.showImage = true;
          this.imageService.getFiles(this.postId).subscribe(
            (imageBlob: Blob) => {
              const reader = new FileReader();
              reader.onloadend = () => {
                this.imageSrc = reader.result as string;
              };
              reader.readAsDataURL(imageBlob);
            }
          );
        }
        
      }
    )
  }

  share() {
    this.viewStatusComponent.share();
  }







}
