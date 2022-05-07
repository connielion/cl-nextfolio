import ReactTooltip from "react-tooltip";

export default function Tooltip() {
  return (
    <>
      {" "}
      <a
        className="about-link"
        href="https://www.techopedia.com/definition/30784/dogfooding"
        target="_blank"
        rel="noreferrer"
        data-tip="It's an IT slang; the practice of using one's own products (like beta testing), before it's made available to users"
      >
        What is dogfooding? Hover to find out...
      </a>
      <ReactTooltip place="top" type="dark" effect="float" />
    </>
  );
}
