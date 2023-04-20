import fetch from "isomorphic-unfetch";
import { style } from "./index.styles";

export default function Name({ user }) {
  if (user !== undefined) {
    console.log(user);
  }
  return (
    <>
      <section className="profile-box">
        <div className="profile-image-wrap">
          <img
            className="profile-image"
            src={user.avatar_url}
            alt={`${user.name} 프로필 이미지`}
          />
        </div>
        {user ? (
          <section className="profile-section">
            <h2>{user.name}</h2>
            <p>{user.login}</p>
            <em className="user-bio">{user.bio}</em>
          </section>
        ) : (
          <p>유저정보가 없습니다</p>
        )}
      </section>

      <style jsx>{style}</style>
    </>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { username } = query;
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (res.status === 200) {
      //   console.log(res);
      const user = await res.json();
      console.log(user);
      return { props: { user } };
    }
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};
