const API_BASE = '/api/v1';

export const API_URL = process.env.NODE_ENV === 'development' ? `http://localhost:8000${API_BASE}`
  : `https://admin.freeformportland.org${API_BASE}`;

export const PRODUCT_TYPES = {
  digital: 'digital',
  physical: 'physical',
};
