import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent{
	public greetings!: string;
	public appName: string = 'Angular Scrapbook';
	public whatShouldLearningBe!: string

	public constructor(){
		this.greetings = this.constructGreeting();
	}

	private constructGreeting(): string {
		const currentDateTime = new Date();
		if(currentDateTime.getHours() >= 12 && currentDateTime.getHours() < 17 ){
			return "Good Afternoon!";
		}

		if(currentDateTime.getHours() >= 17 && (currentDateTime.getHours() <= 23 && currentDateTime.getMinutes() <=59) ) {
			return "Good Evening!";
		}
		return "Good Morning!";
	}
}
