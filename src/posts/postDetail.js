import React, { Component } from "react";


class PostDetail extends Component {
  render() {

    const { post } = this.props;

    return (
      <div className="container">
        
          <div className="detail">
            <div className="col-md-2">
              <div className="card bwm-card">
              <h3 className="card-subtitle">{post.position}</h3>
              <img className="card-img-top" src={post.picture} alt={post.picture}/>
              <div className="card-block">
              <h3 className="card-subtitle">{post.jersey}</h3>
              <h5 className="card-text">{post.name}</h5>
            </div>
          </div>
          </div>
          </div>
      
      </div>
    );
  }
}

export default PostDetail;
