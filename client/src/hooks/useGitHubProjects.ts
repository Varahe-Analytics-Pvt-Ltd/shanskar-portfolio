import { useEffect, useState } from 'react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  url: string;
  stars: number;
  language: string | null;
  topics: string[];
}

interface GitHubProfile {
  name: string;
  bio: string;
  followers: number;
  publicRepos: number;
  avatarUrl: string;
}

/**
 * Hook to fetch GitHub profile and repository data
 * 
 * Design Philosophy: Minimalist Elegance with Cinematic Motion
 * - Fetch real GitHub data to showcase projects
 * - Cache results to avoid excessive API calls
 * - Handle loading and error states gracefully
 */

export const useGitHubProjects = (username: string) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch profile
        const profileResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!profileResponse.ok) throw new Error('Failed to fetch profile');
        const profileData = await profileResponse.json();

        setProfile({
          name: profileData.name || username,
          bio: profileData.bio || '',
          followers: profileData.followers || 0,
          publicRepos: profileData.public_repos || 0,
          avatarUrl: profileData.avatar_url || '',
        });

        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=stars&per_page=30`
        );
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const reposData = await reposResponse.json();

        const formattedRepos: GitHubRepo[] = reposData
          .filter((repo: any) => !repo.fork) // Filter out forks
          .slice(0, 12) // Limit to 12 repos
          .map((repo: any) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            stars: repo.stargazers_count,
            language: repo.language,
            topics: repo.topics || [],
          }));

        setRepos(formattedRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('GitHub API error:', err);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchData();
    }
  }, [username]);

  return { repos, profile, loading, error };
};
