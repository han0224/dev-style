"use client";

import { useRef } from "react";
import { Textarea } from "@/components/write";
import { Button } from "@/components/common";

export default function Write() {
  const previewRef = useRef<HTMLIFrameElement>(null);
  const htmlRef = useRef<HTMLTextAreaElement>(null);
  const cssRef = useRef<HTMLTextAreaElement>(null);

  const getPreview = () => {
    if (!previewRef.current || !previewRef.current.contentDocument) return;

    const html = htmlRef.current?.value;
    const css = cssRef.current?.value;

    previewRef.current.contentDocument.body.innerHTML =
      html + "<style>" + css + "</style>";
  };

  return (
    <div className="flex flex-col h-full w-full mt-16">
      <div className="flex gap-2">
        <div className="flex-1 flex flex-col justify-between gap-2">
          <div className="flex-1">
            <Textarea
              keyupEvent={getPreview}
              id="html"
              name="html"
              label="html"
              ref={htmlRef}
              icon="html"
            />
          </div>
          <div className="flex-1">
            <Textarea
              keyupEvent={getPreview}
              id="css"
              name="css"
              label="css"
              ref={cssRef}
              icon="css"
            />
          </div>
        </div>
        <div className="flex-1">
          <iframe
            className="p-2.5 w-full h-full text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  resize-none"
            ref={previewRef}
          ></iframe>
        </div>
      </div>
      <div className="mt-2">
        <Button text="save" />
      </div>
    </div>
  );
}
