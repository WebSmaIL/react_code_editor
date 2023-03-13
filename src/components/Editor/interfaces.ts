import { Extension } from "@codemirror/state";

export interface IEditorOptions {
  theme: Extension | "light" | "dark";
  lang: { id: number; link: Extension };
  fontSize: number;
}
