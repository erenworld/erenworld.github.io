import { getCollection } from "astro:content";

export const getBlogPosts = async () => {
  const posts = await getCollection("blog");
  posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return posts;
};

type ContributionDay = {
  color: string;
  contributionCount: number;
  date: string;
  weekday: number;
};

type Week = {
  contributionDays: ContributionDay[];
  firstDay: string;
};

type GraphQLResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          weeks: Week[];
        };
      };
    };
  };
  errors?: Array<{ message: string }>;
};

export async function getContributions(
  token: string,
  username: string,
): Promise<GraphQLResponse> {
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const body = {
    query: `query {
        user(login: "${username}") {
          contributionsCollection {
            contributionCalendar {
              weeks {
                firstDay
                contributionDays {
                  color
                  contributionCount
                  date
                  weekday
                }
              }
            }
          }
        }
      }`,
  };

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify(body),
    headers,
  });

  if (!response.ok) {
    console.error(`GitHub API error: ${response.status}`);
    return {};
  }

  const data: GraphQLResponse = await response.json();
  return data;
}
