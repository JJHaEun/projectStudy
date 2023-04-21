import css from "styled-jsx/css";

export const styleRepos = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .repos-wrap {
    width: 100%;
    height: 100vh;
    overflow: scroll;
    padding: 0 16px;
  }
  .repos-header {
    padding: 16px 0;
    font-size: 14px;
    border-bottom: 1px solid cornflowerblue;
  }
  .repos-count {
    /* display: inline-block; */
    padding: 2px 5px;
    font-size: 12px;
    font-weight: 600;
    color: #4a5663;
    background-color: rgba(27, 31, 35, 0.08);
    border-radius: 40px;
  }
`;
