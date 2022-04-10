import React from 'react';
import blogData from '../data/blog';
import Article from './Article';

function ArticleList() {
    const postArr = blogData.posts.map(post => {
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes} />
    })
    return (
        <main>
            {postArr}
        </main>
    )
}

export default ArticleList;