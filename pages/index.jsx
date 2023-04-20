import fetch from "isomorphic-unfetch";

export default function index({ user }) {
  const username = user?.name;
  return (
    <>
      <div>{username}</div>
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const res = await fetch("https://api.github.com/users/JJHaEun");
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
