import React from 'react'

const NewsItem=(props)=>{
    let { title, description, imageurl, newsurl, author, date, source } =props
    return (
      <div className="card mx-3">
        <div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', right: '0' }}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={imageurl === null ? "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg" : imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={newsurl} target='_blank' className="btn bt-sm btn-dark" rel="noreferrer">Read More</a>
        </div>
      </div >
    )
}

export default NewsItem;
