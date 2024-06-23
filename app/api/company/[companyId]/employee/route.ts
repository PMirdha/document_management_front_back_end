import prisma from "../../../../../repository/db";

export async function POST(request: Request) {
  const { companyId, firstName, lastName, email, mobile, position, startDate } =
    await request.json();
  const newCompany = await prisma.employee.create({
    data: {
      firstName,
      lastName,
      email,
      mobile,
      position,
      startDate: new Date(startDate),
      company: { connect: { id: companyId } },
    },
  });
  return Response.json(newCompany, { status: 200 });
}
