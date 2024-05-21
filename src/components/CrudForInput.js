import { useState } from "react";

function Input({ obj, edit, onChange }) {
  let v = "";
  if (edit !== null) {
    v = edit[obj.name];
  }

  const [val, setVal] = useState(v);

  onChange(val, obj);

  return (
    <div>
      <div className="mb-3">
        <label htmlFor={obj.name} className="form-label">
          {obj.label}:
        </label>
        <input
          type={obj.type}
          value={val}
          className="form-control"
          id={obj.id}
          placeholder={obj.placeholder}
          name={obj.name}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Input;
