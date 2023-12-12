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
      src: "./assets/posts-screenshots/Facebook.png",
      alt:"Facebook Page",
      title: "Facebook page",
      link: "https://www.facebook.com/profile.php?id=61553893934922"
    },
    {
      src: "./assets/posts-screenshots/Instagram.png",
      alt: "Instagram Page",
      title: "Instagram page",
      link: "https://instagram.com/ecocorpmarketplace?igshid=OGQ5ZDc2ODk2ZA=="
    },
    {
      src: "./assets/posts-screenshots/Reclama.jpg",
      alt: "Ads",
      title: "Ads"
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
