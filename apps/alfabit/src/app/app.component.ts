import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ButtonComponent } from '@alfabit-alura/button';
import { InputComponent } from '@alfabit-alura/input';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ButtonComponent, InputComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'alfabit';
}
