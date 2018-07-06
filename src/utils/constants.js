const { NODE_ENV } = process.env
export const API_URL = NODE_ENV === 'development' ? 'localhost:8000' : ''
