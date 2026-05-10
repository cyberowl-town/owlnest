import { createPage, setup } from "@nuxt/test-utils/e2e";
import { describe, expect, it } from "vitest";

describe("smoke test", async () => {
  await setup({
    build: true,
    server: true,
    serverStartTimeout: 5 * 1000,
  });

  it(
    "index page 'kamito was here' has proper class with proper CSS",
    {
      timeout: 30_000,
    },
    async () => {
      expect.hasAssertions();

      const page = await createPage("/");

      const elem = page.getByText("Kamito was here");
      const className = await elem.getAttribute("class");

      expect(className).toBe("text-xl");
    },
  );
});
