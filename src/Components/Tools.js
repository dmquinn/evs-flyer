import React from "react";

export const Tools = ({ colorThemeDisplay, setColorTheme, inputs }) => {
  return (
    <div className="toolsAndColors">
      <div className="colors">
        {colorThemeDisplay.map((theme) => (
          <span
            style={{ backgroundColor: theme?.bubble }}
            onClick={() => {
              setColorTheme(theme.name);
            }}
          />
        ))}
      </div>
      <div className="tools">
        {inputs.map((input) =>
          input.type === "textarea" ? (
            <div className="textareaGroup">
              <textarea
                placeholder={input.placeholder}
                rows={1}
                onChange={(e) => {
                  input.action(e.target.value);
                }}
              />
              <input
                type="number"
                value={input.fontValue}
                className="number"
                onChange={(e) => input.fontAction(e.target.value)}
              />
            </div>
          ) : (
            <>
              <input
                placeholder={input.placeholder}
                onChange={(e) => {
                  input.action(e.target.value);
                }}
              />
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Tools;
