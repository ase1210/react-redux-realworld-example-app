import ListPagination from './ListPagination';
import React from 'react';
import AuthorPreview from './AuthorPreview';

const AuthorList = props => {
  if (!props.authors) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.authors.length === 0) {
    return (
      <div className="article-preview">
        No authors are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        props.authors.map(author => {
          return (
            <AuthorPreview author={author} key={author.id} />
          );
        })
      }

      <ListPagination
        pager={props.pager}
        articlesCount={props.authorsCount}
        currentPage={props.currentPage} />
    </div>
  );
};

export default AuthorList;
