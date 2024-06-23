import prisma from "../../../repository/db";
export async function POST(request: Request) {
  const { userId, name, description, address, city, state, country, zipCode } =
    await request.json();
  const newCompany = await prisma.company.create({
    data: {
      name,
      description,
      address,
      city,
      state,
      country,
      zipCode,
      user: { connect: { id: userId } },
    },
  });
  return Response.json(newCompany, { status: 200 });
}
