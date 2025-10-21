import React, { useState } from "react";
import { Input } from "antd";

interface ArticleSearchProps {
  onSearch: (query: string) => void;
}

const ArticleSearch: React.FC<ArticleSearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <Input.Search
        placeholder="Search articles..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onSearch={handleSearch}
        enterButton="Search"
        size="large"
      />
    </div>
  );
};

export default ArticleSearch;
