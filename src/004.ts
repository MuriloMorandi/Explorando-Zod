import { z } from "zod";

const schema = z.array(z.string().trim().min(1)).min(1).max(5);

export {schema};