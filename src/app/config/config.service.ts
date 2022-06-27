import { HttpClient } from  '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private url = 'https://webtech.informatik.unibw-muenchen.de/server';


  constructor(private http: HttpClient) { }
  getPosts() {
    return this.http.get(this.url);
  }



}











