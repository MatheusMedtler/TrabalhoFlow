export class Animal {
    private nome:string;
    protected especie:string;
    protected fome:number;
    protected sede:number;

   public constructor(nomeAnimal:string,especie:string,fome:number,sede:number){
        this.nome = nomeAnimal
        this.especie = especie
        this.fome = fome
        this.sede = sede
    }
    public buscarRecurso():void{
        console.log("Buscou Recursos")
    }

    public emitirSom():void{
        console.log("Emitiu o som")
    }
    public mover():void{
        console.log("Se moveu")
    }
    
}


