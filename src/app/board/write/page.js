import Title from "@/components/title/Title";
import React from "react";

const secTitle = {
  title: "게시판 글쓰기",
  img: "/img/board.png",
  desc: "궁금한 사항은 언제든지 작성해주세요!",
};

export default function BoardWrite() {
  return (
    <main id="main" className="container">
      <Title attr={secTitle} />
      <div className="board__inner">
        <div className="board__write">
          <form action="/api/board/write" name="#" method="POST">
            <fieldset>
              <legend className="blind">게시글 작성하기</legend>
              <div>
                <label htmlFor="boardTitle">제목</label>
                <input
                  type="text"
                  id="boardTitle"
                  name="boardTitle"
                  className="inputStyle mb50"
                  placeholder="제목을 입력해주세요!"
                />
              </div>
              <div>
                <label htmlFor="boardContents">내용</label>
                <textarea
                  name="boardContents"
                  id="boardContents"
                  className="inputStyle"
                  rows="20"
                ></textarea>
              </div>
              <button type="submit" className="btnStyle3">
                저장하기
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </main>
  );
}
