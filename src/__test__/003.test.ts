import { describe, expect, test } from "@jest/globals";
import { schema } from "../003";

describe("Validação de Objetos", () => {
  test.each([
    [
      {
        nome: "Nome Teste",
        idade: 1,
        email: "nome.teste@teste.com",
        apelido: "apelido",
      },
      {
        nome: "Nome Teste",
        idade: 1,
        email: "nome.teste@teste.com",
        apelido: "apelido",
      }
    ],
    [
      {
        nome: "Nome Teste ",
        idade: 2,
        email: "nome.teste@teste.com",
      },
      {
        nome: "Nome Teste",
        idade: 2,
        email: "nome.teste@teste.com",
      }
    ],
    [
      {
        nome: "Nome Teste ",
        idade: 2,
        email: "nome.teste@teste.com",
        apelido: "apelido ",
      },
      {
        nome: "Nome Teste",
        idade: 2,
        email: "nome.teste@teste.com",
        apelido: "apelido",
      }
    ],
  ])("Deve validar corretamente o objeto %s", (input, expected) => {
    const result = schema.safeParse(input);
    expect(result.success).toBe(true);
    expect(result.data).toMatchObject(expected);
  });

  test.each([
    [
      {
        nome: "N",
        idade: 1,
        email: "nome.teste@teste.com",
        apelido: "apelido",
      },
      "O nome tem que conter ao menos 2 caracters"
    ],
    [
      {
        nome: "",
        idade: 1,
        email: "nome.teste@teste.com",
        apelido: "apelido",
      },
      "O campo nome é obrigatório"
    ],
    [
      {
        nome: "a".repeat(151),
        idade: 1,
        email: "nome.teste@teste.com",
        apelido: "apelido",
      },
      "O nome tem que conter no máximo 150 caracteres"
    ],
    [
      {
        nome: "Nome Teste",
        idade: '1',
        email: "nome.teste@teste.com",
        apelido: "apelido",
      },
      "O campo idade deve ser um número"
    ],
    [
      {
        nome: "Nome Teste",
        idade: -1,
        email: "nome.teste@teste.com",
        apelido: "apelido",
      },
      "O campo idade não pode ser menor que 0"
    ],
    [
      {
        nome: "Nome Teste",
        idade: 153,
        email: "nome.teste@teste.com",
        apelido: "apelido",
      },
      "O campo idade não pode ser maior que 150"
    ],
    [
      {
        nome: "Nome Teste",
        idade: 5,
        email: "nome.teste@",
        apelido: "apelido",
      },
      "O email informado não é válido"
    ],
    [
      {
        nome: "Nome Teste",
        idade: 5,
        email: "nome.teste@",
        apelido: "apelido",
      },
      "O email informado não é válido"
    ],
    [
      {
        nome: "Nome Teste",
        idade: 5,
        email: "nome.teste@",
        apelido: "",
      },
      "O email informado não é válido"
    ],
    [
      {
        nome: "Nome Teste",
        idade: 5,
        email: "@teste.com",
        apelido: "",
      },
      "O email informado não é válido"
    ],
    [
      {
        nome: "Nome Teste",
        idade: 5,
        email: "teste@teste.com",
        apelido: "a",
      },
      "O apelido tem que conter ao menos 2 caracters"
    ],
    [
      {
        nome: "Nome Teste",
        idade: 5,
        email: "teste@teste.com",
        apelido: "a".repeat(27),
      },
      "O apelido tem que conter no máximo 25 caracteres"
    ],
    
  ])("Deve falhar para o objeto %s", (input, expectedError) => {
    const result = schema.safeParse(input);
    expect(result.success).toBe(false);
    if (!result.success)
    {
      expect(result.error.issues[0].message).toBe(expectedError);
    }
  });
});