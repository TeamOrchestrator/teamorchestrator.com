import type { APIRoute } from 'astro';
import { buildDocsSearchIndex } from '../../lib/docs-search-index';

export const prerender = true;

export const GET: APIRoute = async () => {
  const index = await buildDocsSearchIndex();

  return new Response(JSON.stringify(index, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
};
