import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuHeaderComponent } from './components/shared/top-menu-header/top-menu-header.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopMenuHeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'royalrasoyi';
}
