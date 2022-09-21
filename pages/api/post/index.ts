import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const { author, message } = req.body;

  const result = await prisma.post.create({
    data: {
      author: author,
      message: message
    }
  });
  res.json(result);
}
