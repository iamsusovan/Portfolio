import { useEffect, useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";


const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

export default function ArticleView({ message }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        // Crucial: ?populate=* tells Strapi to include components like 'blocks'
        const res = await fetch(`${STRAPI_URL}/api/articles?populate=*`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const json = await res.json();
        setArticles(json.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!articles.length) return <p>No articles found.</p>;
  return (
    <>
      <h2>{message}</h2>
      <div className="max-w-3xl mx-auto p-6 space-y-10">
        {articles.map((article) => {
          // Find the rich-text item inside the blocks dynamic zone/component
          const richTextBlock = article.blocks?.find(
            (block) =>
              block.__component === "shared.rich-text" ||
              block.__component?.includes("rich-text") ||
              block.body
          );

          return (
            <article key={article.id} className="border-b pb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {article.title}
              </h1>
              <h2>{article.testTittle}</h2>
              <p className="text-gray-600 italic mb-6">{article.description}</p>

              {/* Render the rich text block */}
              {richTextBlock?.body && (
                <div className="prose max-w-none text-gray-800 leading-relaxed">
                  {Array.isArray(richTextBlock.body) ? (
                    // If created with Strapi 5 Blocks (Structured JSON)
                    <BlocksRenderer content={richTextBlock.body} />
                  ) : (
                    // Fallback if the field was created as standard Markdown text
                    <p>{richTextBlock.body}</p>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </>
  );
}