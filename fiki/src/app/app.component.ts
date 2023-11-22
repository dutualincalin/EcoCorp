import {AfterViewInit, Component} from '@angular/core';
import {ReferenceObject} from "./model/ReferenceObject";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  sidebar: boolean = false
  sidebarReferences: ReferenceObject[] = []

  ngAfterViewInit(): void {
    this.sidebarReferences.push(
      new ReferenceObject(1, "Intro", document.querySelector('#intro-container')),
      new ReferenceObject(2, "Meet the team", document.querySelector('#team-container')),
      new ReferenceObject(3, "Problems and solutions", document.querySelector('#problem-solution-container')),
      new ReferenceObject(4, "Our competition", document.querySelector('#competition-container')),
      new ReferenceObject(5, "Metrics", document.querySelector('#metrics-container')),
      new ReferenceObject(6, "Cost and Revenue", document.querySelector('#cost-revenue-container')),
      new ReferenceObject(7, "Market Research", document.querySelector('#interview-container')),
      new ReferenceObject(8, "Wireframes", document.querySelector('#wireframe-container')),
      new ReferenceObject(9, "User Experience", document.querySelector('#UX-container'))
    )
  }

  switchSidebar() {
    this.sidebar = !this.sidebar;
  }

  navigateToSection(elRef: any) {
    elRef.scrollIntoView({behavior: "smooth", block: "start", inline: "center"})
    this.sidebar = false
  }
}
