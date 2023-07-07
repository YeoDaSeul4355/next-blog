import { connectDB } from "@/utils/database";
import { ObjectId } from "mongodb";
export default async function handler(request, response) {
  console.log(request.body);

  if (request.method == "POST") {
    let boardDataChange = {
      boardTitle: request.body.boardTitle,
      boardContents: request.body.boardContents,
    };

    const db = (await connectDB).db("jjuls");
    let results = await db
      .collection("board")
      .updateOne(
        { _id: new ObjectId(request.body.boardID) },
        { $set: boardDataChange }
      );

    return response.writeHead(302, { Location: "/board" }).end();
  }
}
