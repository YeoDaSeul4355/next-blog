import { connectDB } from "@/utils/database";

export default async function handler(request, response) {
  console.log(request.body);
  let boardData = {
    boardID: "5",
    boardTitle: request.body.boardTitle,
    boardContents: request.body.boardContents,
    boardName: "여다쭐쓰",
    boardTime: "2023.07.06",
    boardView: "1",
  };

  if (request.method == "POST") {
    const db = (await connectDB).db("jjuls");
    await db.collection("board").insertOne(boardData);

    return response.writeHead(302, { Location: "/board" }).end();
  }
}
