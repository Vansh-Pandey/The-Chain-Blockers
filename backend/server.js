const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock data
let leases = [
  {
    id: 1,
    property: '123 Main Street, Apt 4B',
    tenant: 'GABC...XYZ',
    landlord: 'GDEF...ABC',
    deposit: '1000',
    monthlyRent: '500',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    status: 'Active',
    contractAddress: 'CXXX...XXX'
  }
];

// Routes
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Get all leases
app.get('/api/leases', (req, res) => {
  res.json(leases);
});

// Get lease by ID
app.get('/api/leases/:id', (req, res) => {
  const lease = leases.find(l => l.id === parseInt(req.params.id));
  if (lease) {
    res.json(lease);
  } else {
    res.status(404).json({ error: 'Lease not found' });
  }
});

// Create new lease
app.post('/api/leases', (req, res) => {
  const newLease = {
    id: leases.length + 1,
    ...req.body,
    status: 'Pending',
    contractAddress: 'C' + Math.random().toString(36).substring(7).toUpperCase()
  };
  leases.push(newLease);
  res.status(201).json(newLease);
});

// Update lease
app.put('/api/leases/:id', (req, res) => {
  const index = leases.findIndex(l => l.id === parseInt(req.params.id));
  if (index !== -1) {
    leases[index] = { ...leases[index], ...req.body };
    res.json(leases[index]);
  } else {
    res.status(404).json({ error: 'Lease not found' });
  }
});

// Delete lease
app.delete('/api/leases/:id', (req, res) => {
  const index = leases.findIndex(l => l.id === parseInt(req.params.id));
  if (index !== -1) {
    leases.splice(index, 1);
    res.json({ message: 'Lease deleted successfully' });
  } else {
    res.status(404).json({ error: 'Lease not found' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
