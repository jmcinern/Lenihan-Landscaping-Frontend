import { defineCollection, z } from 'astro:content';

// We are REMOVING the 'glob' loader.

const portfolio = defineCollection({
 	// We are setting the type to 'content'.
	// This tells Astro to handle .md files
	// and provide the .render() function, which fixes the error.
	type: 'content',

	// By default, a 'content' collection
	// looks in 'src/content/portfolio/', which is perfect.
	
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

// Updated the export
export const collections = { portfolio };