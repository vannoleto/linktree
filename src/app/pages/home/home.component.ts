import { Component } from '@angular/core';
import { LinksComponent } from "../../components/links/links.component"; 
import { YoutubeComponent } from "../../components/youtube/youtube.component";
import { InstagramComponent } from "../../components/instagram/instagram.component";

@Component({
  selector: 'app-home',
  imports: [LinksComponent , YoutubeComponent, InstagramComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
