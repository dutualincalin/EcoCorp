import { Component } from '@angular/core';

@Component({
  selector: 'app-validation-page',
  templateUrl: './validation-page.component.html',
  styleUrls: ['./validation-page.component.css']
})
export class ValidationPageComponent {
  images : any[] = [
    {
      src: "",
      alt:"Facebook Post",
      title: "<a href=''>Facebook post</a>"
    },
    {
      src: "",
      alt:"Instagram Post",
      title: "<a href=''>Instagram post</a>"
    },
    {
      src: "",
      alt:"Pinterest Post",
      title: "<a href=''>Pinterest post</a>"
    },
  ]

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
}
