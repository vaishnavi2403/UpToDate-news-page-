import React from 'react';
import axios from 'axios';
function App() {

  const getNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=6b439b65382b4484a2e189412cc23b92").then((response) => {
      //setData(response.data.articles)
      console.log(response);
    })
  }

}