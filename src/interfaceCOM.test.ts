import { VendedorComissionado } from './interface';

test('deve calcular o pagamento apenas com o fixo quando não há vendas', () => {
        const vendedor = new VendedorComissionado("Carlos", 1500, 5);
        expect(vendedor.calcularPagamentoTotal()).toBe(1500);
    });

    test('deve calcular o pagamento total incluindo a comissão sobre as vendas', () => {
        const vendedor = new VendedorComissionado("Carlos", 1500, 5);
        const pagamento = vendedor.calcularPagamentoTotal(20000);
        expect(pagamento).toBe(2500);
    });

    test('deve aplicar reajuste no fixo e refletir no cálculo com comissão', () => {
        const vendedor = new VendedorComissionado("Carlos", 1500, 5);
        vendedor.aplicarReajuste(20); 
        const pagamento = vendedor.calcularPagamentoTotal(20000);
        expect(pagamento).toBe(2800); 
    });