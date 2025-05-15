import { z } from 'zod';

const schema = z
	.array(
		z
			.string({
				message: 'Todos os itens do array tem que ser do tipo string',
			})
			.trim()
			.min(1, 'Todos os itens do array tem que conter ao menos 1 carácter'),
	)
	.min(1, 'O array tem que conter ao menos 1 item')
	.max(5, 'O array tem que conter no máximo 5 itens');

export { schema };
