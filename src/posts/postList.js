import React, { Component } from "react";
import PostData from "../data/players.json";
import PostDetail from "./postDetail";

class PostList extends Component {

  render() {

    let order = { Portero: 1, Defensa: 2, Medio: 3, Delantero: 4};

    const results = PostData.sort(function (a,b) {
      return order[a.position] - order[b.position]
    });

    return (
      <div className="App">
        <h3>Venders Test </h3>

        {results.map((item, index) => {
          return <PostDetail post={item} key={index} />;
        })}
        
      </div>
    );
  }
}

export default PostList;
