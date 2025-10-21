import React from "react";
import { Table } from "antd";
import { Article } from "@/types/types";

interface ArticleTableProps {
  articles: Article[];
  loading: boolean;
}

const ArticleTable: React.FC<ArticleTableProps> = ({ articles, loading }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text: string, record: Article) => (
        <a href={record.url} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ),
    },
    {
      title: "News Site",
      dataIndex: "news_site",
      key: "news_site",
    },
    {
      title: "Published At",
      dataIndex: "published_at",
      key: "published_at",
      render: (date: string) => formatDate(date),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={articles}
      loading={loading}
      rowKey="id"
      pagination={false}
    />
  );
};

export default ArticleTable;
