const API_BASE = import.meta.env.VITE_HOST;

function getSession() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    return { token, cbid };
}

export async function getUser() {
    const { token, cbid } = getSession();
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    };
    const response = await fetch(`${API_BASE}/600/users/${cbid}`, requestOptions);
    if (!response.ok) {
        throw { message: response.statusText, status: response.status };
    }
    return await response.json();
}

export async function getUserOrders() {
    const { token, cbid } = getSession();
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    };
    const response = await fetch(`${API_BASE}/660/orders?user.id=${cbid}`, requestOptions);
    if (!response.ok) {
        throw { message: response.statusText, status: response.status };
    }
    return await response.json();
}

export async function createOrder(cartList, total, user) {
    const { token } = getSession();
    const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id
        }
    };
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(order)
    };
    const response = await fetch(`${API_BASE}/660/orders`, requestOptions);
    if (!response.ok) {
        throw { message: response.statusText, status: response.status };
    }
    return await response.json();
}
