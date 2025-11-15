import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 1. Renamed 'blog' to 'portfolio'
const portfolio = defineCollection({
 	// 2. Updated the 'base' path to the new folder
	loader: glob({ base: './src/content/portfolio', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

// 3. Updated the export
export const collections = { portfolio };