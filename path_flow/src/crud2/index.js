import { useState } from "react";
import DelEdit from "./components/del_edit";

const Crud2 = () => {
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
      ],
    },
  ]);
  return (
    <>
      <form>
        <p>CRUD</p>
        <input name="content" placeholder="content" />
        <button>추가</button>
      </form>
      <div>
        {posts.map((list) => (
          <div>
            {list.id}
            <p>{list.content}</p>
            <DelEdit
              key={list.id}
              post={list}
              postid={list.id}
              comment={list.Comments}
              posts={posts}
              setPosts={setPosts}
            ></DelEdit>
          </div>
        ))}
      </div>
    </>
  );
};
export default Crud2;
/*
(2) 아래의 데이터를 토대로 Comment를 CRUD 해보세요

            const post = {
                id: 1,
                title: "",
                content: "",
                Comments : [
                    {
                        id:1,
                        title: "",
                        content: ""
                    },
                ]
            }


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



   <DelEdit
            key={list.id}
            post={list}
            postid={list.id}
            comment={list.Comments}
            posts={posts}
            setPosts={setPosts}
          ></DelEdit>
*/
