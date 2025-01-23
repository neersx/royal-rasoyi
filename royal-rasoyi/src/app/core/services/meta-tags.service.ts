import { Injectable, makeStateKey, TransferState } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
const META_KEY = makeStateKey('meta_tags');

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  constructor(private readonly meta: Meta, private readonly title: Title, private readonly transferState: TransferState) {}

  /**
   * Updates the meta tags for the page.
   * @param pageName - The name of the page.
   * @param metaDetails - An object containing meta tag details.
   */
  updateMetaTags(pageName: string, metaDetails: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
  }) {
    // Update the page title
    if (metaDetails.title) {
      this.title.setTitle(metaDetails.title);
    }

    const tags : any = [
        { name: 'description', content: metaDetails.description ?? '' },
        { name: 'image', content: metaDetails.image ?? '' },
        { name: 'url', content: metaDetails.url ?? '' },
        { property: 'og:title', content:`${metaDetails.title} | Royal रसोई ` },
        { property: 'og:description', content: metaDetails.description ?? '' },
        { property: 'og:image', content: metaDetails.image ?? '' },
        { property: 'og:url', content: metaDetails.url ?? '' },
        { property: 'og:type', content: metaDetails.type ?? 'website' },
        { name: 'twitter:title', content: metaDetails.title ?? '' },
        { name: 'twitter:description', content: metaDetails.description ?? '' },
        { name: 'twitter:image', content: metaDetails.image ?? '' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ];
  
      // Remove existing tags and add updated ones
      tags.forEach((tag: any) => {
        this.meta.updateTag(tag);
        this.transferState.set(META_KEY, tags);
      });
  
    console.log(`Meta tags updated for page: ${pageName}`);
  }

}
