import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootPhotos, Photos } from 'src/types/types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
export type ResponseType = 'arraybuffer' | 'blob' | 'json' | 'text';
@Injectable({
  providedIn: 'root'
})
export class FlikkerService {
  baseURL: string = "https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=ef1f9d4f8ca80dada31c684364355282&FLickrApi_sig=d7f57fa9e01a6a2d6ccd8597b8d2f86b&nojsoncallback=1&format=json&per_page=500&tags=hi&content_type=7&extras=owner_name,date_upload";
  constructor(private _http: HttpClient) { }

  GetAllPhotos(): Observable<RootPhotos> {
    return  this._http.get<RootPhotos>(this.baseURL)
 }
 GetPhoto(id:string,server:string):Observable<any>{
  const headers = new HttpHeaders({

  });
  const url ="https://farm66.staticflickr.com/65535/"+id+"_"+server+"_b.jpg";
 return  this._http.get<Blob>(url,{headers: headers, responseType: 'blob' as 'json' })
}
}
