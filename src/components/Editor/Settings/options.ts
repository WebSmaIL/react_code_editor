import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { Extension } from "@codemirror/state";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";

export interface IOptionsTheme {
  value: Extension | "light" | "dark";
  label: string;
}

export interface IOptionsLang {
  id: number;
  value: Extension;
  label: string;
}

export interface IOptionsFontSize {
  value: number;
  label: string;
}

export const langOptions: IOptionsLang[] = [
  {
    id: 1,
    label: "JavaScript",
    value: javascript({ jsx: true }),
  },
  {
    id: 2,
    label: "Python",
    value: python(),
  },
];

export const themeOptions: IOptionsTheme[] = [
  {
    value: okaidia,
    label: "Okaidia",
  },
  {
    value: dracula,
    label: "Dracula",
  },
  {
    value: tokyoNight,
    label: "Tokyo night",
  },
  {
    value: "light",
    label: "Light",
  },
  {
    value: "dark",
    label: "Dark",
  },
];

export const fontSizeOptions: IOptionsFontSize[] = [
  {
    label: "14px",
    value: 14
  },
  {
    label: "16px",
    value: 16
  },
  {
    label: "18px",
    value: 18
  },
  {
    label: "20px",
    value: 20
  },
  {
    label: "22px",
    value: 22
  },
  {
    label: "24px",
    value: 24
  }
]
