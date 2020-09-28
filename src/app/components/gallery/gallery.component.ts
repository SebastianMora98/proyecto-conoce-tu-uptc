import { Component, OnInit } from '@angular/core';
import { DataWpService } from '@services/posts/data-wp.service';
import { PostInterface } from '@interfaces/wp_interfaces/post/post.interface';
import { Subscription } from 'rxjs';
import { Galleria } from 'primeng/galleria';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  private subcription: Subscription = new Subscription();
  lastPosts: PostInterface[];
  images: any[] = [];
  res: PostInterface[];
  imagesvec: any[] = [];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  constructor(private dataWpService: DataWpService) {}

  ngOnInit(): void {
    this.subcription.add(
      this.dataWpService.getLastPosts().subscribe((res: PostInterface[]) => {
        res.map((post) => {
          const object = {
            previewImageSrc:
              post._embedded['wp:featuredmedia'][0].media_details.sizes?.full
                .source_url,
            thumbnailImageSrc:
              post._embedded['wp:featuredmedia'][0].media_details.sizes
                ?.thumbnail.source_url,
            alt: 'alt',
            title: post.title.rendered,
            id: post.id,
          };
          this.images = [...this.images, object];
        });

        /* this.images = [
            {
              previewImageSrc:
                'https://image.freepik.com/vector-gratis/vector-onda-azul-transparente_1055-7084.jpg',
              thumbnailImageSrc:
                'https://image.freepik.com/vector-gratis/vector-onda-azul-transparente_1055-7084.jpg',
              alt: 'Description for Image 1',
              title: 'Title 1',
            },
            {
              previewImageSrc: 'demo/images/galleria/galleria2.jpg',
              thumbnailImageSrc: 'demo/images/galleria/galleria2s.jpg',
              alt: 'Description for Image 2',
              title: 'Title 2',
            },
            {
              previewImageSrc: 'demo/images/galleria/galleria3.jpg',
              thumbnailImageSrc: 'demo/images/galleria/galleria3s.jpg',
              alt: 'Description for Image 3',
              title: 'Title 3',
            },
            {
              previewImageSrc: 'demo/images/galleria/galleria4.jpg',
              thumbnailImageSrc: 'demo/images/galleria/galleria4s.jpg',
              alt: 'Description for Image 4',
              title: 'Title 4',
            },
            {
              previewImageSrc: 'demo/images/galleria/galleria5.jpg',
              thumbnailImageSrc: 'demo/images/galleria/galleria5s.jpg',
              alt: 'Description for Image 5',
              title: 'Title 5',
            },
            {
              previewImageSrc: 'demo/images/galleria/galleria6.jpg',
              thumbnailImageSrc: 'demo/images/galleria/galleria6s.jpg',
              alt: 'Description for Image 6',
              title: 'Title 6',
            },
            {
              previewImageSrc: 'demo/images/galleria/galleria7.jpg',
              thumbnailImageSrc: 'demo/images/galleria/galleria7s.jpg',
              alt: 'Description for Image 7',
              title: 'Title 7',
            },
            {
              previewImageSrc: 'demo/images/galleria/galleria8.jpg',
              thumbnailImageSrc: 'demo/images/galleria/galleria8s.jpg',
              alt: 'Description for Image 8',
              title: 'Title 8',
            },
            {
              previewImageSrc: 'demo/images/galleria/galleria9.jpg',
              thumbnailImageSrc: 'demo/images/galleria/galleria9s.jpg',
              alt: 'Description for Image 9',
              title: 'Title 9',
            },
            {
              previewImageSrc: 'demo/images/galleria/galleria10.jpg',
              thumbnailImageSrc: 'demo/images/galleria/galleria10s.jpg',
              alt: 'Description for Image 10',
              title: 'Title 10',
            },
            {
              previewImageSrc: 'demo/images/galleria/galleria11.jpg',
              thumbnailImageSrc: 'demo/images/galleria/galleria11s.jpg',
              alt: 'Description for Image 11',
              title: 'Title 11',
            },
            {
              previewImageSrc: 'demo/images/galleria/galleria12.jpg',
              thumbnailImageSrc: 'demo/images/galleria/galleria12s.jpg',
              alt: 'Description for Image 12',
              title: 'Title 12',
            },
            {
              previewImageSrc: 'demo/images/galleria/galleria13.jpg',
              thumbnailImageSrc: 'demo/images/galleria/galleria13s.jpg',
              alt: 'Description for Image 13',
              title: 'Title 13',
            },
            {
              previewImageSrc: 'demo/images/galleria/galleria14.jpg',
              thumbnailImageSrc: 'demo/images/galleria/galleria14s.jpg',
              alt: 'Description for Image 14',
              title: 'Title 14',
            },
            {
              previewImageSrc: 'demo/images/galleria/galleria15.jpg',
              thumbnailImageSrc: 'demo/images/galleria/galleria15s.jpg',
              alt: 'Description for Image 15',
              title: 'Title 15',
            },
          ]; */
      })
    );
  }
}
