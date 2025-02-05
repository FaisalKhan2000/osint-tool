import { describe, it, expect } from "@jest/globals";
import { emailLookup } from "../src/services/osintService.js";
import { validateEmail } from "../src/validators/inputValidator.js";

describe("OSINT Service", () => {
  it("should validate email format", () => {
    const validEmail = "test@example.com";
    const invalidEmail = "test@.com";
    expect(validateEmail(validEmail)).toBe(true);
    expect(validateEmail(invalidEmail)).toBe(false);
  });

  it("should perform email lookup", async () => {
    const email = "test@example.com";
    const result = await emailLookup(email);
    expect(result).toHaveProperty("email", email);
    expect(result).toHaveProperty("domain");
    expect(result).toHaveProperty("socialProfiles");
  });
});
