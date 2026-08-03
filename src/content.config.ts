import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const nieuws = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/nieuws' }),
  schema: z.object({
    titel: z.string(),
    datum: z.date(),
    rubriek: z.enum(['daglicht', 'bigboy', 'vsm', 'zlsm', 'techniek']),
    samenvatting: z.string(),
    afbeelding: z.string(),
    afbeeldingCredit: z.string(),
    audio: z.string().optional(),
    video: z.string().optional(),          // YouTube-ID, bijv. "FJiGIB3INJw"
    videoCredit: z.string().optional(),
    bron: z.object({
      naam: z.string(),
      url: z.string().optional(),
      datum: z.string().optional(),
    }).optional(),
    serie: z.string().optional(),
    deel: z.number().optional(),
    verrijkt: z.array(z.string()).optional(),
  }),
});

export const collections = { nieuws };
