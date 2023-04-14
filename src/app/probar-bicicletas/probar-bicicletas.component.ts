import { Component, Renderer2 } from '@angular/core';
import { Bicicleta } from '../model/bicicleta';

@Component({
	selector: 'app-probar-bicicletas',
	templateUrl: './probar-bicicletas.component.html',
	styleUrls: ['./probar-bicicletas.component.css']
})
export class ProbarBicicletasComponent {
	// for adding the canvas
	// taken from: https://www.leonelngande.com/angular-dynamically-create-a-div-give-it-an-id-and-append-it-to-the-body-element/
	constructor(private renderer: Renderer2) {}

	bycicle: Bicicleta = new Bicicleta();
	cambioVelocidad: number = 1;

	
	drawBycicle(): void {
		this.bycicle.draw(this.renderer);
	}
	
	// he tenido que hacer esto por que si ponía solo "bycicle" no se actualizaban los valores
	public get bycicleString(): string {
		return this.bycicle.toString();
	}
}
