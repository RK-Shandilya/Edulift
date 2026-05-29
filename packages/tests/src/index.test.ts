import axios from "axios";

const BASE_URL = "http://localhost:3001/api/v1/auth";

describe.skip("Auth Tests", ()=> {
    const testUser = {
        email: "test@gmail.com",
        password: "Test@123",
        firstName: "Test",
        lastName: "User"
    };

    const existingUser = {
        "email": "test@gmail.com",
        "password": "Test@123"
    };

    describe("User Registration Tests", () => {
        it("registering a new user", async () => {
            const response = await fetch(`${BASE_URL}/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(testUser)
            });

            const data = await response.json();
            expect(response.status).toBe(201);
            expect(data.user).toBeDefined();
            expect(data.user.password).toBeUndefined();
            expect(data.message).toBe("User registered successfully");
        })

        it("should fail when registering with an existing email", async () => {
            const res = await fetch(`${BASE_URL}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(testUser)
            });

            const data = await res.json();
            expect(res.status).toBe(500);
            expect(data.error).toBe("User already exists with this email");
        });
    })

    describe("User Login Tests", () => {
        it("logging in a user", async () => {
            const response = await fetch(`${BASE_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(existingUser)
            })

            const data = await response.json();
            expect(response.status).toBe(200);
            expect(data.message).toBe("User logged in successfully");
            expect(data.tokens.accessToken).toBeDefined();
            expect(data.tokens.refreshToken).toBeDefined();
        })

        it("should fail login with wrong password", async () => {
            const response = await fetch(`${BASE_URL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: "test1@gmail.com",
                    password: "wrongPassword"
                })
            });

            const data = await response.json();
            expect(response.status).toBe(500);
        });

        it("should fail login with non-existing user", async () => {
            const response = await fetch(`${BASE_URL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: "non-existing-email@gmail.com",
                    password: "password"
                })
            });
            const data = await response.json();
            expect(response.status).toBe(500);
            expect(data.error).toBe("User not found");
        })

        it("should fail login with missing credentials", async () => {
            const response = await fetch(`${BASE_URL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: "test@test.com" })
            });

            expect(response.status).toBe(400);
        });
    })

    describe("Token Management Tests", () => {
        let refreshToken: string;
        let accessToken: string;

        beforeAll(async () => {
            const response = await fetch(`${BASE_URL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(existingUser)
            });
            const data = await response.json();
            refreshToken = data.tokens.refreshToken;
            accessToken = data.tokens.accessToken;
        })

        it("should refresh access token successfully", async () => {
            const response = await fetch(`${BASE_URL}/refresh-token`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ refreshToken })
            });
            const data = await response.json();
            expect(response.status).toBe(200);
            expect(data.message).toBe("Token refreshed");
            expect(data.accessToken).toBeDefined();
            expect(data.accessToken).not.toBe(accessToken);
        })

        it("should fail to refresh access token with invalid refresh token", async () => {
            const response = await fetch(`${BASE_URL}/refresh-token`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ refreshToken: "InvalidRefreshToken" })
            });
            const data = await response.json();
            expect(response.status).toBe(401);
            expect(data.error).toBe("Invalid refresh token");
        })

        it("should fail to refresh access token with missing refresh token", async () => {
            const response = await fetch(`${BASE_URL}/refresh-token`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({})
            });
            expect(response.status).toBe(400);
        })

        it("should logout successfully", async() => {
            const response = await fetch(`${BASE_URL}/logout`, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                },
                body: JSON.stringify({ refreshToken })
            });
            const data = await response.json();
            expect(response.status).toBe(200);
            expect(data.message).toBe("User logged out successfully");
        })

        it("should fail to logout without access token", async() => {
            const response = await fetch(`${BASE_URL}/logout`, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ refreshToken })
            });
            expect(response.status).toBe(401);
        })
    })

    describe("Password Reset Tests", () => {
        it("should send forgot password mail successfully", async () => {
            const response = await fetch(`${BASE_URL}/forgot-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: existingUser.email })
            });
            const data = await response.json();
            expect(response.status).toBe(200);
            expect(data.message).toBe("Password reset email sent");
        });

        it("should fail to send forgot password mail with non-existing user", async () => {
            const response = await fetch(`${BASE_URL}/forgot-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: "non-existing-email@gmail.com" })
            });
            const data = await response.json();
            expect(response.status).toBe(500);
            expect(data.error).toBe("User not found");
        })

        it("should fail reset password with invalid token", async () => {
            const response = await fetch(`${BASE_URL}/reset-password/invalid-token`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    password: "newPassword123",
                    confirmPassword: "newPassword123"
                })
            });

            expect(response.status).toBe(500);
        });

        it("should fail reset password with mismatched passwords", async () => {
            const response = await fetch(`${BASE_URL}/reset-password/some-token`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    password: "newPassword123",
                    confirmPassword: "differentPassword123"
                })
            });

            const data = await response.json();
            expect(data.success).toBe(false);
            expect(data.message).toBe("Password and Confirm Password Does not Match");
        });
    })

    describe("OAuth Authentication", () => {
        it("should redirect to Google OAuth", async () => {
            const response = await fetch(`${BASE_URL}/google`, {
                method: "GET",
                redirect: "manual"
            });

            expect(response.status).toBe(302);
            expect(response.headers.get("location")).toContain("accounts.google.com");
        });

        it("should redirect to GitHub OAuth", async () => {
            const response = await fetch(`${BASE_URL}/github`, {
                method: "GET",
                redirect: "manual"
            });

            expect(response.status).toBe(302);
            expect(response.headers.get("location")).toContain("github.com");
        });

        it("should fail with invalid OAuth provider", async () => {
            const response = await fetch(`${BASE_URL}/invalid-provider`, {
                method: "GET"
            });

            expect(response.status).toBe(400);
        });

        it("should fail OAuth callback with invalid code", async () => {
            const response = await fetch(`${BASE_URL}/google/callback?code=invalid-code`, {
                method: "GET"
            });

            expect(response.status).toBe(500);
        });
    });

    describe("Authentication Middleware", () => {
        let validToken: string;

        beforeAll(async () => {
            const loginResponse = await fetch(`${BASE_URL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(existingUser)
            });
            
            const loginData = await loginResponse.json();
            validToken = loginData.tokens.accessToken;
        });

        it("should allow access with valid token", async () => {
            const response = await fetch(`${BASE_URL}/logout`, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${validToken}`
                },
                body: JSON.stringify({ refreshToken: "dummy-token" })
            });

            // Should not return 401 (unauthorized)
            expect(response.status).not.toBe(401);
        });

        it("should deny access without token", async () => {
            const response = await fetch(`${BASE_URL}/logout`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ refreshToken: "dummy-token" })
            });

            expect(response.status).toBe(401);
        });

        it("should deny access with invalid token", async () => {
            const response = await fetch(`${BASE_URL}/logout`, {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Authorization": "Bearer invalid-token"
                },
                body: JSON.stringify({ refreshToken: "dummy-token" })
            });

            expect(response.status).toBe(401);
        });
    });
})

