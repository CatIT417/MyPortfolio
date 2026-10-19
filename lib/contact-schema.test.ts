import { describe, expect, it } from "vitest";
import { contactSchema } from "./contact-schema";

const valid = {
  name: "Test User",
  email: "test@example.com",
  subject: "Hello there",
  message: "This is a perfectly valid message.",
};

describe("contactSchema", () => {
  it("accepts a valid payload", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("trims whitespace from all fields", () => {
    const parsed = contactSchema.parse({
      name: "  Aakash  ",
      email: "  test@example.com  ",
      subject: "  Hi  ",
      message: "  Hello world, this is long enough.  ",
    });
    expect(parsed.name).toBe("Aakash");
    expect(parsed.email).toBe("test@example.com");
    expect(parsed.subject).toBe("Hi");
    expect(parsed.message).toBe("Hello world, this is long enough.");
  });

  it("rejects an empty name", () => {
    const result = contactSchema.safeParse({ ...valid, name: "   " });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid email", () => {
    const result = contactSchema.safeParse({ ...valid, email: "not-an-email" });
    expect(result.success).toBe(false);
  });

  it("rejects a message shorter than 10 characters", () => {
    const result = contactSchema.safeParse({ ...valid, message: "too short" });
    expect(result.success).toBe(false);
  });

  it("rejects a message longer than 5000 characters", () => {
    const result = contactSchema.safeParse({ ...valid, message: "a".repeat(5001) });
    expect(result.success).toBe(false);
  });

  it("rejects a name longer than 100 characters", () => {
    const result = contactSchema.safeParse({ ...valid, name: "a".repeat(101) });
    expect(result.success).toBe(false);
  });

  it("rejects a missing field", () => {
    const { subject, ...withoutSubject } = valid;
    expect(contactSchema.safeParse(withoutSubject).success).toBe(false);
    expect(subject).toBeTruthy();
  });
});
