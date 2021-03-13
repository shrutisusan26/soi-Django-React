import React, { useState } from 'react';
import '../index.css';
const News = ({ id,summary, image, headline }) => {
  const [readMore, setReadMore] = useState(false);
  return (<main>
    <article className="single-news">
      <img src={image} alt={headline} />
      <footer>
        <div className="news-info">
          <h4>{headline}</h4>
        </div>
        <p>
          {readMore ? summary : `${summary.substring(0, 40)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
      </footer>
    </article>
    </main>);
};

export default News;