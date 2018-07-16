import { Component } from '@angular/core';
import { resizeHeader } from '../assets/js/header.js'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
	onActivate(event) {
		resizeHeader();
	}
}
