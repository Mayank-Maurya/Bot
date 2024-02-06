import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage/homepage.component';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './homepage/introduction/introduction.component';
import { AboutComponent } from './homepage/about/about.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
@NgModule({
  declarations: [
    HomepageComponent,
    AppComponent,
    IntroductionComponent,
    AboutComponent,
    ToolbarComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [], // Specify the initial component to load
})
export class AppModule {}
