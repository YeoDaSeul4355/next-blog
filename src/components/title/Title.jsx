import Image from "next/image";
import React from "react";

export default function Title({ attr }) {
  return (
    <div className="boardIntro__inner center bmStyle">
      <Image
        src={attr.img}
        alt="게시판이미지"
        width={200}
        height={200}
        loading="eager"
        priority={true}
      />
      <h2>{attr.title}</h2>
      <p className="boardIntro__text">{attr.desc}</p>
    </div>
  );
}
