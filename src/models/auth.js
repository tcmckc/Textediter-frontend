const baseURL = 'http://localhost:1337';

const auth = {
    token: "",
    login: async function login(user) {
        const response = await fetch(`${baseURL}/auth/login`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            },
        });

        const result = await response.json();

        return result;
    },
    register: async function register() {
        
    }

};

export default auth;