import prisma from "../../../repository/db";
import bcrypt from "bcrypt";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
  return Response.json(user);
}

export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
  return Response.json(newUser, { status: 200 });
}
