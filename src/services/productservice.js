const API_BASE = import.meta.env.VITE_HOST;

export async function getProductList(searchTerm) {
    const response = await fetch(`${API_BASE}/444/products?name_like=${searchTerm ? searchTerm : ""}`);
    if (!response.ok) {
        throw { message: response.statusText, status: response.status };
    }
    return await response.json();
}

export async function getProduct(id) {
    const response = await fetch(`${API_BASE}/444/products/${id}`);
    if (!response.ok) {
        throw { message: response.statusText, status: response.status };
    }
    return await response.json();
}

export async function getFeatureList() {
    const response = await fetch(`${API_BASE}/444/featured_products`);
    if (!response.ok) {
        throw { message: response.statusText, status: response.status };
    }
    return await response.json();
}
