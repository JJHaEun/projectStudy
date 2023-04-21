import { GoMailRead } from "react-icons/go";
import { GoLocation } from "react-icons/go";
import { style } from "./Profile.styles";

export default function Profile({ user }) {
  return (
    <>
      {user ? (
        <section className="profile-box">
          <div className="profile-image-wrap">
            <img
              className="profile-image"
              src={user.avatar_url}
              alt={`${user.name} 프로필 이미지`}
            />
          </div>

          <section className="profile-section">
            <h2>{user.name}</h2>
            <p id="user-login">{user.login}</p>
            <div>
              <em className="user-bio">{user.bio}</em>
              <p className="user-wrap">
                <p className="user-email-wrap">
                  <GoMailRead color="#5279797c" />
                  <span>yj05037@gmail.com</span>
                </p>
                <p className="user-location-wrap">
                  <GoLocation color="#a1925a7b" />
                  <span>{user.location}</span>
                </p>
              </p>
            </div>
          </section>
        </section>
      ) : (
        <p>유저정보가 없습니다</p>
      )}

      <style jsx>{style}</style>
    </>
  );
}
