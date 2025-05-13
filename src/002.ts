import { z } from "zod";

const schema = z
    .number({
        error: "O valor deve ser um número válido",
    })
    .min(0, "O número deve ser maior ou igual a zero");

export {schema};