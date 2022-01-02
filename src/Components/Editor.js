export default function Editor({ markdown, onChange }) {
  return (
    <div className="border-2 border-teal-900 rounded-lg m-3">
      <div className="bg-teal-700  text-6xl text-center text-white pb-2">
        Editor
      </div>

      <textarea
        id="editor"
        className="m-2 "
        onChange={(event) => onChange(event.target.value)}
      >
        {markdown}
      </textarea>
    </div>
  );
}
