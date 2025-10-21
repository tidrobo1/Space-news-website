import React from "react";
import { Card, Row, Col, Skeleton } from "antd";
import { Article } from "@/types/types";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
  articles: Article[];
  loading: boolean;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, loading }) => {
  if (loading) {
    return (
      <Row gutter={[16, 16]}>
        {[...Array(6)].map((_, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card>
              <Skeleton active />
            </Card>
          </Col>
        ))}
      </Row>
    );
  }

  return (
    <Row gutter={[16, 16]}>
      {articles.map((article) => (
        <Col xs={24} sm={12} md={8} key={article.id}>
          <ArticleCard article={article} />
        </Col>
      ))}
    </Row>
  );
};

export default ArticleList;
