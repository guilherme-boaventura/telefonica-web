export class Grupo {
    nome: String;
    ordem: number;
    id: number;

    constructor(id  : number, nome : String, ordem : number) {
        this.id = id;
        this.nome = nome;
        this.ordem = ordem;
    }
}