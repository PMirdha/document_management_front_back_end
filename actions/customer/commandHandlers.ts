"use server";

import { Role } from "@prisma/client";
import prisma from "../../repository/db";
import bcrypt from "bcrypt";

export const createCustomerCommand = async (customerDetails: {
  email: string;
  name: string;
  password: string;
}) => {
  const hashedPassword = await bcrypt.hash(customerDetails.password, 10);
  const result = await prisma.user.create({
    data: {
      email: customerDetails.email,
      name: customerDetails.name,
      password: hashedPassword,
      role: Role.USER,
    },
  });
  return result.id;
};
