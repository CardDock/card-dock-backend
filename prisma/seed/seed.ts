import { PrismaClient } from '@prisma/client';
import countries from './data/countries.json';
import cities from './data/cities.json';

const prisma = new PrismaClient();

async function main() {
	await seedCountries();
	await seedCities();
}

async function seedCountries() {
	await prisma.country.createMany({
		data: countries.map((country) => ({
			name: country.name,
			code: country.code,
		})),
		skipDuplicates: true,
	});
}

async function seedCities() {
	await prisma.city.createMany({
		data: cities.map((city) => ({
			name: city.name,
			countryId: city.countryId,
		})),
		skipDuplicates: true,
	});
}

main()
	.then(() => {
		console.log('Database seeded successfully');
	})
	.catch((e) => {
		console.error('Error seeding database:', e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
