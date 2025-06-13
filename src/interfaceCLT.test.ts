import { FuncionarioCLT } from './interface';

    test('deve calcular o pagamento total corretamente com o salário inicial', () => {
        const funcionario = new FuncionarioCLT("Ana", 5000);
        const pagamento = funcionario.calcularPagamentoTotal();
        expect(pagamento).toBe(5000);
    });

    test('deve aplicar o reajuste e calcular o novo pagamento total', () => {
        const funcionario = new FuncionarioCLT("Ana", 5000);
        funcionario.aplicarReajuste(10);
    expect(funcionario.calcularPagamentoTotal()).toBe(5500);
});