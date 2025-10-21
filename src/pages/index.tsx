import { Inter } from "next/font/google";
import { Typography } from "antd";
import { useEffect, useState } from "react";
import { Article, ArticleResponse } from "@/types/types";
import ArticleCard from "@/components/ArticleCard";

const inter = Inter({ subsets: ["latin"] });

// You don't need to edit this file

export default function Home() {
  const [latestArticle, setLatestArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchLatestArticle = async () => {
      try {
        const response = await fetch(
          "https://api.spaceflightnewsapi.net/v4/articles/?limit=1&offset=0&ordering=-published_at"
        );
        const data: ArticleResponse = await response.json();
        if (data.results.length > 0) {
          setLatestArticle(data.results[0]);
        }
      } catch (error) {
        console.error("Error fetching latest article:", error);
      }
    };

    fetchLatestArticle();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Typography.Title>Space! News</Typography.Title>
        <Typography.Paragraph>
          Welcome to Space! News, your go-to source for the latest news and
          updates on space exploration, astronomy, and everything in between.
          Our team of experienced journalists and space enthusiasts are
          dedicated to bringing you the most accurate and up-to-date information
          on the latest discoveries, missions, and events happening in the
          cosmos.
        </Typography.Paragraph>
        <Typography.Paragraph>
          From the latest Mars rover missions to the search for extraterrestrial
          life, we cover it all. Our articles are written in an
          easy-to-understand format, so you you do not need to be a rocket
          scientist to enjoy them. We also feature stunning images and videos
          from space, so you can experience the beauty and wonder of the
          universe from the comfort of your own home.
        </Typography.Paragraph>
        <Typography.Paragraph>
          So whether you are a space enthusiast, a science buff, or just someone
          who loves to learn new things, Space! News has something for you. Be
          sure to check back often for the latest updates and stories from the
          final frontier.
        </Typography.Paragraph>

        <div style={{ marginTop: "40px", width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <Typography.Title level={2}>Latest Article</Typography.Title>
            <a href="/news">See all articles</a>
          </div>
          {latestArticle && (
            <div style={{ maxWidth: "500px" }}>
              <ArticleCard article={latestArticle} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
