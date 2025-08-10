import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting force seed...')
  
  // First, delete all existing companies
  const deleted = await prisma.company.deleteMany({})
  console.log(`Deleted ${deleted.count} existing companies`)
  
  // Then create new ones
  const companies = [
    { name: 'EcoSolutions Inc.', ticker: 'ECO', sector: 'Renewable Energy' },
    { name: 'Global Tech Corp', ticker: 'GTC', sector: 'Technology' },
    { name: 'GreenHarvest Foods', ticker: 'GRN', sector: 'Agriculture' },
    { name: 'Urban Transit Co.', ticker: 'UTC', sector: 'Transportation' },
    { name: 'AquaPure Water', ticker: 'APW', sector: 'Utilities' }
  ]

  for (const company of companies) {
    const created = await prisma.company.create({ data: company })
    console.log(`Created: ${created.name}`)
  }
  
  console.log('Force seed completed!')
}

main().finally(() => prisma.$disconnect())
