import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-menu-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './top-menu-header.component.html',
  styleUrl: './top-menu-header.component.scss'
})
export class TopMenuHeaderComponent {

}
