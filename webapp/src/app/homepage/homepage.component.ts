import { Component } from '@angular/core';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutComponent } from './about/about.component';
import { ListTshirtComponent } from './list-tshirt/list-tshirt.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    IntroductionComponent,
    AboutComponent,
    ListTshirtComponent
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
