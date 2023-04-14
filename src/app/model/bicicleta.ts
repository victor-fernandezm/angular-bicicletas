export class Bicicleta {
    private _color: string = "";
    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }
    
    private _marca: string = "";
    public get marca(): string {
        return this._marca;
    }
    public set marca(value: string) {
        this._marca = value;
    }

    private _velocidad: number = 0;
    public get velocidad(): number {
        return this._velocidad;
    }
    public set velocidad(value: number) {
        this._velocidad = value;
    }
    
    private _piniones: number = 0;
    public get piniones(): number {
        return this._piniones;
    }
    public set piniones(value: number) {
        this._piniones = value;
    }
    
    private _platos: number = 0;
    public get platos(): number {
        return this._platos;
    }
    public set platos(value: number) {
        this._platos = value;
    }
    
    private _electrica: boolean = false;
    public get electrica(): boolean {
        return this._electrica;
    }
    public set electrica(value: boolean) {
        this._electrica = value;
    }

    acelerar(velocidad: number): void {
        this._velocidad += velocidad;
    }

    frenar(velocidad: number): void {
        this._velocidad -= velocidad;
    }
    
    public toString(): string {
        return 'Bicicleta {color: "' + this.color + '", marca: "' + this.marca + '", velocidad: ' + this.velocidad + ', piñones: ' + this.piniones + ', platos: ' + this.platos + ', electrica: ' + this.electrica + '}';
    }
}