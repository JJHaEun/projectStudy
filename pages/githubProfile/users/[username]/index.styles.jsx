import css from "styled-jsx/css";

export const style = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 400;
  }
  .profile-box {
    width: 25%;
    max-width: 200px;
    padding-left: 15px;
    padding-top: 15px;
    margin-right: 25px;
  }
  .profile-image-wrap {
    width: 100%;
    border: 1px solid #e1e4e8;
  }
  .profile-image-wrap .profile-image {
    display: block;
    width: 100%;
  }
  .profile-section {
    display: flex;
    flex-direction: column;
  }
  h2 {
    padding-top: 16px;
    font-size: 22px;
    font-weight: 500;
  }
  p {
    font-size: 18px;

    padding-top: 10px;
  }
  .user-bio {
    padding-top: 15px;
    font-size: 14px;
  }
`;
