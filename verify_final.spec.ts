import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 1280, height: 720 } });

test('verify gahranox carvel website', async ({ page }) => {
  // Go to the home page
  await page.goto('http://localhost:4200/');

  // Wait for loader to disappear (max 3.5s as per component logic)
  await page.waitForTimeout(3500);

  // Check title
  await expect(page).toHaveTitle(/Gahranox Carvel/);

  // Take screenshot of home
  await page.screenshot({ path: 'final_home.png' });

  // Verify sidebar is open by default
  const sidebar = page.locator('app-sidebar-menu');
  await expect(sidebar).toBeVisible();

  // Navigate to About
  await page.click('text=About Us');
  await expect(page).toHaveURL(/about/);
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'final_about.png' });

  // Navigate to Products
  await page.click('text=Products');
  await expect(page).toHaveURL(/products/);
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'final_products.png' });

  // Navigate to Careers
  await page.click('text=Careers');
  await expect(page).toHaveURL(/careers/);
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'final_careers.png' });

  // Navigate to Contact
  await page.click('text=Contact Us');
  await expect(page).toHaveURL(/contact/);
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'final_contact.png' });
});
