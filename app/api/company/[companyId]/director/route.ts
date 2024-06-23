import prisma from "../../../../../repository/db";

export async function POST(request: Request) {
  const { companyId, name, mobile, email, position } = await request.json();
  const newCompany = await prisma.director.create({
    data: {
      name,
      mobile,
      email,
      position,
      company: { connect: { id: companyId } },
    },
  });
  return Response.json(newCompany, { status: 200 });
}
