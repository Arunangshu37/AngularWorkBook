import { ZIndex } from "./z-index.model";

export class Block {
	constructor(public id: string, public colorClass: string, public name:string, public zIndex: ZIndex = new ZIndex()){}
}