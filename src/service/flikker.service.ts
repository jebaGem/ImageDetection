import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootPhotos, Photos } from 'src/types/types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Constant } from 'src/app/flikker/constant';
export type ResponseType = 'arraybuffer' | 'blob' | 'json' | 'text';
@Injectable({
  providedIn: 'root'
})
export class FlikkerService {


  baseURL: string = Constant.URL;
  constructor(private _http: HttpClient) { }

  //Get all the photos
  GetAllPhotos(): Observable<RootPhotos> {
    return  this._http.get<RootPhotos>(this.baseURL)
 }

 //Get photo based on the id and server
 GetPhoto(id:string,server:string):Observable<any>{
  const url ="https://farm66.staticflickr.com/65535/"+id+"_"+server+"_b.jpg";
  const headers = new HttpHeaders({
  });
 return  this._http.get<Blob>(url,{headers: headers, responseType: 'blob' as 'json' })
  }
}
