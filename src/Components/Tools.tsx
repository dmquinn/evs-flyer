import React from "react";
import { ToolsStyled } from "./Tools/ToolsStyled";

export const Tools = ({
  colorThemeDisplay,
  setColorTheme,
  inputs,
  pageMode,
}) => {
  return (
    <ToolsStyled>
      <div className="colors">
        {colorThemeDisplay.map((theme: { bubble: any; name: React.Key }) => (
          <span
            style={{ backgroundColor: theme?.bubble }}
            onClick={() => {
              setColorTheme(theme.name);
            }}
            key={theme.name}
          />
        ))}
      </div>
      <div className="tools">
        {inputs.map(
          (input: {
            placeholder: string;
            showOn: any[];
            title: string | number;
            type: string;
            action: (arg0: string) => void;
            fontValue: number;
            fontAction: (arg0: string) => void;
          }) => (
            <div key={input.placeholder}>
              {input.showOn.map((item) => (
                <>
                  {item === pageMode && (
                    <>
                      <div style={{ color: "black" }}>{input.title}</div>
                      {input.type === "textarea" ? (
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
                      )}
                    </>
                  )}
                </>
              ))}
            </div>
          )
        )}
      </div>
    </ToolsStyled>
  );
};

export default Tools;
