import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FlikkerService } from 'src/service/flikker.service';
import { RootPhotos, Photos, Photo } from 'src/types/types';
import cannyEdgeDetector from 'canny-edge-detector';
import Image from 'image-js';
import { DomSanitizer } from '@angular/platform-browser';
import { NgOpenCVService, OpenCVLoadResult } from 'ng-open-cv';
import { Observable, fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';
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
  showOverlay : boolean;
// Keep tracks of the ready
openCVLoadResult: Observable<OpenCVLoadResult>;
@ViewChild('canvas_box')
canvasOutput: ElementRef;
/**
   * @param  {FlikkerService} privatephotosService
   * @param  {DomSanitizer} privatesanitizer
   */
  constructor(private photosService:  FlikkerService,
    private ngOpenCVService: NgOpenCVService,
    private sanitizer: DomSanitizer) { }

  /**
   * on init call the photos service
   */
  ngOnInit(): void {
    this.getphotos();
    this.openCVLoadResult = this.ngOpenCVService.isReady$;
  }

  /**
   * @param  {Blob} image
   * convert Image from Blob type
   */
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageBlobUrl = reader.result;
// commenting this becos not working
// tried with swoitch map also
      //this.ngOpenCVService.loadImageToHTMLCanvas(`${reader.result}`, this.canvasOutput.nativeElement);
    }, false);
  if (image) {
      reader.readAsDataURL(image);
    }
  }

  /**
   * Loading image edge detecion
   */
  imageLoad(){
    //commenting because the dynamic url is not wokring
    // Image.load(this.imageBlobUrl).then((img) => {
    //   const grey = img.grey();
    //   const edge = cannyEdgeDetector(grey);
    //   return edge.save('edge.png');
    // })

  }

  /**
   * @param  {string} id
   * @param  {string} server
   * onclick of every item , call the api to get the image
   */
  public getValue(id:string,server:string){
  this.photosService.GetPhoto(id,server).subscribe((baseImage:any)=>{
  this.createImageFromBlob(baseImage);
  this.imageLoad();
});
  }

  //Close the overlay button, unlaod the image src by clearing it
  closeNav(){
    this.imageBlobUrl="";
    this.showOverlay= false;
  }

  //open the overlay, to show the image
 openNav(){
  this.showOverlay= true;
}
  /**
   * @param  {} {this.loading=true;this.errorMessage="";this.photosService.GetAllPhotos(
   * @param  {} .subscribe((response
   * @param  {} =>{console.log('responsereceived'
   * @param  {} this.photos=response.photos;console.log(this.photos.photo
   * @param  {} ;}
   * @param  {} (error
   * @param  {} =>{console.error('Requestfailedwitherror'
   * @param  {} this.errorMessage=error;this.loading=false;}
   * @param  {} (
   * @param  {} =>{this.loading=false;}
   */
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

          this.loading = false;
        })
  }

}
