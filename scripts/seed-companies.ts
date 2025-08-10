import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  console.log("Starting database seeding...")

  try {
    // Clear existing data (optional, for fresh start)
    try {
      await prisma.company.deleteMany({})
      console.log("Cleared existing company data.")
    } catch (e) {
      console.warn("Could not clear existing data (table might not exist yet):", (e as Error).message)
    }

    // Seed companies
    const companiesData = [
      {
        name: "EcoSolutions Inc.",
        ticker: "ECO",
        sector: "Renewable Energy",
      },
      {
        name: "Global Tech Corp",
        ticker: "GTC",
        sector: "Technology",
      },
      {
        name: "GreenHarvest Foods",
        ticker: "GRN",
        sector: "Agriculture",
      },
      {
        name: "Urban Transit Co.",
        ticker: "UTC",
        sector: "Transportation",
      },
      {
        name: "AquaPure Water",
        ticker: "APW",
        sector: "Utilities",
      },
      {
        name: "Future Finance Group",
        ticker: "FFG",
        sector: "Financial Services",
      },
      {
        name: "Health Innovations",
        ticker: "HIN",
        sector: "Healthcare",
      },
      {
        name: "Sustainable Materials Ltd.",
        ticker: "SML",
        sector: "Manufacturing",
      },
      {
        name: "Digital Connect Solutions",
        ticker: "DCS",
        sector: "Technology",
      },
      {
        name: "Clean Energy Ventures",
        ticker: "CEV",
        sector: "Renewable Energy",
      },
    ]

    for (const company of companiesData) {
      const createdCompany = await prisma.company.create({
        data: company,
      })
      console.log(`Seeded company: ${createdCompany.name}`)
    }

    console.log("Database seeding completed successfully.")
  } catch (e) {
    console.error("Error during seeding:", e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()
