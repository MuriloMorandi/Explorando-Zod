import { z } from 'zod';

const schema = z.array(
	z.object({
		nome: z
			.string()
			.trim()
			.min(3, { message: 'O nome tem que conter ao menos 3 caracteres' }),
		preco: z
			.number()
			.min(0.009, { message: 'O preço tem que ser maior que 0' }),
		quantidade: z
			.number()
			.min(0, { message: 'A quantidade tem que ser maior ou igual há 0' }),
		categoria: z
			.array(z.string().trim().min(1, 'Categoria Invalida'))
			.min(1, {
				message: 'O array de categorias tem que conter ao menos 1 item',
			}),
	}),
);

export { schema };
