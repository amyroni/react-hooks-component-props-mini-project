import React from "react";
import Article from "./Article";

function ArticleList ({ posts }) {
  const postsArray = posts.map(post => {
    return <Article 
      key={post.title} 
      title={post.title} 
      date={post.date} 
      minutes={post.minutes} 
      preview={post.preview} 
    />
  })
  return (
    <main>
      {postsArray}
    </main>
  )
}

export default ArticleList;