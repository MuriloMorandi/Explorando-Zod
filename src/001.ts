import { z } from 'zod';

const schema = z
	.string({
		message: 'A string não é válida',
	})
	.trim()
	.min(1, 'A string não pode estar vazia')
	.max(25, 'A string deve ter no máximo 25 caracteres');

export { schema };
