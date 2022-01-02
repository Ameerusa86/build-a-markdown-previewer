//Libs
import { useState } from "react";

//Local
import Editor from "./Components/Editor";
import Preview from "./Components/Preview";
import { placeholder } from "./Components/placeholder";

function Main() {
  const [value, setValue] = useState(placeholder);
  function handleChange(input) {
    setValue(input);
  }

  return (
    <div className="container mx-auto">
      <Editor markdown={value} onChange={handleChange} />
      <Preview markdown={value} />
    </div>
  );
}

export default Main;
