import { z } from "zod";

const schema = z.array(z.object({
    nome: z.string().trim().min(3, { error: "O nome tem que conter ao menos 3 caracteres" }),
    preco: z.number().min(0.009, { error: "O preço tem que ser maior que 0" }),
    quantidade: z.number().min(0, { error: "A quantidade tem que ser maior ou igual há 0" }),
    categoria: z.array(z.string().trim().min(1, 'Categoria Invalida')).min(1, { error: "O array de categorias tem que conter ao menos 1 item" }),
}));

export {schema};