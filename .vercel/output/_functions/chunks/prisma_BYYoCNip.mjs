import { PrismaClient } from '@prisma-app/client';

const prisma = new PrismaClient();

export { prisma as p };
