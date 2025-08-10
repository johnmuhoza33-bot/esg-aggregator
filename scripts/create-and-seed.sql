-- Create companies table if it doesn't exist
CREATE TABLE IF NOT EXISTS companies (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    industry TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    ticker TEXT,
    sector TEXT
);

-- Insert sample companies
INSERT INTO companies (id, name, ticker, sector) VALUES 
('cm4a1b2c3d4e5f6g7h8i9j0k', 'EcoSolutions Inc.', 'ECO', 'Renewable Energy'),
('cm4b1c2d3e4f5g6h7i8j9k0l', 'Global Tech Corp', 'GTC', 'Technology'),
('cm4c1d2e3f4g5h6i7j8k9l0m', 'GreenHarvest Foods', 'GRN', 'Agriculture'),
('cm4d1e2f3g4h5i6j7k8l9m0n', 'Urban Transit Co.', 'UTC', 'Transportation'),
('cm4e1f2g3h4i5j6k7l8m9n0o', 'AquaPure Water', 'APW', 'Utilities')
ON CONFLICT (name) DO NOTHING;
