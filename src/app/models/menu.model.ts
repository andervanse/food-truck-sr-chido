
export class Menu {
    id:number;
    categorias: Categoria[];
}

export class Categoria {
    ordem: number;
    nome: string;
    urlImagem: string;
    itens: ItemMenu[];
    observacao: string;
}

export class ItemMenu {
    nome: string;
    descricao: string;
    urlImagem: string;
    preco: number;
}