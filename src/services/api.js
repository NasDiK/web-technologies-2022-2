import Auth from "./auth.js";
import config from "./config.js";

const api = async (url, options = {}) => {
    const headers = {
        ...(options.headers || {}),
        "Content-Type": "application/json",
    }

    const token = Auth.token
    if (token) {
        headers["Authorization"] = `Bearer ${token}`
    }

    const [_, result] = await Promise.all([
        new Promise(resolve => setTimeout(resolve, 1)),
        fetch(config.BASE_URL + url, {
            ...options,
            headers
        })
    ])

    return await result.json();
}

export default api