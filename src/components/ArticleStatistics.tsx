import React from "react";
import { Row, Col, List, Typography, Card } from "antd";
import { Article } from "@/types/types";

interface ArticleStatisticsProps {
  articles: Article[];
}

const ArticleStatistics: React.FC<ArticleStatisticsProps> = ({ articles }) => {
  //This is given to you
  const uniqueSources = [
    ...new Set(articles.map((article) => article.news_site)),
  ];
  // This might be helpful for you
  const dateRange = [
    new Date(
      Math.min(
        ...articles.map((article) => new Date(article.published_at).getTime())
      )
    ).toLocaleDateString(),
    new Date(
      Math.max(
        ...articles.map((article) => new Date(article.published_at).getTime())
      )
    ).toLocaleDateString(),
  ];

  const featuredCount = articles.filter((article) => article.featured).length;

  return (
    <Row gutter={16} style={{ marginBottom: "20px" }}>
      <Col xs={24} md={8}>
        <Card>
          <Typography.Title level={5}>Unique News Sources</Typography.Title>
          <List
            dataSource={uniqueSources}
            renderItem={(source) => <List.Item>{source}</List.Item>}
          />
        </Card>
      </Col>
      <Col xs={24} md={8}>
        <Card>
          <Typography.Title level={5}>Date Range of Articles</Typography.Title>
          <Typography.Text>Earliest: {dateRange[0]}</Typography.Text>
          <br />
          <Typography.Text>Latest: {dateRange[1]}</Typography.Text>
        </Card>
      </Col>
      <Col xs={24} md={8}>
        <Card>
          <Typography.Title level={5}>Number of Featured Articles</Typography.Title>
          <Typography.Text>Count: {featuredCount}</Typography.Text>
        </Card>
      </Col>
    </Row>
  );
};

export default ArticleStatistics;
