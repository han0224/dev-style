"use client";

import { useEffect, useState } from "react";
import { Editor } from "@/components/write";
import { Button } from "@/components/common";

export default function Write() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");

  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    setSrcDoc(
      `
      <html>
        <style>${css}</style>
        <body>${html}</body>
      </html>
      `
    );
  }, [html, css]);

  return (
    <div className="flex-1 flex flex-col h-full w-full mt-16">
      <div className="flex-1 flex gap-2">
        <div className="flex-1 flex flex-col justify-between gap-2">
          <div className="h-1/2">
            <Editor
              onChange={setHtml}
              value={html}
              label="html"
              icon="html"
              language="html"
            />
          </div>
          <div className="h-1/2">
            <Editor
              onChange={setCss}
              value={css}
              label="css"
              icon="css"
              language="css"
            />
          </div>
        </div>
        <div className="flex-1">
          <iframe
            srcDoc={srcDoc}
            className="p-2.5 w-full h-full text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  resize-none"
          ></iframe>
        </div>
      </div>
      <div className="mt-2">
        <Button text="save" />
      </div>
    </div>
  );
}
