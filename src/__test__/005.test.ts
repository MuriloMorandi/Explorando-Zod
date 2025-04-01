import { describe, expect, test } from "@jest/globals";
import { schema } from "../005";

describe("Validação de array de objetos", () => {
  test.each([
    [
      [{
        nome: "Produto A",
        preco: 10.5,
        quantidade: 5,
        categoria: ["Eletrônico", "Portátil"]
      },
      {
        nome: "Produto B",
        preco: 20.99,
        quantidade: 1,
        categoria: ["Casa"]
      }],
      [{
        nome: "Produto A",
        preco: 10.5,
        quantidade: 5,
        categoria: ["Eletrônico", "Portátil"]
      },
        {
          nome: "Produto B",
          preco: 20.99,
          quantidade: 1,
          categoria: ["Casa"]
        }]
    ]
  ]
  )("Deve validar corretamento o Array de Objeto %s", ( input, expected) =>{
    const result = schema.safeParse(input);
    expect(result.success).toBe(true);
    expect(result.data).toMatchObject(expected);
  })

  test.each([
    [
      'O array tenha um objeto com menos de 3 caracteres',
      [{
        nome: "A",
        preco: 10.5,
        quantidade: 5,
        categoria: ["Eletrônico", "Portátil"]
      },
        {
          nome: "Produto B",
          preco: 20.99,
          quantidade: 1,
          categoria: ["Casa"]
        }],
      "O nome tem que conter ao menos 3 caracteres"
    ],
    [
      'O array tenha um objeto com o preço menor que 0',
          [{
            nome: "Abcd",
            preco: 0,
            quantidade: 5,
            categoria: ["Eletrônico", "Portátil"]
          },
            {
              nome: "Produto B",
              preco: -10,
              quantidade: 1,
              categoria: ["Casa"]
            }],
          "O preço tem que ser maior que 0"
    ],
    [
      'O array tenha um objeto com a quantidade menor que 0',
          [{
            nome: "Produto",
            preco: 10.5,
            quantidade: 5,
            categoria: ["Eletrônico", "Portátil"]
          },
            {
              nome: "Produto B",
              preco: 10,
              quantidade: -11,
              categoria: ["Casa"]
            }],
          "A quantidade tem que ser maior ou igual há 0"
    ],
    [
      'O array tenha um objeto com o array de categoria vazia',
      [{
            nome: "Produto",
            preco: 10.5,
            quantidade: 5,
            categoria: ["Eletrônico", "Portátil"]
        },
        {
          nome: "Produto D",
          preco: 10,
          quantidade: 11,
          categoria: []
        }],
        "O array de categorias tem que conter ao menos 1 item"
    ],
    [
      'O array tenha um objeto com o array de categorias com uma string vazia',
      [{
            nome: "Produto",
            preco: 10.5,
            quantidade: 5,
            categoria: ["Eletrônico", "Portátil"]
        },
        {
          nome: "Produto D",
          preco: 10,
          quantidade: 11,
          categoria: [""]
        }],
        "Categoria Invalida"
    ],
  ])("Deve falhar caso: %s", (_, input, expectedError) =>{
    const result = schema.safeParse(input);
    expect(result.success).toBe(false);
    
    if (!result.success) {
      expect(result.error.issues[0].message).toBe(expectedError);
    }
  })
});