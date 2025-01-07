import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuHeaderComponent } from './components/shared/top-menu-header/top-menu-header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopMenuHeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Royal रसोई | ';
}
