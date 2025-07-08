import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function dbConnection() {
  try {
    await prisma.$connect();
    console.info("Databse Connected Successfully");
  } catch (error) {
    console.error("Failed to connect to the database:", error.message);
    throw new Error(error.message);
  }
}
