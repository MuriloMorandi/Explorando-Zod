import { z } from "zod";

const schema = z.object({
    nome: z.string({ error: "O nome deve ser uma string" })
        .trim()
        .nonempty("O campo nome é obrigatório")
        .min(2, 'O nome tem que conter ao menos 2 caracters')
        .max(150, 'O nome tem que conter no máximo 150 caracteres'),
    idade: z.number({ error: "O campo idade deve ser um número" })
        .min(0, 'O campo idade não pode ser menor que 0')
        .max(150, 'O campo idade não pode ser maior que 150'),
    email: z.email('O email informado não é válido'),
    apelido: z.string({ error: "O apelido deve ser uma string" })
        .trim()
        .min(2, 'O apelido tem que conter ao menos 2 caracters')
        .max(25, 'O apelido tem que conter no máximo 25 caracteres')
        .optional(),
});

export {schema};