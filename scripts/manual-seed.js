import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting manual seed...')
  
  const companies = [
    { id: 'cm4a1b2c3d4e5f6g7h8i9j0k', name: 'EcoSolutions Inc.', ticker: 'ECO', sector: 'Renewable Energy' },
    { id: 'cm4b1c2d3e4f5g6h7i8j9k0l', name: 'Global Tech Corp', ticker: 'GTC', sector: 'Technology' },
    { id: 'cm4c1d2e3f4g5h6i7j8k9l0m', name: 'GreenHarvest Foods', ticker: 'GRN', sector: 'Agriculture' },
    { id: 'cm4d1e2f3g4h5i6j7k8l9m0n', name: 'Urban Transit Co.', ticker: 'UTC', sector: 'Transportation' },
    { id: 'cm4e1f2g3h4i5j6k7l8m9n0o', name: 'AquaPure Water', ticker: 'APW', sector: 'Utilities' }
  ]

  for (const company of companies) {
    try {
      await prisma.company.create({ data: company })
      console.log(`Created: ${company.name}`)
    } catch (error) {
      console.log(`Skipped ${company.name} (already exists)`)
    }
  }
  
  console.log('Manual seed completed!')
}

main().finally(() => prisma.$disconnect())
