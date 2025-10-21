/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, Typography } from "antd";
import { Article } from "@/types/types";
// This gets you access to the image for 404 fallback.
// The href/source/url can be retrieved via image404.src
import image404 from "../assets/404.png";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = image404.src;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card
      hoverable
      cover={
        <img
          alt={article.title}
          src={article.image_url}
          onError={handleImageError}
          style={{ height: 200, objectFit: "cover" }}
        />
      }
      onClick={() => window.open(article.url, "_blank")}
      style={{ height: "100%" }}
    >
      <Card.Meta
        title={article.title}
        description={
          <>
            <Typography.Paragraph ellipsis={{ rows: 3 }}>
              {article.summary}
            </Typography.Paragraph>
            <Typography.Text type="secondary">
              {formatDate(article.published_at)}
            </Typography.Text>
          </>
        }
      />
    </Card>
  );
};

export default ArticleCard;
