import { z } from "zod";

const schema = z.object({
    nome: z.string().trim().min(5),
    email: z.string().email(),
    linguagemDeProgramacaoPrincipal: z.string().trim().min(2),
    nivel: z.enum(["junior", "pleno", "senior"]),
    experienciaEmAnos: z.number().int().min(0).max(30),
    tecnologias: z.array(z.string().trim().min(2)).min(1)
}).refine(
    data => 
        data.nivel !== "senior" || (data.experienciaEmAnos >= 5 && data.tecnologias.length >= 2),
    data =>({
        message: `Para o nível ${data.nivel}, a experiência mínima é de 5 anos e é necessário ter pelo menos 2 tecnologias`,
        path: ["tecnologias"]
    })
    ).refine(
        data => data.nivel !== 'pleno' || (data.experienciaEmAnos >= 2 && data.tecnologias.length >= 1),
        data => ({
        message: `Para o nível ${data.nivel}, a experiência mínima é de 2 anos e é necessário ter pelo menos 1 tecnologia`,
        path: ["tecnologias"]
    }))
    ;

export {schema};