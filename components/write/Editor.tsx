import { icons } from "@/assets/icons";
import { iconName } from "@/types/type";
import CodeMirror, { Extension } from "@uiw/react-codemirror";
import { loadLanguage, LanguageName } from "@uiw/codemirror-extensions-langs";
import { atomone } from "@uiw/codemirror-theme-atomone";

type TTextarea = {
  onChange: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  value: string;
  icon?: iconName;
  language?: LanguageName;
};

export default function Editor({ language = "html", ...props }: TTextarea) {
  const useLanguage = (loadLanguage(language) as Extension) ?? undefined;

  return (
    <div className="flex flex-col w-full h-full">
      <label className="flex gap-2 items-center w-full bg-primary-800 text-white pl-4 py-2">
        {props.icon ? icons(props.icon) : ""}
        {props.label}
      </label>
      <div
        className="flex-1 flex w-full bg-editor-bg cursor-text overflow-auto 
                    scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-primary-600"
      >
        <CodeMirror
          theme={atomone}
          value={props.value}
          onChange={props.onChange}
          extensions={[useLanguage]}
          basicSetup={{
            lineNumbers: true,
            foldGutter: false,
            allowMultipleSelections: false,
          }}
        />
      </div>
    </div>
  );
}
