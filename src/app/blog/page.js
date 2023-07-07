import Title from "@/components/title/Title";
import React from "react";
const secTitle = {
  title: "블로그",
  img: "/img/blog.png",
  desc: "개발자를 위한 블로그입니다. 많이 이용해주세요!",
};
export default function Blog() {
  return (
    <main id="main" className="container">
      <Title attr={secTitle} />
    </main>
  );
}
