import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	currentPage = 1;

	images = [
		{
			title: 'Beautiful beach',
			url:
				'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
		},
		{
			title: 'At the beach',
			url:
				'https://images.unsplash.com/photo-1523538290088-51e3e7d1c00d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
		},
		{
			title: 'Palmtree at the beach',
			url:
				'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
		},
		{
			title: 'Waves at the beach',
			url:
				'https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
		}
	];
}
