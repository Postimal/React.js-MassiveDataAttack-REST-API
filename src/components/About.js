import React, { Component } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

class About extends Component {
  state = {
    photos: []
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
      console.log(res);
      this.setState({
        photos: res.data.slice(0, 8)
      });
    });
  }

  fetchMoreData = () => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
      const photosLength = this.state.photos.length;
      const newPhotos = res.data.slice(photosLength, photosLength + 8);
      setTimeout(() => {
        this.setState({
          photos: [...this.state.photos, ...newPhotos]
        });
      }, 800);
    });
  };

  render() {
    const { photos } = this.state;
    const photosList = photos.length ? (
      photos.map(photo => {
        return (
          <div className="post card grey" key={photo.id}>
            <div className="card-content">
              <h5 className="right">{photo.id}</h5>
              <span className="card-title white-text">{photo.title}</span>
              <img src={photo.thumbnailUrl} alt=" " />
            </div>
          </div>
        );
      })
    ) : (
      <h1 className="center overlay">LOADING ...</h1>
    );

    return (
      <div className="container">
        <h4 className="center white-text">
          Massive data, Facebook and Google method
        </h4>
        <InfiniteScroll //owrapowałem elementyListy inifniteScrollem
          dataLength={this.state.photos.length} //tylko data length trzeba ustawic + funkcje
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4 className="center white-text">Loading...</h4>}
        >
          {photosList}
        </InfiniteScroll>
      </div>
    );
  }
}

export default About;
