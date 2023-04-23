import PageNation from "../githubPageNation/pagenation";
import { styleRepos } from "./Repo.styles";
import RepositoriesList from "./RepoList";

export default function Repositories({ user, repos }) {
  return (
    <>
      <section className="repos-wrap">
        <section className="repos-header">
          Repositories <span className="repos-count">{user?.public_repos}</span>
        </section>
        <section>
          <RepositoriesList user={user} repos={repos} />
        </section>
        <section>
          <PageNation user={user} repos={repos} />
        </section>
      </section>

      <style jsx>{styleRepos}</style>
    </>
  );
}
