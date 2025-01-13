import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PaperopoliComponent} from './paperopoli/paperopoli.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PaperopoliComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angptular';
}
