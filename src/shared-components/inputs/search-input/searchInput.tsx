import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import styles from "./searchInput.module.scss";
import PropTypes from 'prop-types';

export const SearchInput = ({
  placeholder,
  onSubmitSearch,
  saving,
}: {
  placeholder: string;
  onSubmitSearch: Function;
  saving: boolean;
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
        {saving ? (
          <FontAwesomeIcon icon={faCircleNotch} className="fa-spin" />
        ) : (
          <FontAwesomeIcon icon={faSearch} />
        )}
      </button>
    </div>
  );
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  saving: PropTypes.bool,
  onSubmitSearch: PropTypes.func
};
