import { test, expect } from '@playwright/test';

test('verify header, home and contact changes', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.waitForTimeout(2000);

  // Header
  const headerBrand = page.locator('.brand-text');
  await expect(headerBrand).toBeVisible();
  await expect(headerBrand).toHaveCSS('color', 'rgb(255, 255, 255)');
  await page.screenshot({ path: 'verification/header_white.png' });

  // Home slogans
  const hindi = page.locator('.hindi-slogan');
  const tamil = page.locator('.tamil-slogan');
  await expect(hindi).toHaveCSS('color', 'rgb(255, 255, 255)');
  await expect(tamil).toHaveCSS('color', 'rgb(255, 255, 255)');
  await page.screenshot({ path: 'verification/home_white_slogans.png' });

  // Contact page
  await page.goto('http://localhost:4200/contact');
  await page.waitForTimeout(2000);
  const contactInfo = page.locator('.contact-info');
  await expect(contactInfo).toContainText('Chennai');
  await expect(contactInfo).toContainText('support@gahranoxcarvel.in');
  await expect(contactInfo).toContainText('9962854042');
  await page.screenshot({ path: 'verification/contact_white.png' });
});
