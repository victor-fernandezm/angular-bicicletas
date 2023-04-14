import { Component } from '@angular/core';
import { Bicicleta } from '../model/bicicleta';

@Component({
	selector: 'app-probar-bicicletas',
	templateUrl: './probar-bicicletas.component.html',
	styleUrls: ['./probar-bicicletas.component.css']
})
export class ProbarBicicletasComponent {

	bycicle: Bicicleta = new Bicicleta();
	cambioVelocidad: number = 1;
	
	// he tenido que hacer esto por que si ponía solo "bycicle" no se actualizaban los valores
	public get bycicleString(): string {
		return this.bycicle.toString();
	}
}
