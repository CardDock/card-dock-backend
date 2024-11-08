import { Prisma, PrismaClient } from '@prisma/client';
import countries from './data/countries.json';
import cities from './data/cities.json';

const prisma = new PrismaClient();

async function main() {
  // Insertar países
  await prisma.country.createMany({
    data: countries as Prisma.CountryCreateManyInput[],
    skipDuplicates: true,
  });

  // Insertar ciudades
  await prisma.city.createMany({
    data: cities as Prisma.CityCreateManyInput[],
    skipDuplicates: true,
  });
}

main()
  .then(() => {
    console.log("Database seeded successfully");
  })
  .catch((e) => {
    console.error("Error seeding database:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
