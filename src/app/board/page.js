import React from "react";
import Link from "next/link";
import Title from "@/components/title/Title";
import { connectDB } from "@/utils/database";

const secTitle = {
  title: "게시판",
  img: "/img/board.png",
  desc: "궁금한 사항은 언제든지 여기서 확인하세요!",
};
export default async function Blog() {
  const client = await connectDB;

  const db = client.db("jjuls");
  let results = await db.collection("board").find().toArray();
  console.log(results);
  return (
    <main id="main" className="container">
      <Title attr={secTitle} />
      <div className="board__inner">
        <div className="board__search">
          <div className="left">
            *총 <em>1111</em>건의 게시물이 등록되어 있습니다.
          </div>
          <div className="right">
            <Link href="/board/write" className="btnStyle3">
              글쓰기
            </Link>
          </div>
        </div>
        <div className="board__table">
          <table>
            <colgroup>
              <col style={{ width: "5%" }} />
              <col />
              <col style={{ width: "10%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "7%" }} />
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>등록자</th>
                <th>등록일</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              {results.reverse().map((result, index) => (
                <tr key={index}>
                  <td>{result.boardID}</td>
                  <td>
                    <Link href={`/board/${result._id}`}>
                      {result.boardTitle}
                    </Link>
                  </td>
                  <td>{result.boardName}</td>
                  <td>{result.boardTime}</td>
                  <td>{result.boardView}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
