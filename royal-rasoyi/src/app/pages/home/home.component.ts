import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor( private readonly titleService: Title) {
    this.titleService.setTitle('Royal रसोई  | The Taste you deserve');
  }

}
