import { z } from "zod";

const schema = z.array(z.object({
    nome: z.string().trim().min(3),
    preco: z.number().min(0),
    quantidade: z.number().min(1),
    categoria: z.array(z.string().trim().min(1)).min(1)
}));

export {schema};