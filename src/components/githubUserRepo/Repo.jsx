import { styleRepos } from "./Repo.styles";

export default function Repositories({ user, repos }) {
  return (
    <>
      <section className="repos-wrap">
        <section className="repos-header">
          Repositories <span className="repos-count">{user.public_repos}</span>
        </section>
      </section>
      <style jsx>{styleRepos}</style>
    </>
  );
}
