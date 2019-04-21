
export class Cardapio {
    id:number;
    categorias: Categoria[];
}

export class Categoria {
    ordem: number;
    nome: string;
    urlImagem: string;
    itens: ItemCardapio[];
    observacao: string;
}

export class ItemCardapio {
    id: number;
    nome: string;
    descricao: string;
    urlImagem: string;
    preco: number;
}