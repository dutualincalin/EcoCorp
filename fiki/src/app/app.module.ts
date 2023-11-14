import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import {NgOptimizedImage} from "@angular/common";
import { TeamPageComponent } from './pages/team-page/team-page.component';
import {CardModule} from "primeng/card";
import { ProblemSolutionPageComponent } from './pages/problem-solution-page/problem-solution-page.component';
import { CompetitionPageComponent } from './pages/competition-page/competition-page.component';
import {MetricsPageComponent} from "./pages/metrics-page/metrics-page.component";
import {CostRevenuePageComponent} from "./pages/cost-revenue-page/cost-revenue-page.component";
import {ToolbarModule} from "primeng/toolbar";
import {SidebarModule} from "primeng/sidebar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { InterviewPageComponent } from './pages/interview-page/interview-page.component';
import { HttpClientModule } from '@angular/common/http';
import {ChartModule} from "primeng/chart";
import {FieldsetModule} from "primeng/fieldset";
import { WireframesPageComponent } from './pages/wireframes-page/wireframes-page.component';
import {GalleriaModule} from "primeng/galleria";

@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    TeamPageComponent,
    ProblemSolutionPageComponent,
    CompetitionPageComponent,
    MetricsPageComponent,
    CostRevenuePageComponent,
    InterviewPageComponent,
    WireframesPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    NgOptimizedImage,
    CardModule,
    ToolbarModule,
    SidebarModule,
    HttpClientModule,
    ChartModule,
    FieldsetModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
