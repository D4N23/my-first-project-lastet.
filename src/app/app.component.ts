import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/main/home/home.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent, HomeComponent],
  template:`<app-navbar/>
            <app-home></app-home>
        <app-footer></app-footer>
            `

  ,
})
export class AppComponent {
  title = 'my-first-project-lastet.';
}
