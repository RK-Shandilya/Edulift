describe("Auth Tests", ()=> {
    it("registering a new user", async () => {
        const userData = {
            id: "1",
            email: "test@gmail.com",
            password: "test",
            firstName: "test",
            lastName: "test"
        }
        const response = await fetch("http://localhost:3000/api/v1/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        const data = await response.json();
        expect(response.status).toBe(201);
        expect(data.message).toBe("User registered successfully");
    })
})