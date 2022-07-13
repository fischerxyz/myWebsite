import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { NavbarComponent } from './main/navbar/navbar.component';

import { PixelventureComponent } from './pixelventure/pixelventure.component';
import { SectionComponent } from './pixelventure/section/section.component';
import { SocialComponent } from './pixelventure/social/social.component';
import { TechstackComponent } from './pixelventure/techstack/techstack.component';
import { SocialBarComponent } from './main/social-bar/social-bar.component';
import { AboutmeComponent } from './main/aboutme/aboutme.component';
import { ResumeComponent } from './main/resume/resume.component';
import { LoaderComponent } from './main/loader/loader.component';
import { SkillsComponent } from './main/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,

    MainComponent,
    NavbarComponent,
    SocialBarComponent,
    AboutmeComponent,
    ResumeComponent,
    LoaderComponent,
    SkillsComponent,

    PixelventureComponent,
    SectionComponent,
    SocialComponent,
    TechstackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
