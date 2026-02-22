const BASE_URL = import.meta.env.VITE_BACKEND_URL

export const ENDPOINTS = {
    LINKS: {
        CREATE: `${BASE_URL}/api/links`,
        GETLINK: (shortUrl: string) => `${BASE_URL}/api/links/${shortUrl}`,
    },
}