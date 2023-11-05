import { Component } from '@angular/core';
import {Person} from "../../model/Person";

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent {
  team: Person[] = [
    new Person(
      "Tudorache Alina",
      "Project Manager",
      "alina.tudorache872@gmail.com",
      "assets/PM.jpg"
    ),
    new Person(
      "Dutu Calin",
      "Software Developer",
      "alin_calin.dutu@stud.acs.upb.ro",
      "assets/Developer.jpg"
    ),
    new Person(
      "Iordache Matei",
      "Software Tester",
      "matei.iordache21@gmail.com",
      "assets/Tester.jpg"
    ),
    new Person(
      "Matei Bianca",
      "Software Developer",
      "mateibiancae@gmail.com",
      "assets/Developer.jpg"
    ),
    new Person(
      "Buiciuc Ana-Maria",
      "Software Tester",
      "ana_maria.buiciuc@stud.acs.upb.ro",
      "assets/Tester.jpg"
    ),
  ];
}
