import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-widget-rotatable-cube',
  templateUrl: './widget-rotatable-cube.component.html',
  styleUrl: './widget-rotatable-cube.component.scss'
})

export class WidgetRotatableCubeComponent implements AfterViewInit{
	@Input() public cubeContainerRef!: HTMLElement;
	@Input() public faceContents: string[] = [];
	@Input() public dimension!: number;
	@Input() public whatShouldLearningBe!: string;

	@ViewChild('cube') public cube!: ElementRef;

	public mouseDown = false;
	public ngAfterViewInit(): void {
		document.querySelector('body')?.classList.add('no-user-select')
	}
	
    public rotateCube(mouseEvent: MouseEvent): void {
		if (this.mouseDown) {
			this.cube.nativeElement.style.transform = `rotateX(${-mouseEvent.y *0.75}deg) rotateY(${mouseEvent.x *0.75 }deg)  translateZ(0px)`;
		}
    }

	public handleMouseUp() {
		this.cube.nativeElement?.classList.toggle('cube-animator');
		this.mouseDown = false;
	}
	
	public handleMouseDown() {
		this.cube.nativeElement?.classList.toggle('cube-animator');
		this.mouseDown = true;
	}
}
