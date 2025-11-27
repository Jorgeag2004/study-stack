import * as LucideIcons from "lucide-react";
import { z } from "zod";

export const IconEnum = z.enum(
    Object.keys(LucideIcons) as [string, ...string[]]
);

export type IconType = z.infer<typeof IconEnum>;