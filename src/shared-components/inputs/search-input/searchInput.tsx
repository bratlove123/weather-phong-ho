import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import styles from "./searchInput.module.scss";

export const SearchInput = ({
  placeholder,
  onSubmitSearch,
}: {
  placeholder: string;
  onSubmitSearch: Function;
}) => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.form}>
      <input
        className={styles.textbox}
        placeholder={placeholder}
        value={value}
        onKeyDown={(e) => {
          if (e.key === "Enter" && value !== "") {
            onSubmitSearch(value);
            setValue("");
          }
        }}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />

      <button
        className={styles.button}
        onClick={() => {
          if (value !== "") {
            onSubmitSearch(value);
            setValue("");
          }
        }}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};
