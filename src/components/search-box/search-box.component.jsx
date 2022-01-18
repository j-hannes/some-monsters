import "./search-box.styles.css";

export const SearchBox = (props) => {
  return (
    <input
      type="text"
      className="search"
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  );
};
