import { icons } from "@/assets/icons";
import { iconName } from "@/types/type";
import { ForwardedRef, forwardRef } from "react";

type TTextarea = {
  keyupEvent: () => void;
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  icon?: iconName;
};

function Textarea(props: TTextarea, ref: ForwardedRef<HTMLTextAreaElement>) {
  return (
    <div className="flex flex-col w-full h-full">
      <label
        htmlFor={props.id}
        className="flex gap-2 items-center w-full bg-primary-800 text-white pl-4 py-2"
      >
        {props.icon ? icons(props.icon) : ""}
        {props.label}
      </label>
      <textarea
        ref={ref}
        name={props.name}
        id={props.id}
        rows={14}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  resize-none"
        placeholder={props.placeholder}
        onKeyUp={props.keyupEvent}
      ></textarea>
    </div>
  );
}
export default forwardRef(Textarea);
