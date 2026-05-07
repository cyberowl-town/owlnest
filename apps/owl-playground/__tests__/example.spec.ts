import { expect, test } from "@playwright/test";

test.describe("smoke", () => {
  test("/ works", async ({ page }) => {
    await page.goto("/");

    const elem = page.getByText("Kamito was here");

    await expect(elem).toHaveClass("text-xl");
  });
});
