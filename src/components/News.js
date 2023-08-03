import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spiner from './Spiner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizerFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const update = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page}&pagesize=${props.pagesize}&category=${props.category}`;
    setLoading(true);
    try {
      let data = await fetch(url);
      props.setProgress(20);
      let response = await data.json();
      props.setProgress(30);
      setArticles(response.articles);
      setTotalResults(response.totalResults);
      setLoading(false);
      props.setProgress(100);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = `${capitalizerFirstLetter(props.category)} - NewsMonkey`;
    update();
    //eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    console.log('Next');
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page + 1}&pagesize=${props.pagesize}&category=${props.category}`;
    setPage(page + 1);
    setLoading(true);
    try {
      let data = await fetch(url);
      let response = await data.json();
      setArticles(articles.concat(response.articles));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching more news:', error);
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className='text-center' style={{ margin: '40px 0px', marginTop: '90px' }}>
        NewsMonkey- Top {capitalizerFirstLetter(props.category)} Headlines
      </h1>
      {loading && articles.length === 0 && <Spiner />}
      {articles.length > 0 && (
        <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Spiner />}>
          <div className='container my-4'>
            <div className='row'>
              {articles.map((element) => {
                return (
                  <div className='col-md-4' key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageurl={element.urlToImage}
                      newsurl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};

News.defaultProps = {
  country: 'in',
  pagesize: 8,
};

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string.isRequired,
};

export default News;
