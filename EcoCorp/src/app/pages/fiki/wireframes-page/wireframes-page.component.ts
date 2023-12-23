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
      image: 'assets/wireframes/Intro.jpg'
    },
    {
      title: 'First page with Login prompt',
      image: 'assets/wireframes/Intro-Login.jpg'
    },
    {
      title: 'Sign-up page',
      image: 'assets/wireframes/Sign-up.jpg'
    },
    {
      title: 'Profile page',
      image: 'assets/wireframes/Profile.jpg'
    },
    {
      title: 'Page with products for sale',
      image: 'assets/wireframes/Sales.jpg'
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
