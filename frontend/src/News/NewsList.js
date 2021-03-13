import React from 'react'
import '../index.css';
import News from './News'
function NewsList(props) {
    const {news}=props
    return (<>
      <main>
      <div className="title">
        <h2>Market News</h2>
        <div className="underline"></div>
      </div>
      <div>
      {news.map(info => <News key={info.id} {...info} />)}
      </div>
    </main>
        </>)
}

export default NewsList
