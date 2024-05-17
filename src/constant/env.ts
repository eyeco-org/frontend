export const isProd = process.env.NODE_ENV === 'production';
export const isLocal = process.env.NODE_ENV === 'development';
export const host = process.env.HOST || 'http://localhost:8080';
export const api_key = process.env.NEXT_PUBLIC_API_KEY || 'API_KEY';
