import Title from "@/components/title/Title";
import React from "react";

const secTitle = {
  title: "소개하기",
  img: "/img/intro.png",
  desc: "Next.js를 통해서 블로그 만드는 방법을 배웁니다",
};

export default function About() {
  return (
    <main id="main" className="container">
      <Title attr={secTitle} />
    </main>
  );
}
