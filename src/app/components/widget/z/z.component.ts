import { Block } from '../models/block.model';
import { Component } from '@angular/core';

@Component({
	selector: 'app-z',
	templateUrl: './z.component.html',
	styleUrl: './z.component.scss'
})
export class ZComponent {

	private elementMap: Map<string, boolean> = new Map();
	private counter: number = 0;
	private intervalId!: ReturnType<typeof setTimeout>;
	private zIndex: number = 0;
	public blocks!: Block[];

	public constructor(){
		this.blocks = [
			new Block('1', 'c-beige', 'block1'),
			new Block('2', 'c-teal','block2'),
			new Block('3', 'c-peru','block3'),
			new Block('4', 'c-azure','block4'),
		]	
	}

	public changeZIndex(blockId: string): void {
		const disabledItem = Array.from(this.elementMap.entries()).find((element: [string, boolean]) => element[1]);
		if (disabledItem) {
			const buttonId = disabledItem?.[0] as string;
			const partABlockId = buttonId.split('-')[1].replace('Button', '');
			document.getElementById(buttonId)?.removeAttribute('disabled')
			const newZIndex = Number(document.getElementById(blockId)?.style.zIndex) + 1;
			(document.getElementById(partABlockId) as HTMLElement).style.zIndex = newZIndex.toString();
			const block = this.blocks.find((block: Block) => block.id === blockId[0]) as Block;
			block.zIndex.partA = newZIndex;
			this.elementMap.set(buttonId, false);
			return;
		}
		const block = this.blocks.find((block: Block) =>blockId === `${block.id}2`)
		if(block){
			const newZIndex = ++this.zIndex;
			(document.getElementById(`${block.id}2`) as HTMLElement).style.zIndex = newZIndex.toString();
			block.zIndex.partB = newZIndex;
		}
	}

	public activatePushBackBehavior(event: MouseEvent): void {
		this.counter = 0;
		const parentElementId = (<HTMLElement>event.target).parentElement?.id as string;
		console.log('activation stared');
		this.intervalId = setInterval(() => {
			this.counter++;
			if (this.counter == 1) {
				document.getElementById(parentElementId.concat('Button'))?.setAttribute('disabled', 'true');
				this.elementMap.set(parentElementId.concat('Button'), true);
				clearInterval(this.intervalId);
			}
			console.log(this.counter);
		}, 1000);
	}

	public verifyActivation(): void {
		if (this.counter != 1) {
			clearInterval(this.intervalId);
			console.log('failed to activate due to not meeting activation criteria');
			this.counter = 0;
			return;
		}
	}
}