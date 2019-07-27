import React, { Component } from "react";

import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Carol Ferreira",
          avatar: "https://i.pravatar.cc/150?img=9"
        },
        date: "04 Jun 2019",
        content: "Alguém já terminou o quarto desafio?",
        comments: [
          {
            id: 1,
            author: {
              name: "Fernando Silva",
              avatar: "https://i.pravatar.cc/150?img=11"
            },
            content: "Estou quase acabando"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gustavo Oliveira",
          avatar: "https://i.pravatar.cc/150?img=12"
        },
        date: "04 Jun 2019",
        content: "Faala galera, estão animados para hoje?",
        comments: [
          {
            id: 1,
            author: {
              name: "Carolina Saiko",
              avatar: "https://i.pravatar.cc/150?img=25"
            },
            content: "Mal posso esperar!"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
