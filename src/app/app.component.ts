import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './modules/core/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true, // AppComponent jest standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, HeaderComponent], // Importowanie HeaderComponent
})
export class AppComponent {}
