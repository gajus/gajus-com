import { expect, test } from '#app/e2e/test';

test('redirects to /blog', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveURL('/blog');
});
