// Customer Acquisition Script for ESG Analytics Platform
// Generates personalized outreach content for potential clients

interface CompanyProfile {
  name: string
  industry: string
  size: "startup" | "mid-market" | "enterprise"
  currentESGSpend?: number
}

interface OutreachTemplate {
  subject: string
  body: string
  followUp: string
}

function generateOutreachContent(company: CompanyProfile): OutreachTemplate {
  const companyName = company.name
  const savings = calculatePotentialSavings(company)
  const industry = company.industry

  return {
    subject: `${companyName}: Cut ESG reporting costs by 95% with real-time data`,
    body: `Hi there,

I noticed ${companyName} is in the ${industry} sector where ESG compliance is becoming increasingly critical.

Most companies like yours are paying $50K-$500K annually for outdated ESG reports that take months to compile.

Our ESG Analytics platform offers:
• Real-time ESG scoring and monitoring
• 95% cost reduction vs traditional providers  
• API-first integration that takes minutes, not months

${companyName} could save $${savings} annually while getting fresher, more actionable ESG data.

Worth a 15-minute conversation?

Best regards,
ESG Analytics Team`,
    followUp: `Following up on ESG cost savings for ${companyName}...`,
  }
}

function calculatePotentialSavings(company: CompanyProfile): number {
  const baseSavings = {
    startup: 25000,
    "mid-market": 150000,
    enterprise: 400000,
  }

  return company.currentESGSpend
    ? Math.min(company.currentESGSpend * 0.95, baseSavings[company.size])
    : baseSavings[company.size]
}

export function generateCampaign(companies: CompanyProfile[]): OutreachTemplate[] {
  return companies.map(generateOutreachContent)
}

// Example usage
const targetCompanies: CompanyProfile[] = [
  { name: "TechCorp", industry: "Technology", size: "mid-market", currentESGSpend: 200000 },
  { name: "GreenManufacturing", industry: "Manufacturing", size: "enterprise", currentESGSpend: 500000 },
  { name: "StartupInc", industry: "Fintech", size: "startup" },
]

if (require.main === module) {
  const campaign = generateCampaign(targetCompanies)
  console.log("Generated outreach campaign:", campaign)
}
