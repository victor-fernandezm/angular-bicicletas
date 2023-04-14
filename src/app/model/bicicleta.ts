export class Bicicleta {
    private _color: string = "black";
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

    private canvas?: HTMLCanvasElement;

    acelerar(velocidad: number): void {
        this._velocidad += velocidad;
    }

    frenar(velocidad: number): void {
        this._velocidad -= velocidad;
    }

    public toString(): string {
        return 'Bicicleta {color: "' + this.color + '", marca: "' + this.marca + '", velocidad: ' + this.velocidad + ', piñones: ' + this.piniones + ', platos: ' + this.platos + ', electrica: ' + this.electrica + '}';
    }


    draw(renderer: any) {
        if (this.canvas === undefined) {
            this.canvas = renderer.createElement("canvas") as HTMLCanvasElement;
            // this.canvas.style.display = 'none';
            this.canvas.width = 200;
            this.canvas.height = 100;
            renderer.appendChild(document.body, this.canvas);
        }

        let ctx: CanvasRenderingContext2D = this.canvas?.getContext('2d') as CanvasRenderingContext2D;
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(50 - 2.5, 30);
        ctx.lineTo(100 + 2.5, 30);
        ctx.moveTo(50, 30);
        ctx.lineTo(75 + 2.5, 60);
        ctx.moveTo(100, 30);
        ctx.lineTo(75 - 2.5, 60);
        ctx.moveTo(50, 30);
        ctx.lineTo(25 + 2.5, 60);
        ctx.moveTo(25, 60);
        ctx.lineTo(75 + 2.5, 60);
        ctx.moveTo(100, 30);
        ctx.lineTo(110, 60);
        ctx.moveTo(100, 30);
        ctx.lineTo(95, 15);
        ctx.stroke();
        ctx.strokeStyle = "#444";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(25, 60, 20, 0, 360);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(110, 60, 20, 0, 360);
        ctx.stroke();
        if (this.electrica) {
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(90, 35);
            ctx.lineTo(75, 50);
            ctx.stroke();
        }
    }
}