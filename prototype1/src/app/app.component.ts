import { Component } from '@angular/core';
import { resizeHeader } from '../assets/js/header.js'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
	
	constructor(private router : Router) {
	}

	onAnchorClick() {
		console.log('test');
		this.router.navigateByUrl('/home');
		resizeHeader();
	}
	
	onActivate(event) {
		resizeHeader();
	}
}

