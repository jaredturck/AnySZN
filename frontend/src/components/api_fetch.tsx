export async function fetchJson<T = any>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json() as Promise<T>;
}

function getCookie(name: string): string | null {
    if (typeof document === "undefined") return null;

    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop()!.split(";").shift() || null;
    }
    return null;
}

function getCsrfToken(): string | null {
    return getCookie("csrftoken");
}

class ApiError<T = any> extends Error {
    status: number;
    data: T | null;

    constructor(status: number, data: T | null) {
        super((data as any)?.message ?? `Request failed with status ${status}`);
        this.status = status;
        this.data = data;
    }
}

export async function postJson<TResponse = any, TBody = any>(url: string, body: TBody): Promise<TResponse> {
    const csrftoken = getCsrfToken();

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...(csrftoken ? { "X-CSRFToken": csrftoken } : {}),
        },
        credentials: "same-origin",
        body: JSON.stringify(body),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
        throw new ApiError(response.status, data);
    }

    return data as TResponse;
}
