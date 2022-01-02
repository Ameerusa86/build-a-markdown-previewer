import { marked } from "marked";

export default function Preview({ markdown }) {
  const renderer = new marked.Renderer();
  marked.setOptions({
    breaks: true,
  });
  return (
    <div className="border-2 border-teal-900 rounded-lg m-3">
      <div className="bg-teal-700  text-6xl text-center text-white pb-2">
        Preview
      </div>
      <div
        id="preview"
        className="p-2"
        dangerouslySetInnerHTML={{
          __html: marked(markdown, { renderer: renderer }),
        }}
      />
    </div>
  );
}
