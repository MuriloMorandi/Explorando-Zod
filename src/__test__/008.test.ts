import { describe, expect, it } from "@jest/globals";
import { schema } from "../008";

describe("Validação de Estruturas Diferentes com Base em uma Chave", () => {
  describe('schemaEmail', () => {
    it('valida corretamente', () => {
      const data = {
        tipo: 'email',
        email: 'teste@exemplo.com',
        assunto: 'Assunto',
        messagem: 'Mensagem válida',
      }
      const parsed = schema.parse(data)
      expect(parsed).toEqual(data)
    })

    it('falha se o email for inválido', () => {
      const data = {
        tipo: 'email',
        email: 'email-invalido',
        assunto: 'Assunto',
        messagem: 'Mensagem válida',
      }
      expect(() => schema.parse(data)).toThrowError()
    })

    it('falha se o assunto for vazio', () => {
      const data = {
        tipo: 'email',
        email: 'teste@exemplo.com',
        assunto: '',
        messagem: 'Mensagem válida',
      }
      expect(() => schema.parse(data)).toThrowError()
    })

    it('falha se o assunto muito longo', () => {
      const data = {
        tipo: 'email',
        email: 'teste@exemplo.com',
        assunto: 'x'.repeat(126),
        messagem: 'Mensagem válida',
      }
      expect(() => schema.parse(data)).toThrowError()
    })

    it('falha se a mensagem for vazio', () => {
      const data = {
        tipo: 'email',
        email: 'teste@exemplo.com',
        assunto: 'Assunto',
        messagem: '',
      }
      expect(() => schema.parse(data)).toThrowError()
    })

    it('falha se a mensagem for muito longa', () => {
      const data = {
        tipo: 'email',
        email: 'teste@exemplo.com',
        assunto: 'Assunto',
        messagem: 'x'.repeat(126),
      }
      expect(() => schema.parse(data)).toThrowError()
    })
  })


  describe('schemaSMS', () => {
    it('valida corretamente um número de telefone válido', () => {
      const data = {
        tipo: 'sms',
        numeroTelefone: '(11) 91234-5678',
        messagem: 'Mensagem válida',
      }
      const parsed = schema.parse(data)
      expect(parsed).toEqual(data)
    })

    it('falha se o número de telefone for inválido', () => {
      const data = {
        tipo: 'sms',
        numeroTelefone: '12345',
        messagem: 'Mensagem válida',
      }
      expect(() => schema.parse(data)).toThrowError(/Número de telefone inválido/)
    })

    it('falha se a mensagem for vazia', () => {
      const data = {
        tipo: 'sms',
        numeroTelefone: '(11) 91234-5678',
        messagem: '',
      }
      expect(() => schema.parse(data)).toThrowError()
    })
  })
});
