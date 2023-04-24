import css from "styled-jsx/css";

export const stylePageNation = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 400;
  }
  .repo-pagenation {
    border: 1px solid cornflowerblue;
    width: fit-content;
    margin: auto;
    margin-top: 30px;
  }
  .repo-pagenation button {
    padding: 8px 12px;
    font-size: 14px;
    border: none;
    outline: none;
    cursor: pointer;
    color: blueviolet;
    font-weight: bold;
    background: #debbf7;
  }
  .repo-pagenation button:disabled {
    color: whitesmoke;
    background: gainsboro;
    cursor: no-drop;
  }
`;
