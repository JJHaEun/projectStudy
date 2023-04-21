import Link from "next/link";
import { formatDistance } from "date-fns";
import { styleRepos } from "./Repo.styles";

export default function RepositoriesList({ user, repos }) {
  return (
    <>
      {user !== undefined &&
        repos !== undefined &&
        repos.map((el) => (
          <section key={el.id} className="repo-wrap">
            <Link href={`https://github.com/${user.login}/${el.name}`}>
              <a target="_blank" rel="noreferrer">
                <h2 className="repo-name">{el.name}</h2>
              </a>
            </Link>
            {el.description ? (
              <p className="repo-description">{el.description}</p>
            ) : (
              <p className="repo-description">설명이 없습니다</p>
            )}
            <p className="repo-language">
              {el.language}
              <span className="repo-updated-at">
                {formatDistance(new Date(el.updated_at), new Date(), {
                  addSuffix: true,
                })}
              </span>
            </p>
          </section>
        ))}
      <style jsx>{styleRepos}</style>
    </>
  );
}
