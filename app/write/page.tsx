"use client";

import { useRef } from "react";

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
    <div className="flex flex-col h-full w-full bg-red-300">
      <div className="flex justify-between gap-2">
        <div className="flex-1 bg-slate-400">
          <label htmlFor="html">html</label>
          <textarea
            ref={htmlRef}
            name="html"
            id="html"
            cols={30}
            rows={10}
            onKeyUp={getPreview}
          ></textarea>
        </div>
        <div className="flex-1 bg-slate-400">
          <label htmlFor="html">css</label>
          <textarea
            ref={cssRef}
            name="css"
            id="css"
            cols={30}
            rows={10}
            onKeyUp={getPreview}
          ></textarea>
        </div>
      </div>
      <div>
        <iframe ref={previewRef}></iframe>
      </div>
    </div>
  );
}
