interface ContratoTrabalho {
    aplicarReajuste(percentual: number): void;
    calcularPagamentoTotal(valorVendas?: number): number;
}

class FuncionarioCLT implements ContratoTrabalho {
    nome: string;
    private salarioMensal: number;

    constructor(nome: string, salarioMensal: number) {
        this.nome = nome;
        this.salarioMensal = salarioMensal;
    }

    aplicarReajuste(percentual: number): void {
        const aumento = this.salarioMensal * (percentual / 100);
        this.salarioMensal += aumento;
        console.log(`[CLT] Reajuste de ${percentual}% aplicado para ${this.nome}. Novo salário: R$${this.salarioMensal.toFixed(2)}`);
    }

    calcularPagamentoTotal(): number {
        return this.salarioMensal;
    }
}

class VendedorComissionado implements ContratoTrabalho {
    nome: string;
    private salarioFixo: number;
    private comissaoPercentual: number;

    constructor(nome: string, salarioFixo: number, comissaoPercentual: number) {
        this.nome = nome;
        this.salarioFixo = salarioFixo;
        this.comissaoPercentual = comissaoPercentual;
    }

    aplicarReajuste(percentual: number): void {
        const aumento = this.salarioFixo * (percentual / 100);
        this.salarioFixo += aumento;
        console.log(`[Comissionado] Reajuste de ${percentual}% aplicado para ${this.nome}. Novo salário base: R$${this.salarioFixo.toFixed(2)}`);
    }

    calcularPagamentoTotal(valorVendas?: number): number {
        let valorDaComissao = 0;

        if (valorVendas && valorVendas > 0) {
            valorDaComissao = valorVendas * (this.comissaoPercentual / 100);
        }
        
        return this.salarioFixo + valorDaComissao;
    }
}

export { FuncionarioCLT, VendedorComissionado };