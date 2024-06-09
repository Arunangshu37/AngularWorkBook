import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'app-spin-wheel',
	templateUrl: './spin-wheel.component.html',
	styleUrl: './spin-wheel.component.scss'
})
export class SpinWheelComponent {

	@ViewChild('wheel') public wheel!: ElementRef;
	public disableForceStopButton: boolean = true;
	public disableSpinWheelButton: boolean = false;

	private counter: number = 2360;
	private startRotating: boolean = false;
	private forceStopWheel: boolean = false;

	public spinWheel(): void {
		this.startRotating = !this.startRotating;
		if (!this.startRotating) {
			return
		}
		this.disableForceStopButton = false;
		this.disableSpinWheelButton = true;
		this.forceStopWheel = false;
		// 1.  get the random value of length(x) between a defined range say 70 - 150
		const length = 60 + Math.floor((Math.random() * 100) % 80);

		// 2. create an array of length(x) full of random numbers/degrees between 10 to 360 
		this.counter = length;
		const degrees: number[] = [];
		do {
			degrees.push(Math.floor((Math.random() * 100)) % 360);
			this.counter--;
		} while (this.counter !== 0);

		// 3. set the interval to rotate the wheel based on the array of degrees   
		let tempDegree = degrees[this.counter]
		const callback = () => {
			this.counter++;
			if (this.counter >= length || this.forceStopWheel) {
				this.stopWheel();
				return;
			}
			tempDegree += degrees[this.counter]
			this.wheel.nativeElement.style.transform = `rotate(${tempDegree}deg)`
			setTimeout(callback, this.counter * 2)
		}
		setTimeout(callback, 10);
	}

	public stopWheel(): void {
		this.forceStopWheel = true;
		this.disableForceStopButton = true;
		this.disableSpinWheelButton = false;
		this.counter = 0;
		this.startRotating = false;
	}
}
