import { prisma } from './database'

export interface WhiteLabelConfig {
  clientId: string
  brandName: string
  logoUrl?: string
  primaryColor: string
  secondaryColor: string
  customDomain?: string
  features: {
    dashboard: boolean
    api: boolean
    reports: boolean
    alerts: boolean
  }
  apiEndpoints: {
    baseUrl: string
    customPrefix?: string
  }
}

export class WhiteLabelService {
  
  async createWhiteLabelClient(config: WhiteLabelConfig): Promise<string> {
    // Create white-label configuration in database
    const client = await prisma.user.create({
      data: {
        email: `admin@${config.clientId}.com`,
        name: config.brandName,
        plan: 'enterprise',
        apiKey: this.generateApiKey(),
        apiCallsLimit: -1, // Unlimited for white-label
      }
    })

    // Store white-label configuration
    // In a real implementation, you'd have a separate table for this
    console.log(`Created white-label client: ${config.brandName}`)
    console.log(`Client ID: ${client.id}`)
    console.log(`API Key: ${client.apiKey}`)

    return client.id
  }

  async generateCustomDashboard(clientId: string, config: WhiteLabelConfig): Promise<string> {
    // Generate custom dashboard HTML with client branding
    const dashboardHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${config.brandName} - ESG Analytics</title>
    <style>
        :root {
            --primary-color: ${config.primaryColor};
            --secondary-color: ${config.secondaryColor};
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 0;
            background: #f8fafc;
        }
        .header {
            background: var(--primary-color);
            color: white;
            padding: 1rem 2rem;
            display: flex;
            align-items: center;
        }
        .logo {
            height: 40px;
            margin-right: 1rem;
        }
        .brand-name {
            font-size: 1.5rem;
            font-weight: bold;
        }
        .dashboard-content {
            padding: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        .metric-card {
            background: white;
            border-radius: 8px;
            padding: 1.5rem;
            margin-bottom: 1rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .metric-value {
            font-size: 2rem;
            font-weight: bold;
            color: var(--primary-color);
        }
        .api-section {
            background: white;
            border-radius: 8px;
            padding: 2rem;
            margin-top: 2rem;
        }
        .code-block {
            background: #f1f5f9;
            padding: 1rem;
            border-radius: 4px;
            font-family: 'Monaco', 'Courier New', monospace;
            font-size: 0.9rem;
            overflow-x: auto;
        }
    </style>
</head>
<body>
    <div class="header">
        ${config.logoUrl ? `<img src="${config.logoUrl}" alt="${config.brandName}" class="logo">` : ''}
        <div class="brand-name">${config.brandName}</div>
    </div>
    
    <div class="dashboard-content">
        <h1>ESG Analytics Dashboard</h1>
        
        <div class="metric-card">
            <h3>Portfolio ESG Score</h3>
            <div class="metric-value">78.5</div>
            <p>Based on ${Math.floor(Math.random() * 100) + 50} companies in your portfolio</p>
        </div>
        
        <div class="metric-card">
            <h3>Risk Distribution</h3>
            <div style="display: flex; gap: 1rem;">
                <div style="flex: 1;">
                    <div style="color: #10b981; font-weight: bold;">Low Risk: 45%</div>
                    <div style="color: #f59e0b; font-weight: bold;">Medium Risk: 35%</div>
                    <div style="color: #ef4444; font-weight: bold;">High Risk: 20%</div>
                </div>
            </div>
        </div>
        
        ${config.features.api ? `
        <div class="api-section">
            <h2>API Integration</h2>
            <p>Access your ESG data programmatically using our API:</p>
            <div class="code-block">
curl -H "Authorization: Bearer YOUR_API_KEY" \\
     "${config.apiEndpoints.baseUrl}/v1/companies"
            </div>
            <p><strong>Base URL:</strong> ${config.apiEndpoints.baseUrl}</p>
            <p><strong>Documentation:</strong> <a href="${config.apiEndpoints.baseUrl}/docs">${config.apiEndpoints.baseUrl}/docs</a></p>
        </div>
        ` : ''}
    </div>
</body>
</html>
    `

    return dashboardHtml
  }

  async generateAPIDocumentation(config: WhiteLabelConfig): Promise<string> {
    return `
# ${config.brandName} ESG API Documentation

## Authentication
All API requests require authentication using your API key:

\`\`\`bash
curl -H "Authorization: Bearer YOUR_API_KEY" \\
     "${config.apiEndpoints.baseUrl}/v1/companies"
\`\`\`

## Endpoints

### Get Companies
\`GET ${config.apiEndpoints.baseUrl}/v1/companies\`

Returns a list of companies with their ESG scores.

### Get Company Details  
\`GET ${config.apiEndpoints.baseUrl}/v1/companies/{id}\`

Returns detailed ESG data for a specific company.

### Get ESG Scores
\`GET ${config.apiEndpoints.baseUrl}/v1/esg-scores\`

Returns ESG scores with optional filtering by sector, score range, etc.

## Rate Limits
- ${config.clientId === 'enterprise' ? 'Unlimited' : '10,000'} requests per month
- ${config.clientId === 'enterprise' ? 'No' : '100'} requests per minute

## Support
For technical support, contact: support@${config.clientId}.com
    `
  }

  private generateApiKey(): string {
    return `wl_${Math.random().toString(36).substr(2, 9)}_${Date.now().toString(36)}`
  }

  async getWhiteLabelMetrics(clientId: string) {
    // Return usage metrics for white-label client
    return {
      apiCalls: Math.floor(Math.random() * 50000) + 10000,
      activeUsers: Math.floor(Math.random() * 100) + 20,
      companiesAnalyzed: Math.floor(Math.random() * 1000) + 500,
      revenueGenerated: Math.floor(Math.random() * 100000) + 50000
    }
  }
}
