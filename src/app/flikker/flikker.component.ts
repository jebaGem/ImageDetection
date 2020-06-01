import { Component, OnInit } from '@angular/core';
import { FlikkerService } from 'src/service/flikker.service';
import { RootPhotos, Photos, Photo } from 'src/types/types';
import cannyEdgeDetector from 'canny-edge-detector';
import Image from 'image-js';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-flikker',
  templateUrl: './flikker.component.html',
  styleUrls: ['./flikker.component.scss']
})
export class FlikkerComponent implements OnInit {
  photos: Photos;
  imageBlobUrl: any;
  loading: boolean = false;
  errorMessage;
  thumbnail: any;
  constructor(private photosService:  FlikkerService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getphotos();
  }
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageBlobUrl = reader.result;
      Image.load(this.imageBlobUrl).then((img) => {
        const grey = img.grey();
        const edge = cannyEdgeDetector(grey);


        edge.open();
      })
    }, false);
  if (image) {
      reader.readAsDataURL(image);
    }
  }
  public getValue(id:string,server:string){
this.photosService.GetPhoto(id,server).subscribe((baseImage:any)=>{
  this.createImageFromBlob(baseImage);
});
  }



  public getphotos() {
    this.loading = true;
    this.errorMessage = "";
    this.photosService.GetAllPhotos()
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.photos = response.photos;
          console.log(this.photos.photo);
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
      //This is actually not needed
          this.loading = false;
        })
  }

}
