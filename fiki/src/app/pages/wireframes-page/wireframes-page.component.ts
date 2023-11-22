import { Component } from '@angular/core';

@Component({
  selector: 'app-wireframes-page',
  templateUrl: './wireframes-page.component.html',
  styleUrls: ['./wireframes-page.component.css']
})

export class WireframesPageComponent {
  wireframes = [
    {
      title: 'First page',
      image: 'assets/Wireframes/Intro.jpg'
    },
    {
      title: 'First page with Login prompt',
      image: 'assets/Wireframes/Intro-Login.jpg'
    },
    {
      title: 'Sign-up page',
      image: 'assets/Wireframes/Sign-up.jpg'
    },
    {
      title: 'Profile page',
      image: 'assets/Wireframes/Profile.jpg'
    },
    {
      title: 'Page with products for sale',
      image: 'assets/Wireframes/Sales.jpg'
    }
  ]

  responsiveOptions = [
    {
      breakpoint: '1920px',
      numVisible: 5
    },
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
}
