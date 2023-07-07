import Title from "@/components/title/Title";
import React from "react";
const secTitle = {
  title: "로그인",
  img: "/img/login.png",
  desc: "로그인을 하면 더 많은 정보를 확인할 수 있습니다!",
};
export default function Login() {
  return (
    <main id="main" className="container">
      <Title attr={secTitle} />
    </main>
  );
}
