import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	currentPage = 0;

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
		},
		{
			title: 'Beautiful trees',
			url:
				'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
		},
		{
			title: 'Curly tree',
			url:
				'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
		},
		{
			title: 'Sunshine at the beach',
			url:
				'https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
		},
		{
			title: 'Sunflower',
			url:
				'https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
		},
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
		},
		{
			title: 'Beautiful trees',
			url:
				'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
		},
		{
			title: 'Curly tree',
			url:
				'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
		},
		{
			title: 'Sunshine at the beach',
			url:
				'https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
		},
		{
			title: 'Sunflower',
			url:
				'https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
		},
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
		},
		{
			title: 'Beautiful trees',
			url:
				'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
		},
		{
			title: 'Curly tree',
			url:
				'https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
		},
		{
			title: 'Sunshine at the beach',
			url:
				'https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
		},
		{
			title: 'Sunflower',
			url:
				'https://images.unsplash.com/photo-1504567961542-e24d9439a724?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
		}
	];

	checkWindowIndex(index: number) {
		return Math.abs(this.currentPage - index) < 5;
	}
}
