import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { isRateLimited } from "./rate-limit";

describe("isRateLimited", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-10-04T10:00:00Z"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("allows up to 5 requests per IP within a minute", () => {
    const results = Array.from({ length: 5 }, () => isRateLimited("schema-ok-1"));
    expect(results).toEqual([false, false, false, false, false]);
    expect(isRateLimited("schema-ok-1")).toBe(true);
  });

  it("tracks IPs independently", () => {
    for (let i = 0; i < 5; i++) isRateLimited("schema-bulk");
    expect(isRateLimited("schema-bulk")).toBe(true);
    expect(isRateLimited("schema-fresh")).toBe(false);
  });

  it("resets after the 60s window", () => {
    for (let i = 0; i < 5; i++) isRateLimited("schema-window");
    expect(isRateLimited("schema-window")).toBe(true);

    vi.advanceTimersByTime(59_000);
    expect(isRateLimited("schema-window")).toBe(true);

    vi.advanceTimersByTime(2_000);
    expect(isRateLimited("schema-window")).toBe(false);
  });

  it("does not block before the limit is reached", () => {
    expect(isRateLimited("schema-under")).toBe(false);
    expect(isRateLimited("schema-under")).toBe(false);
  });
});
