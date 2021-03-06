import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutBarkComponent } from './about-bark/about-bark.component';
import { BasicIntroComponent } from './basic-intro/basic-intro.component';
import { HomeIntroComponent } from './home-intro/home-intro.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { MintSectionComponent } from './mint-section/mint-section.component';
import { TeamComponent } from './team/team.component';

const COMPONENTS = [
  AboutBarkComponent,
  BasicIntroComponent,
  HomeIntroComponent,
  RoadmapComponent,
  MintSectionComponent,
  TeamComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    TeamComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[COMPONENTS]
})
export class ComponentsModule { }
