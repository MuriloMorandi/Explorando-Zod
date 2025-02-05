import { z } from "zod";

const schema = z.object({
    nome: z.string().trim().min(2).max(150),
    idade: z.number().min(0).max(150),
    email: z.string().email(),
    apelido: z.string().trim().min(2).max(25),
});

export {schema};