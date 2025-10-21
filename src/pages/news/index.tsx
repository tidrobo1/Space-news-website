
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Divider, Typography, Switch, Pagination } from "antd";
import { Article, ArticleResponse } from "@/types/types";
import ArticleList from "@/components/ArticleList";
import ArticleTable from "@/components/ArticleTable";
import ArticleStatistics from "@/components/ArticleStatistics";
import ArticleSearch from "@/components/ArticleSearch";

const NewsPage: React.FC = () => {
  // State to store the articles
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [isGridView, setIsGridView] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [totalArticles, setTotalArticles] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch articles when the page loads
  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const offset = (currentPage - 1) * pageSize;
        let url = `https://api.spaceflightnewsapi.net/v4/articles/?limit=${pageSize}&offset=${offset}&ordering=-published_at`;

        if (searchQuery) {
          url += `&search=${encodeURIComponent(searchQuery)}`;
        }

        const response = await fetch(url);
        const data: ArticleResponse = await response.json();
        setArticles(data.results);
        setTotalArticles(data.count);
        console.log("Fetched articles:", data.results);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [currentPage, pageSize, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ marginBottom: "10px" }}>
        View as:{" "}
        <Switch
          checked={isGridView}
          onChange={(checked) => setIsGridView(checked)}
          checkedChildren="Grid"
          unCheckedChildren="Table"
        />{" "}
        (Switch between Table and Grid view)
      </div>
      <Divider />
      <ArticleStatistics articles={articles} />
      <ArticleSearch onSearch={handleSearch} />
      <Typography.Title level={2}>Articles</Typography.Title>
      {isGridView ? (
        <ArticleList articles={articles} loading={loading} />
      ) : (
        <ArticleTable articles={articles} loading={loading} />
      )}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={totalArticles}
          onChange={(page, size) => {
            setCurrentPage(page);
            if (size !== pageSize) {
              setPageSize(size);
              setCurrentPage(1);
            }
            window.scrollTo(0, 0);
          }}
          showSizeChanger
          pageSizeOptions={['10', '20', '50']}
        />
      </div>
    </div>
  );
};

export default NewsPage;
