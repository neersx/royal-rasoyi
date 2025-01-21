import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TopMenuHeaderComponent } from './components/shared/top-menu-header/top-menu-header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { Meta, Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopMenuHeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent implements OnInit {
  constructor(private readonly router: Router, private readonly meta: Meta, private readonly titleService: Title) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          const route = this.router.routerState.root;
          let child = route;
          while (child.firstChild) {
            child = child.firstChild;
          }
          return child.snapshot.data;
        })
      )
      .subscribe(data => {
        console.log(data, 'data');
        this.titleService.setTitle(data['title'] || 'Royal रसोई - Home made authentic taste that you deserve');
        this.meta.updateTag({ name: 'description', content: data['description'] || 'Default Description' });
      });
  }
}
