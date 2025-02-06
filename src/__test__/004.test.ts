import { describe, expect, test } from "@jest/globals";
import { schema } from "../004";

describe("Validação de Array", () => {
  test.each([
    [["teste"], ["teste"]],
    [Array(5).fill("teste"), Array(5).fill("teste")],
    [["teste ", " teste ", " teste"], ["teste", "teste", "teste"]],
  ])("Deve validar corretamente o Array %s", (input, expected) => {
    const result = schema.safeParse(input);
    expect(result.success).toBe(true);
    expect(result.data).toMatchObject(expected);
  });

  test.each([
    [[], 'O array tem que conter ao menos 1 item'],
    [["abc", ""], 'Todos os itens do array tem que conter ao menos 1 carácter'],
    [[""], 'Todos os itens do array tem que conter ao menos 1 carácter'],
    [Array(6).fill("teste"), 'O array tem que conter no máximo 5 itens'],
    [["abc", 1], 'Todos os itens do array tem que ser do tipo string'],
  ])("Deve falhar para o Array %s", (input, expectedError) => {
    const result = schema.safeParse(input);
    expect(result.success).toBe(false);

    if (!result.success)
    {
      expect(result.error.issues[0].message).toBe(expectedError);
    }
  });
});