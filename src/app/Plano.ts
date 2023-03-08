export class Plano {
    id: number;
    valor: number;
    nome: String;
    grupoId: number;
    ordem: number;

    constructor(id : number, valor : number, nome : String, grupoId : number, ordem : number) {
        this.id = id;
        this.valor = valor;
        this.nome = nome;
        this.grupoId = grupoId;
        this.ordem = ordem;
    }
}