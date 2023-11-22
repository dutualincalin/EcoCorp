import { Component } from '@angular/core';
import {UserStory} from "../../model/UserStory";

@Component({
  selector: 'app-user-experience-page',
  templateUrl: './user-experience-page.component.html',
  styleUrls: ['./user-experience-page.component.css']
})
export class UserExperiencePageComponent {
  persona = {
    name: "Iolanda",
    occupation: "Specialist HR in cadrul unei corporatii",
    age:"34 ani",
    status:"Divortata, 2 copii",
    motivation: {
      Familie: "Cele doua fete sunt cel mai important lucru pentru Iolanda și dorește sa le asigure acestora o" +
        "viață fericită, chiar și în lipsa unei figuri paterne",
      Ambitie: "Iolanda este o femeie ambitioasa, ce nu va accepta niciodată că rolul unei femei este doar acela de" +
        "a avea grija de copii și de casa. O femeie poate fi și mama, și CEO!",
      Ecologie: "O parte din educația pe care le-o oferă fetelor este aceea ca Pamantul este casa noastra si ca nu" +
        "trebuie sa abuzam de resursele acestuia. Prin urmare, prefera sa cumpere de cele mai multe ori produse second" +
        "hand, pentru a nu incuraja risipa"
    },
    about:[
      "Își petrece majoritatea timpului cu familia, atunci cand nu este la corporație",
      "Este o persoana foarte activa si organizată. Atunci cand nu este la birou, face activități cu fetele. Atunci" +
      "cand fetele sunt la scoala sau fac alte activități extracurriculare (pentru ca o mostenesc), îi place sa faca" +
      "diferite cursuri, pentru a se dezvolta in cat mai multe arii",
      "Îi place sa fie în pas cu tot ceea ce se întâmplă în jurul ei, de la tehnologie la tendințe politice"
    ],
    needs: [
      "Dorește un venit lunar mai mare, pentru a le asigura fetelor un trai cat mai decent.",
      "Are nevoia de provocari constante in viata ei."
    ]
  }

  userStories: UserStory[] = [
    new UserStory(
      1,
      "Iolanda dorește să-și deschidă o firma de consultanta financiara, însă are nevoie de " +
      "piese de mobilier și echipament. Aceasta nu dorește sa investească foarte mult în acestea, de aceea vrea sa " +
      "opteze pentru piese second hand, dar care sa fie același model."
    ),
    new UserStory(
      2,
      "Fiica cea mica, împreună cu pisica de rasa portocalie, nu sunt cele mai atente atunci cand vine vorba de" +
      " lucrurile fragile din casa, asa ca Iolanda este nevoită sa schimbe constant lucruri din apartament."
    ),
    new UserStory(
      3,
      "Iolanda a avut probleme cu unii oameni ce își vindeau propriile produse pe diverse site-uri, de aceea ar" +
      " dori sa ia legatura cu persoane juridice pe viitor, care sa acorde mai multă încredere"
    ),
    new UserStory(
      4,
      "Iolanda a văzut ce se intampla atunci cand compania la care ea lucrează vinde obiecte ce trebuie" +
      " înlocuite. Aceasta nu poate cumpara mai mult de 2 produse de cele mai multe ori, deși deseori ar fi dorit."
    )
  ]
  protected readonly Object = Object;
}
