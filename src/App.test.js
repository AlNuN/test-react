import React from 'react';
import { render, screen } from '@testing-library/react';
import App, { calcularNovoSaldo } from './App';

describe('Componente principal', () => {
  describe('Quando eu abro o app do banco', () => {
    it('O nome é exibido', () => {
      render(<App />);
      expect(screen.getByText('ByteBank')).toBeInTheDocument();
    });
    it('O saldo é exibido', () => {
      render(<App />);
      expect(screen.getByText('Saldo:')).toBeInTheDocument();
    });
    it('O botão de realizar transação é exibido', () => {
      render(<App />);
      expect(screen.getByText('Realizar operação')).toBeInTheDocument();
    });
  });
  describe('Quando eu realizo uma transação', () => {
    it('que é um saque, o valor vai diminuir', () => {
      const saldo = 150;
      const valores = {
        transacao: 'saque',
        valor: 50
      };
      const novoSaldo = calcularNovoSaldo(valores, saldo);
      expect(novoSaldo).toBe(100);
    });
    it('que é um saque maior que meu saldo, ele fica negativo', () => {
      const saldo = 10;
      const valores = {
        transacao: 'saque',
        valor: 50
      };
      const novoSaldo = calcularNovoSaldo(valores, saldo);
      expect(novoSaldo).toBe(-40);
    });
  });
});
