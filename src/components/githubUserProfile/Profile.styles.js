import css from "styled-jsx/css";

export const style = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 400;
  }
  .profile-box {
    width: 30%;
    max-width: 200px;
    padding-left: 15px;
    padding-top: 15px;
    margin-right: 30px;
  }
  .profile-image-wrap {
    width: 100%;
    border: 1px solid #e1e4e8;
    border-radius: 100px;
  }

  .profile-image-wrap .profile-image {
    display: block;
    width: 100%;
    border-radius: 100px;
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
  #user-login {
    font-size: 18px;
    padding-bottom: 10px;
  }
  .user-bio {
    padding-top: 15px;
    font-size: 12px;
  }
  .user-wrap {
    padding-top: 5px;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .user-email-wrap {
    display: flex;
    gap: 5%;
    align-items: center;
    font-size: 14px;
  }
  .user-location-wrap {
    display: flex;
    gap: 5%;
    align-items: center;
    font-size: 14px;
  }
`;
