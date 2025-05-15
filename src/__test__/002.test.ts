import { describe, expect, test } from '@jest/globals';
import { schema } from '../002';

describe('Validação de Números', () => {
	test.each([
		[0, 0],
		[1, 1],
		[10, 10],
		[99.99, 99.99],
	])(
		"Deve validar corretamente o número positivo ou zero '%s'",
		(input, expected) => {
			const result = schema.safeParse(input);
			expect(result.success).toBe(true);
			expect(result.data).toBe(expected);
		},
	);

	test.each([
		[-1, 'O número deve ser maior ou igual a zero'],
		[-100.5, 'O número deve ser maior ou igual a zero'],
		['string', 'O valor deve ser um número válido'],
		[null, 'O valor deve ser um número válido'],
	])("Deve falhar para o número inválido '%s'", (input, expectedError) => {
		const result = schema.safeParse(input);
		expect(result.success).toBe(false);
		if (!result.success) {
			expect(result.error.issues[0].message).toBe(expectedError);
		}
	});
});
