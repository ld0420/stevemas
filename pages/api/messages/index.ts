import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  if (req.method === "GET") {
    const messages = await prisma.post.findMany({
      select: {
        author: true,
        message: true
      }
    });
    if (messages) {
      res.send(messages);
    } else {
      res.send("Sorry no messages received");
    }
  }

  if (req.method == "POST") {
    const { author, message } = req.body;

    const result = await prisma.post.create({
      data: {
        author: author,
        message: message
      }
    });
    res.json(result);
  }
}
