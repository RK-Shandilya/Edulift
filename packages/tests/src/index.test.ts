import axios from "axios";

describe("Auth Tests", ()=> {
    it("registering a new user", async () => {
        const userData = {
            id: "1",
            email: "test1@gmail.com",
            password: "test@123",
            firstName: "test",
            lastName: "test"
        }
        const response = await fetch("http://localhost:3000/api/v1/auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });

        const data = await response.json();
        expect(response.status).toBe(201);
        expect(data.message).toBe("User registered successfully");
    })

    it("should fail when registering with an existing email", async () => {
        const userData = {
            email: "test1@gmail.com",
            password: "test@123",
            firstName: "test",
            lastName: "test"
        };

        const res = await fetch("http://localhost:3000/api/v1/auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData)
        });

        const data = await res.json();
        expect(res.status).toBe(409);
    });


    it("logging in a user", async () => {
        const userData = {
            email: "harkirat@gmail.com",
            password: "123456"
        }
        const response = await fetch("http://localhost:3000/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        const data = await response.json();
        expect(response.status).toBe(200);
        expect(data.message).toBe("User logged in successfully");
        expect(data.tokens.accessToken).toBeDefined();
        expect(data.tokens.refreshToken).toBeDefined();
    })

    it("should fail login with wrong password", async () => {
        const response = await fetch("http://localhost:3000/api/v1/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: "test1@gmail.com",
                password: "wrongPassword"
            })
        });

        const data = await response.json();
        expect(response.status).toBe(401);
    });

})