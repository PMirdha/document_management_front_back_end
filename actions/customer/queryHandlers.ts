"use server";

import { Role } from "@prisma/client";
import prisma from "../../repository/db";
import bcrypt from "bcrypt";

export const validateCustomerCreds = async (customerDetails: {
  userName: string;
  password: string;
}) => {
  try {
    const customer = await prisma.user.findUniqueOrThrow({
      where: {
        email: customerDetails.userName,
        role: Role.USER,
      },
    });
    const passwordMatches = await bcrypt.compare(
      customerDetails.password,
      customer.password
    );
    if (!passwordMatches) {
      throw Error();
    }
  } catch (error) {
    throw Error("Invalid credentials");
  }

  return true;
};
