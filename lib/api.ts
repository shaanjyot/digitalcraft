const BASE_URL = "http://localhost:4000";
const STORAGE_KEY = "auth_token"; // Placeholder key until finalized

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface ApiOptions {
    method?: HttpMethod;
    body?: unknown;
    headers?: Record<string, string>;
}

/**
 * A centralized utility for making API requests to the backend.
 * Automatically handles base URL, JSON headers, and Authorization tokens.
 */
export async function apiCall<T>(endpoint: string, { method = "GET", body, headers = {} }: ApiOptions = {}): Promise<T> {
    const url = `${BASE_URL}${endpoint}`;

    const isFormData = body instanceof FormData;

    const requestHeaders: Record<string, string> = {
        "Content-Type": "application/json",
        ...headers,
    };

    if (isFormData) {
        delete requestHeaders["Content-Type"];
    }

    // Automatically attach Authorization header if token exists (Client-side only)
    if (typeof window !== "undefined") {
        const token = localStorage.getItem(STORAGE_KEY);
        if (token) {
            requestHeaders["Authorization"] = `Bearer ${token}`;
        }
    }

    const config: RequestInit = {
        method,
        headers: requestHeaders,
    };

    if (body) {
        config.body = isFormData ? (body as FormData) : JSON.stringify(body);
    }

    try {
        const response = await fetch(url, config);

        // Parse JSON safely because some error responses might not be JSON, 
        // or 204 No Content might return empty.
        const isJson = response.headers.get("content-type")?.includes("application/json");
        const data = isJson ? await response.json() : null;

        if (!response.ok) {
            throw new Error(data?.message || `API Error: ${response.status} ${response.statusText}`);
        }

        return data as T;
    } catch (error) {
        // Re-throw the error to be handled by the caller
        console.error("API Request Failed:", error);
        throw error;
    }
}
