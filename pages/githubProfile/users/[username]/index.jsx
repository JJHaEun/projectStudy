import fetch from "isomorphic-unfetch";
import Profile from "../../../../src/components/githubUserProfile/Profile";
import Repositories from "../../../../src/components/githubUserRepo/Repo";
import { styleUsers } from "./index.styles";

export default function Name({ user, repos }) {
  if (user === undefined) {
    return;
  }
  return (
    <>
      <div className="user-contents-wrap">
        <Profile user={user} />
        <Repositories user={user} repos={repos} />
      </div>
      <style jsx>{styleUsers}</style>
    </>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { username, page } = query;
  try {
    let user;
    let repos;
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    if (userRes.status === 200) {
      // console.log(res);
      user = await userRes.json();
      // console.log(user);
    }
    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&page=${page}&per_page=10`
    );
    if (repoRes.status === 200) {
      repos = await repoRes.json();
    }

    return { props: { user, repos } };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};
