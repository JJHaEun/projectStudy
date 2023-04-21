import Link from "next/link";
import { getDate } from "../commons/date";

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
              <p>설명이 없습니다</p>
            )}
            <p className="repo-language">
              {el.language}
              <span className="repo-updated-at">{getDate(el.updated_at)}</span>
            </p>
          </section>
        ))}
    </>
  );
}
