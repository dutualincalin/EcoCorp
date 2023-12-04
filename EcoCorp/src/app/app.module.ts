import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/button";
import { IntroPageComponent } from './pages/fiki/intro-page/intro-page.component';
import {LocationStrategy, HashLocationStrategy, NgOptimizedImage} from "@angular/common";
import { TeamPageComponent } from './pages/fiki/team-page/team-page.component';
import {CardModule} from "primeng/card";
import { ProblemSolutionPageComponent } from './pages/fiki/problem-solution-page/problem-solution-page.component';
import { CompetitionPageComponent } from './pages/fiki/competition-page/competition-page.component';
import {MetricsPageComponent} from "./pages/fiki/metrics-page/metrics-page.component";
import {CostRevenuePageComponent} from "./pages/fiki/cost-revenue-page/cost-revenue-page.component";
import {ToolbarModule} from "primeng/toolbar";
import {SidebarModule} from "primeng/sidebar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { InterviewPageComponent } from './pages/fiki/interview-page/interview-page.component';
import { HttpClientModule } from '@angular/common/http';
import {ChartModule} from "primeng/chart";
import {FieldsetModule} from "primeng/fieldset";
import { WireframesPageComponent } from './pages/fiki/wireframes-page/wireframes-page.component';
import {GalleriaModule} from "primeng/galleria";
import { UserExperiencePageComponent } from './pages/fiki/user-experience-page/user-experience-page.component';
import { AppRoutingModule } from './app-routing.module';
import {FikiComponent} from "./pages/fiki/fiki.component";
import {RouterOutlet} from "@angular/router";
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import {OverlayPanelModule} from "primeng/overlaypanel";
import { ValidationPageComponent } from './pages/fiki/validation-page/validation-page.component';

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
    WireframesPageComponent,
    UserExperiencePageComponent,
    FikiComponent,
    LandingPageComponent,
    ValidationPageComponent,
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
        GalleriaModule,
        AppRoutingModule,
        RouterOutlet,
        OverlayPanelModule
    ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})

export class AppModule { }
