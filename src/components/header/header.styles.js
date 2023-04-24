import css from "styled-jsx/css";

export const HeaderStyles = css`
  /* * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } */
  .header-wrap {
    padding: 14px;
    background-color: #24292e;
    line-height: 0;
    display: flex;
    align-items: center;
  }
  .header-search-form input {
    margin: 0 16px;
    background: rgba(255, 255, 255, 0.125);
    width: 300px;
    height: 30px;
    border: none;
    outline: none;
    color: white;
    padding: 0 12px;
    font-size: 14px;
    font-weight: bold;
  }
  .header-nav a {
    color: white;
    margin-right: 16px;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
  }
`;
