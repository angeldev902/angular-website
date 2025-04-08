import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { BlockUIModule } from 'ng-block-ui';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, BlockUIModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'angular-website';
}
