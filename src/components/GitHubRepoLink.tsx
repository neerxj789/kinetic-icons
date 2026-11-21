import { useEffect, useState } from 'react';
import { KineticIcon } from './KineticIcon';

export const GITHUB_REPO_SLUG = 'neerxj789/kinetic-icons';
export const GITHUB_REPO_URL = `https://github.com/${GITHUB_REPO_SLUG}`;

let cachedStarCount: number | null | undefined = undefined;
let inflightRequest: Promise<number | null> | null = null;

function formatStarCount(count: number): string {
  if (count >= 1000) {
    const k = count / 1000;
    return `${k >= 10 ? Math.round(k) : k.toFixed(1).replace(/\.0$/, '')}k`;
  }
  return count.toLocaleString();
}

function fetchGitHubStars(): Promise<number | null> {
  if (cachedStarCount !== undefined) {
    return Promise.resolve(cachedStarCount);
  }
  if (!inflightRequest) {
    inflightRequest = fetch(`https://api.github.com/repos/${GITHUB_REPO_SLUG}`, {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        const count =
          data && typeof data.stargazers_count === 'number'
            ? data.stargazers_count
            : null;
        cachedStarCount = count;
        return count;
      })
      .catch(() => {
        cachedStarCount = null;
        return null;
      });
  }
  return inflightRequest;
}

interface GitHubRepoLinkProps {
  variant?: 'header' | 'menu';
  className?: string;
}

export function GitHubRepoLink({
  variant = 'header',
  className = '',
}: GitHubRepoLinkProps) {
  const [stars, setStars] = useState<number | null>(
    cachedStarCount === undefined ? null : cachedStarCount
  );

  useEffect(() => {
    let active = true;
    fetchGitHubStars().then((count) => {
      if (active) setStars(count);
    });
    return () => {
      active = false;
    };
  }, []);

  if (variant === 'menu') {
    return (
      <a
        href={GITHUB_REPO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full h-11 px-3 rounded-xl text-sm font-medium text-kinetic-muted hover:text-kinetic-ink hover:bg-kinetic-card flex items-center justify-between transition-colors ${className}`}
      >
        <span className="inline-flex items-center gap-2.5">
          <KineticIcon id="github" size={16} strokeWidth={1.7} radius={2.5} />
          <span>GitHub</span>
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-kinetic-ink tabular-nums">
          <KineticIcon id="star" size={13} strokeWidth={1.8} radius={2.5} />
          <span>{stars !== null ? formatStarCount(stars) : 'Star'}</span>
        </span>
      </a>
    );
  }

  return (
    <a
      href={GITHUB_REPO_URL}
      target="_blank"
      rel="noopener noreferrer"
      title={`Star ${GITHUB_REPO_SLUG} on GitHub`}
      aria-label={
        stars !== null
          ? `GitHub repository ${GITHUB_REPO_SLUG}, ${stars} stars`
          : `GitHub repository ${GITHUB_REPO_SLUG}`
      }
      className={`h-9 px-2.5 sm:px-3 rounded-xl bg-kinetic-card border border-kinetic-border text-kinetic-ink hover:border-kinetic-ink transition-colors ${className.includes('hidden') ? '' : 'inline-flex'} items-center gap-1.5 text-xs font-semibold whitespace-nowrap shrink-0 ${className}`}
    >
      <KineticIcon id="github" size={15} strokeWidth={1.7} radius={2.5} />
      <span className="w-px h-3.5 bg-kinetic-border" aria-hidden="true" />
      <span className="inline-flex items-center gap-1 tabular-nums">
        <KineticIcon
          id="star"
          size={12}
          strokeWidth={1.8}
          radius={2.5}
          className="text-kinetic-muted"
        />
        <span>{stars !== null ? formatStarCount(stars) : 'Star'}</span>
      </span>
    </a>
  );
}
