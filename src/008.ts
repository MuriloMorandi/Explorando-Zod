import { z } from "zod";

const schemaEmail = z.object({
    tipo: z.literal("email"),
    email: z.string().email(),
    assunto: z.string().trim().min(1).max(25),
    messagem: z.string().trim().min(1).max(125)
})

const schemaSMS = z.object({
    tipo: z.literal("sms"),
    numeroTelefone: z.string().regex(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, {
        message: 'Número de telefone inválido',
    }),
    messagem: z.string().trim().min(1).max(125)
})

const schema = z.discriminatedUnion("tipo", [
    schemaEmail,
    schemaSMS,
])

export {schema}