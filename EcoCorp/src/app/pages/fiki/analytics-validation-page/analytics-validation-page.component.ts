import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics-validation-page',
  templateUrl: './analytics-validation-page.component.html',
  styleUrls: ['./analytics-validation-page.component.css']
})
export class AnalyticsValidationPageComponent {
  report_images: any[] = [
    {
      src: "./assets/analytics-report/Report_1.png",
      alt: "First measurement"
    },
    {
      src: "./assets/analytics-report/Report_2.png",
      alt: "Second measurement"
    },
    {
      src: "./assets/analytics-report/Report_3.png",
      alt: "Third measurement"
    },
    {
      src: "./assets/analytics-report/Report_4.png",
      alt: "Forth measurement"
    },
    {
      src: "./assets/analytics-report/Report_5.png",
      alt: "Fifth measurement"
    },
    {
      src: "./assets/analytics-report/Report_6.png",
      alt: "Sixth measurement"
    },
  ]

  post_images : any[] = [
    {
      src: "./assets/posts-screenshots/",
      alt:"Facebook Post",
      title: "<a href=''>Facebook post</a>"
    },
    {
      src: "./assets/posts-screenshots/",
      alt:"Instagram Post",
      title: "<a href=''>Instagram post</a>"
    },
    {
      src: "./assets/posts-screenshots/",
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
