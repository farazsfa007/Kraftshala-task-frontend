const BASE_URL = "https://kraftshala-task-backend.onrender.com";

export const api = {
    createUser: async (data) => {
    const res = await fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const text = await res.text();

    try {
        return JSON.parse(text);
    } catch {
        return { error: "Server error" };
    }
},


    getUser: (id) =>
        fetch(`${BASE_URL}/users/${id}`).then(res => res.json()),

    createMeeting: async (data) => {
    const res = await fetch(`${BASE_URL}/meetings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const text = await res.text();

    try {
        return JSON.parse(text);
    } catch {
        return { error: "Server error" };
    }
},

    getMeetings: () =>
        fetch(`${BASE_URL}/meetings`).then(res => res.json()),

    deleteMeeting: (id) =>
        fetch(`${BASE_URL}/meetings/${id}`, {
        method: "DELETE"
    })
};
