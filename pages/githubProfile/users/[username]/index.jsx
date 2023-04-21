import fetch from "isomorphic-unfetch";
import Profile from "../../../../src/components/Profile";

export default function Name({ user }) {
  if (user === undefined) {
    return;
  }
  return <Profile user={user} />;
}

export const getServerSideProps = async ({ query }) => {
  const { username } = query;
  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    if (userRes.status === 200) {
      //   console.log(res);
      const user = await userRes.json();
      // console.log(user);
      return { props: { user } };
    }
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};
