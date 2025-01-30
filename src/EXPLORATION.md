# Testes e Exemplos com Zod

## Sumário
1. [Validação de String](#1-validação-de-string)
2. [Validação de Números](#2-validação-de-números)
3. [Validação de Objetos](#3-validação-de-objetos)
4. [Validação de Array](#4-validação-de-array)
5. [Validação de array de objetos](#5-validação-de-array-de-objetos)

---

## 1. Validação de String 🚧 **Em progresso**  
Crie um esquema que valide uma string:

- Deve ser uma string
- Não pode ser uma string vazia
- Deve ter no máximo 25 caracteres

[Schema](src/001.ts)  
[Test](src/__test__/001.test.ts)

---

## 2. Validação de Números 🚧 **Em progresso**  
Crie um esquema que valide um número:

- Deve ser uma número
- Deve ser um número positivo.

[Schema](src/002.ts)  
[Test](src/__test__/002.test.ts)

---

## 3. Validação de objeto 🚧 **Em progresso**  
Crie um esquema que valide um objeto:

Propriedades do Objeto:
- `nome` (string, obrigatório)
- `idade` (número, maior ou igual a 18)
- `email` (deve ser um email válido)
- `apelido` (opcional, mas se fornecido deve ser uma string com no mínimo 2 caracteres)

[Schema](src/003.ts)  
[Test](src/__test__/003.test.ts)

---

## 4. Validação de array 🚧 **Em progresso**  
Crie um esquema que valide um array de strings contendo no mínimo 3 itens e no máximo 5.

[Schema](src/004.ts)  
[Test](src/__test__/004.test.ts)

>**Observação:** Garantir nos testes que o array possua apenas string.

---

## 5. Validação de array de objetos 🚧 **Em progresso**  
Crie um esquema para validar um array de objetos. 

Propriedades do objeto:
- `nome` (string com pelo menos 3 caracteres)
- `preco` (número, positivo maior que zero)
- `quantidade`: (número, inteiro positivo)
- `categoria`: (array de string contendo no mínimo 1 item)

[Schema](src/005.ts)  
[Test](src/__test__/005.test.ts)