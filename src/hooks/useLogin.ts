export default async function useLogin(username: string | undefined, password: string | undefined) {
    try {
        const res = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        });
        const data = await res.json();
        if (data) {
            return data;
        } else {
            return null
        }
    } catch (err) {
        console.log(err)
    }

}