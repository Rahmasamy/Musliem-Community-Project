import TitleDescProps from "@/components/interfaces/title.types";
import "./Title.css";
import { JSX } from "react/jsx-runtime";

export default function Title({ title }: TitleDescProps): JSX.Element {
  return (
    <>
      <h2 style={{ fontSize: "17px", fontWeight: "bold" }}>{title}</h2>
    </>
  );
}
