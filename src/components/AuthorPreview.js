import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthorPreview = props => {
  const author = props.author;

  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={`/@${author.username}`}>
          <img src={author.image} alt={author.username} />
        </Link>

        <div className="info">
          <Link className="author" to={`/@${author.username}`}>
            {author.username}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default connect(() => ({}), ({}))(AuthorPreview);
