import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.company.createMany({
    data: [
      { name: 'EcoSolutions Inc.', ticker: 'ECO', sector: 'Renewable Energy' },
      { name: 'Global Tech Corp', ticker: 'GTC', sector: 'Technology' },
      { name: 'GreenHarvest Foods', ticker: 'GRN', sector: 'Agriculture' }
    ],
    skipDuplicates: true
  })
  console.log('Companies seeded successfully')
}

main().catch(console.error).finally(() => prisma.$disconnect())
