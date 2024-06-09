import { Component } from '@angular/core';

@Component({
	selector: 'app-fun',
	templateUrl: './widget.component.html',
	styleUrl: './widget.component.scss'
})
export class WidgetComponent {
	public widgets!: Map<string, string>;
	constructor() {	
		this.widgets = new Map([['Spin Wheel', './'], ['Z', './z'], ['cubes', 'rotatable-cube']]);
	}
	public getWidgets() : [string, string][] {
		return Array.from(this.widgets.entries());
	}
}
