import prisma from "../../../../repository/db";
export async function GET(request: Request, params: { companyId: string }) {
  try {
    const companies = await prisma.company.findUnique({
      where: { id: Number(params.companyId) },
    });
    Response.json(companies, { status: 200 });
  } catch (error) {
    Response.json({ error: "Error fetching companies" }, { status: 500 });
  }
}
