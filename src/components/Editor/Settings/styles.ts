import { CSSObjectWithLabel } from "react-select";
import { IOptionsTheme, IOptionsFontSize } from "./options";

interface IOptionStyle {
  data: IOptionsTheme | IOptionsFontSize;
  isFocused: boolean;
  isSelected: boolean;
  isDisabled: boolean;
}

export const getStyles = () => {
    return {
        control: (baseStyles: CSSObjectWithLabel) => ({
          ...baseStyles,
          background: "#202020",
          border: "1px solid #3a3a3a",
          color: "#fff",
          cursor: "pointer",
          marginBottom: '10px'
        }),
        option: (
          baseStyles: CSSObjectWithLabel,
          { data, isDisabled, isFocused, isSelected }: IOptionStyle
        ) => {
          return {
            ...baseStyles,
            color: "#fff",
            border: "none",
            background: isFocused ? "#181818" : "#202020",
            cursor: "pointer",
          };
        },
        singleValue: (baseStyles: CSSObjectWithLabel) => ({
          ...baseStyles,
          background: "#202020",
          color: "#fff",
        }),
        menuList: (baseStyles: CSSObjectWithLabel) => ({
          ...baseStyles,
          background: "#202020",
        }),
        input: (baseStyles: CSSObjectWithLabel) => ({
          ...baseStyles,
          color: "#fff",
        }),
      }
}
