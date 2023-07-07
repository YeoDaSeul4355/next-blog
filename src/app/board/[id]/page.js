import Title from "@/components/title/Title";
import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
import Link from "next/link";
import React from "react";
const secTitle = {
  title: "게시글 보기",
  img: "/img/board.png",
  desc: "게시글을 확인할 수 있습니다!",
};
export default async function BoardPost(props) {
  console.log(props.params.id);

  const db = (await connectDB).db("jjuls");
  let results = await db
    .collection("board")
    .findOne({ _id: new ObjectId(props.params.id) });
  return (
    <main id="main" className="container">
      <Title attr={secTitle} />
      <div className="board__inner">
        <div className="board__view">
          <table>
            <colgroup>
              <col style={{ width: "20%" }} />
              <col style={{ width: "80%" }} />
            </colgroup>
            <tbody>
              <tr>
                <th>제목</th>
                <td>{results.boardTitle}</td>
              </tr>
              <tr>
                <th>등록자</th>
                <td>{results.boardName}</td>
              </tr>
              <tr>
                <th>등록일</th>
                <td>{results.boardTime}</td>
              </tr>
              <tr>
                <th>조회수</th>
                <td>{results.boardView}</td>
              </tr>
              <tr>
                <th>내용</th>
                <td>{results.boardContents}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="board__btn mb100">
          <Link href={`/board/modify/${props.params.id}`} className="btnStyle3">
            수정하기
          </Link>
          <a href="#" className="btnStyle3">
            삭제하기
          </a>
          <Link href="/board" className="btnStyle3">
            목록보기
          </Link>
        </div>
      </div>
    </main>
  );
}
