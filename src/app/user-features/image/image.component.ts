import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { imageService } from 'src/app/service/image.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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

  selectedFile!: File;
  message!: string;
  imageSrc!: string;
  mimeType!: any;
  imageUrl!: any;
  imagePath!: any;
  checkForImage: boolean = false;

  constructor(private imageService: imageService) { }

  ngOnInit(): void {
  }

  onFileChanged(e: any) {
    
    this.selectedFile = e.target.files[0];
    this.mimeType = e.target.files[0].type;

    if(this.mimeType.match(/image\/*/) == null) {
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


  // onUpload() {   
  //   this.checkForImage = false;
  //   this.imageService.upload(this.selectedFile, ).subscribe(
  //     data => {
  //       alert(`sended effectefly ${data}`);
        
  //     }
  //   )
  // }

  getImage() {

    this.imageService.getFiles(2).subscribe(

      (imageBlob: Blob) => {
        console.log(imageBlob);

        const reader = new FileReader();
        reader.onloadend = () => {
          this.imageSrc = reader.result as string;
        };
        reader.readAsDataURL(imageBlob);
      }
    )
    //Make a call to Sprinf Boot to get the Image Bytes.
    // this.httpClient.get('http://localhost:8080/api/v1/' + 2)
    //   .subscribe(
    //     res => {
    //       this.retrieveResonse = res;
    //       this.base64Data = this.retrieveResonse.picByte;
    //       this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    //     }
    //   );
  }

}
