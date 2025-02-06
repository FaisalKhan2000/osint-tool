import { describe, it, expect } from "vitest";

import {
  validateCompany,
  validateEmail,
  validateUsername,
} from "../src/validators/inputValidator.js";

describe("OSINT Service", () => {
  it("should validate email format", () => {
    const validEmail = "test@example.com";
    const invalidEmail = "test@.com";
    expect(validateEmail(validEmail)).toBe(true);
    expect(validateEmail(invalidEmail)).toBe(false);
  });

  it("should validate username format", () => {
    const validUsername = "faisalkhan2000";
    const invaldUsername = "faisal_$";

    expect(validateUsername(validUsername)).toBe(true);
    expect(validateUsername(invaldUsername)).toBe(false);
  });

  it("should validate company format", () => {
    const validCompanyname = "company";
    const invaldCompanyname = "";

    expect(validateCompany(validCompanyname)).toBe(true);
    expect(validateCompany(invaldCompanyname)).toBe(false);
  });
});
