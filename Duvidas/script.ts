interface Carro {
    nome: string;

    andar() : string;
}


class Honda implements Carro{
    nome = "honda";

    andar(): string {
        return  "alguma coisa"
    }
}