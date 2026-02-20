import { getSortedDocs } from './content';

export interface DocsSearchHeading {
  depth: number;
  slug: string;
  text: string;
}

export interface DocsSearchIndexEntry {
  id: string;
  title: string;
  description: string;
  path: string;
  section: string;
  sectionOrder: number;
  order: number;
  headings: DocsSearchHeading[];
}

export interface DocsSearchIndexArtifact {
  schemaVersion: 1;
  items: DocsSearchIndexEntry[];
}

const sanitizeHeadingText = (text: string): string => text.replace(/\s+/g, ' ').trim();

export const buildDocsSearchIndex = async (): Promise<DocsSearchIndexArtifact> => {
  const docs = await getSortedDocs();
  const items: DocsSearchIndexEntry[] = [];

  for (const doc of docs) {
    const { headings } = await doc.render();

    items.push({
      id: doc.slug,
      title: doc.data.title,
      description: doc.data.description,
      path: `/docs/${doc.slug}/`,
      section: doc.data.section,
      sectionOrder: doc.data.sectionOrder,
      order: doc.data.order,
      headings: headings
        .filter((heading) => heading.depth >= 2 && heading.depth <= 3)
        .map((heading) => ({
          depth: heading.depth,
          slug: heading.slug,
          text: sanitizeHeadingText(heading.text),
        })),
    });
  }

  return {
    schemaVersion: 1,
    items,
  };
};
