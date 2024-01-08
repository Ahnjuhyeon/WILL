import { useState } from "react";
import OnePost from "./onePost";

const Crud22 = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "1",
      content: "content1",
      Comments: [
        {
          id: 1,
          title: "1",
          content: "content11",
        },
        {},
        {},
      ],
    },
  ]);

  const onSubmitAdd = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const comment = e.target.comment.value;
    console.log(content);

    const newPosts = [
      {
        id: Math.floor(Math.random() * 10000),
        title: title,
        content: content,
        Comments: [
          {
            id: Math.floor(Math.random() * 10000),
            title,
            content: comment,
          },
        ],
      },
    ];
    console.log(newPosts);
    setPosts([...posts, ...newPosts]);
  };
  return (
    <>
      <form onSubmit={onSubmitAdd}>
        <p>CRUD</p>

        <input name="content" placeholder="content" />
        <input name="comment" placeholder="comment" />
        <button>추가</button>
      </form>
      {posts.map((post) => (
        <OnePost
          key={post.id}
          post={post}
          postid={post.id}
          comment={post.Comments}
          posts={posts}
          setPosts={setPosts}
        />
      ))}
    </>
  );
};
export default Crud22;
