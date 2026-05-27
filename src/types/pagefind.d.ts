// Type stub for the Pagefind browser API — file is generated at build time into /public/pagefind/
declare module "/pagefind/pagefind.js" {
  export function search(query: string): Promise<{
    results: Array<{
      data: () => Promise<{
        url: string;
        excerpt: string;
        meta: { title?: string; image?: string };
        content: string;
      }>;
    }>;
  }>;
}
