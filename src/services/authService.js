const API_BASE = import.meta.env.VITE_HOST;

export async function login(authDetail) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authDetail)
    };

    const response = await fetch(`${API_BASE}/login`, requestOptions);

    if (!response.ok) {
        throw { message: response.statusText, status: response.status };
    }

    const data = await response.json();

    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }

    return data;
}

export async function register(authDetail) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authDetail)
    };

    const response = await fetch(`${API_BASE}/register`, requestOptions);

    if (!response.ok) {
        throw { message: response.statusText, status: response.status };
    }

    const data = await response.json();

    if (data.accessToken) {
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
    }

    return data;
}

export function logout() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
}
