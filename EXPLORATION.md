# Testes e Exemplos com Zod

## Sumário
1. [Validação de String](#1-validação-de-string)
2. [Validação de Números](#2-validação-de-números)
3. [Validação de Objetos](#3-validação-de-objetos)
4. [Validação de Array](#4-validação-de-array)
5. [Validação de Array de Objetos](#5-validação-de-array-de-objetos)
6. [Validação de Enums](#6-validação-de-enums)
7. [Validação Encadeada](#7-validação-encadeada)
8. [Validação de Estruturas Diferentes com Base em uma Chave](#8-validação-de-estruturas-diferentes-com-base-em-uma-chave)

---

## 1. Validação de String ✅
Crie um esquema que valide uma string:

- Deve ser uma string
- Não pode ser uma string vazia
- Deve ter no máximo 25 caracteres

[Schema](src/001.ts)  
[Test](src/__test__/001.test.ts)

---

## Validação de Números ✅
Crie um esquema que valide um número:

- Deve ser uma número
- Deve ser um número positivo.

[Schema](src/002.ts)  
[Test](src/__test__/002.test.ts)

---

## 3. Validação de Objeto 🚧
Crie um esquema que valide um objeto:

Propriedades do Objeto:
- `nome` (string, obrigatório)
- `idade` (número, maior ou igual a 18)
- `email` (deve ser um email válido)
- `apelido` (opcional, mas se fornecido deve ser uma string com no mínimo 2 caracteres)

[Schema](src/003.ts)  
[Test](src/__test__/003.test.ts)

---

## 4. Validação de Array 🚧
Crie um esquema que valide um array de strings contendo no mínimo 3 itens e no máximo 5.

[Schema](src/004.ts)  
[Test](src/__test__/004.test.ts)

>**Observação:** Garantir nos testes que o array possua apenas string.

---

## 5. Validação de Array de Objetos 🚧
Crie um esquema para validar um array de objetos. 

Propriedades do objeto:
- `nome` (string com pelo menos 3 caracteres)
- `preco` (número, positivo maior que zero)
- `quantidade`: (número, inteiro positivo)
- `categoria`: (array de string contendo no mínimo 1 item)

[Schema](src/005.ts)  
[Test](src/__test__/005.test.ts)

---

## 6. Validação de Enums 🚧
Defina um enum de funções (`Admin`, `User`, `Guest`).  
Crie um esquema para validar um objeto com:
- `username` (string)
- `role` (valores válidos do enum)

Teste com dados válidos e inválidos.

[Schema](src/006.ts)  
[Test](src/__test__/006.test.ts)

---

## 7. Validação Encadeada 🚧
Crie um schema com validação condicional.

>**Observação:** Realizar fazendo uso a `.refine()` para validações condicionais

- `nome` (string com pelo menos 5 caracteres)
- `email` (string, email válido)
- `linguagemDeProgramacaoPrincipal` (string com pelo menos 2 caracteres)
- `nivel` (enum, [`junior`, `pleno` , `senior`])
- `experienciaEmAnos` (número, mínimo 0 e máximo 30)
- `tecnologias` (array de string com pelo menos um item ) 

- Se for `senior`, precisa ter:
    - Tempo de experiência (mínimo 5 anos)
    - Pelo menos 2 tecnologias avançadas

- Se for `pleno`, precisa ter:
    - Tempo de experiência (mínimo 2 anos)
    - Pelo menos 1 tecnologias avançadas

[Schema](src/007.ts)  
[Test](src/__test__/007.test.ts)

## 8. Validação de Estruturas Diferentes com Base em uma Chave 🚧
Crie um schema para validação de objeto com base em uma chave `tipo`

>**Observação:** Realizar fazendo uso a `.discriminatedUnion()` para validar confomer o tipo

Requisitos do objeto de email
- `tipo` "email"
- `email` (string, email válido)
- `assunto` (string, mínimo 1 e maximo 25 caracteres)
- `mensagem` (string, mínimo 1 e maximo 125 caracteres)

Requisitos do objeto de sms
- `tipo` "sms"
- `numeroTelefone` (string, somente números, maximo 25)
- `mensagem` (string, mínimo 1 e maximo 125 caracteres)

[Schema](src/008.ts)  
[Test](src/__test__/008.test.ts)