import { Component } from '@angular/core';
import {ConfigService} from "./config/config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestProject';
  posts : any;
  constructor(private httpService: ConfigService) { }

  ngOnInit() {
    this.httpService.getPosts().subscribe(
      (response) => { this.posts = response; },
      (error) => { console.log(error); });
  }
}
