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
    overflow: auto;
    padding: 0 16px;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  .repos-wrap::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
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
  .repo-wrap {
    width: 100%;
    border-bottom: 1px solid cornflowerblue;
    padding: 25px 0;
  }
  a {
    text-decoration: none;
  }
  .repo-description {
    padding: 5px 0;
    color: #debbf7;
    font-size: 15px;
  }
  .repo-name {
    color: blueviolet;
    font-size: 22px;
    cursor: pointer;
    display: inline;
    border-bottom: 1px solid #ffffff;
  }
  .repo-name:hover {
    border-bottom: 1px solid blueviolet;
  }
  .repo-language {
    font-size: 14px;
    font-weight: 500;
    padding-top: 20px;
  }
  .repo-updated-at {
    padding-left: 30px;
  }
`;
