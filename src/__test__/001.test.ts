import { describe, expect, it, test } from "@jest/globals";
import { schema } from "../001";

describe("Validação de Strings", () => {
  test.each([
    ["Nome Teste", "Nome Teste"],
    ["  Nome Teste  ", "Nome Teste"],
    ["Espaços    no meio", "Espaços    no meio"],
  ])("Deve validar corretamente a string '%s'", (input, expected) => {
    const result = schema.safeParse(input);
    expect(result.success).toBe(true);
    expect(result.data).toBe(expected);
  });

  test.each([
      [1, "A string não é válida"],
      ["", "A string não pode estar vazia"],
      ["     ", "A string não pode estar vazia"],
      ["a".repeat(26), "A string deve ter no máximo 25 caracteres"],
  ])("Deve falhar para a string inválida '%s'", (input, expectedError) => {
    const result = schema.safeParse(input);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe(expectedError);
    }
  });
});
