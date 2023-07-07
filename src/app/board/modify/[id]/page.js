import Title from "@/components/title/Title";
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import React from "react";
const secTitle = {
  title: "게시글 수정하기",
  img: "/img/board.png",
  desc: "게시글을 수정할 수 있습니다!",
};
export default async function Modify(props) {
  const db = (await connectDB).db("jjuls");
  const results = await db
    .collection("board")
    .findOne({ _id: new ObjectId(props.params.id) });

  console.log(results);

  return (
    <main id="main" className="container">
      <Title attr={secTitle} />
      <div className="board__inner">
        <div className="board__write">
          <form action="/api/board/modify" name="#" method="POST">
            <fieldset>
              <legend className="blind">게시글 수정하기</legend>
              <div style={{ display: "none" }}>
                <label htmlFor="boardID">아이디</label>
                <input
                  type="text"
                  id="boardID"
                  name="boardID"
                  className="inputStyle mb50"
                  defaultValue={results._id.toString()}
                />
              </div>
              <div>
                <label htmlFor="boardTitle">제목</label>
                <input
                  type="text"
                  id="boardTitle"
                  name="boardTitle"
                  className="inputStyle mb50"
                  defaultValue={results.boardTitle}
                />
              </div>
              <div>
                <label htmlFor="boardContents">내용</label>
                <textarea
                  name="boardContents"
                  id="boardContents"
                  className="inputStyle"
                  rows="20"
                  defaultValue={results.boardContents}
                ></textarea>
              </div>
              <button type="submit" className="btnStyle3">
                수정하기
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </main>
  );
}
