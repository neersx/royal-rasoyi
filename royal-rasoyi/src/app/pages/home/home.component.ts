import { Component } from '@angular/core';
import { MetaService } from '../../core/services/meta-tags.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [MetaService]
})
export class HomeComponent {

  constructor( private readonly metaService: MetaService) {
    const metaDetails = {
      title: ' Royal रसोई  | The Taste you deserve',
      description: 'At Royal रसोई, every dish is crafted with the love and care of a home kitchen. Whether it’s a casual lunch or a family gathering, enjoy the flavors of homemade goodness without stepping into the kitchen.',
      image: 'https://royalrasoyi.com/assets/images/thumbnail.jpg',
      url: 'https://royalrasoyi.com/',
      type: 'website'
    };
  
    this.metaService.updateMetaTags('Home', metaDetails);
  }

}
