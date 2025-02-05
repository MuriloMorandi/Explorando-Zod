import { z } from "zod";

const schema = z.array(z.object({
    username: z.string().trim().min(1),
    role: z.enum(["admin", "user", "guest"]),	
}));

export {schema};