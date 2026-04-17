import { test, expect } from '@playwright/test';

test.describe('Gahranox Carvel Website Comprehensive Verification', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to base URL before each test
    await page.goto('/');
  });

  test('header and sidebar navigation functionality', async ({ page }) => {
    // Verify brand text in header
    const brand = page.locator('.brand-text');
    await expect(brand).toBeVisible();
    await expect(brand).toContainText('GAHRANOX');
    await expect(brand).toContainText('CARVEL');

    // Sidebar toggle (on desktop it is open by default as per requirement)
    const sidebar = page.locator('.sidebar');
    await expect(sidebar).toBeVisible();

    // Verify navigation links existence
    const links = sidebar.locator('a');
    await expect(links).toHaveCount(5); // Home, About, Products, Careers, Contact
  });

  test('home page content and slogans', async ({ page }) => {
    // Verify main heading
    await expect(page.locator('.main-heading')).toContainText('Building the future of');
    
    // Verify Bharath letters coloring (Saffron, White, Green)
    const bharathText = page.locator('.bharath-text');
    await expect(bharathText).toBeVisible();
    
    // Verify slogans
    await expect(page.locator('.hindi-slogan')).toContainText('भारत की नयी कहानी');
    await expect(page.locator('.tamil-slogan')).toContainText('பாரதத்தின் புதிய கதை');
    await expect(page.locator('.roman-slogan')).toContainText('Bharath ka naya kahani');

    // Verify CTA button
    const exploreBtn = page.locator('.btn-explore');
    await expect(exploreBtn).toBeVisible();
    await exploreBtn.click();
    await expect(page).toHaveURL(/\/about/);
  });

  test('about page - missions, visions and founders', async ({ page }) => {
    await page.goto('/about');
    
    // Verify sections
    await expect(page.locator('h1')).toContainText('Gahranox Carvel Labs Technologies');
    await expect(page.locator('.belief')).toBeVisible();
    await expect(page.locator('.vision')).toBeVisible();
    await expect(page.locator('.mission')).toBeVisible();

    // Verify founder cards
    const founderCards = page.locator('app-founder-card');
    await expect(founderCards).toHaveCount(3);
    
    // Check for specific founder names
    await expect(founderCards.nth(0)).toContainText('ABDUL FAHEEM A');
    await expect(founderCards.nth(1)).toContainText('Kamesh A');
    await expect(founderCards.nth(2)).toContainText('Vaibhav Ruparel');

    // Verify Big Talks
    await expect(page.locator('.big-talks')).toContainText('The Big Talks');
  });

  test('products page - filters and carousel', async ({ page }) => {
    await page.goto('/products');
    
    // Verify heading
    await expect(page.locator('h2')).toContainText('Our Products');

    // Verify filter sidebar
    const filterBtns = page.locator('.filter-sidebar button');
    await expect(filterBtns).toHaveCount(3); // All, SaaS, Hardware

    // Test SaaS filter
    await filterBtns.filter({ hasText: 'SaaS' }).click();
    await expect(page.locator('.product-card')).toHaveCount(1);
    await expect(page.locator('.product-card')).toContainText('Bill0');

    // Test Hardware filter
    await filterBtns.filter({ hasText: 'Hardware' }).click();
    await expect(page.locator('.product-card')).toHaveCount(1);
    await expect(page.locator('.product-card')).toContainText('64GB GC Pendrive');

    // Test Carousel interaction (requires hover to show buttons)
    const productCard = page.locator('.product-card').first();
    await productCard.hover();
    
    const nextBtn = page.locator('.carousel-nav.next').first();
    await expect(nextBtn).toBeVisible();
    await nextBtn.click(); // Interaction test
  });

  test('careers page - animations and toast', async ({ page }) => {
    await page.goto('/careers');
    
    await expect(page.locator('.glow-text')).toContainText('Ignite Your Potential');
    await expect(page.locator('.coming-soon-card')).toContainText('Positions Opening Soon');

    // Test Notify Me interaction
    const notifyBtn = page.locator('.notify-btn');
    await notifyBtn.click();
    
    // Check for toast visibility
    const toast = page.locator('.toast-notify');
    await expect(toast).toBeVisible();
    await expect(toast).toContainText('Thanks!');
  });

  test('contact page details', async ({ page }) => {
    await page.goto('/contact');
    
    const contactInfo = page.locator('.contact-info');
    await expect(contactInfo).toContainText('Chennai, IN');
    await expect(contactInfo).toContainText('support@gahranoxcarvel.in');
    await expect(contactInfo).toContainText('9962854042');
  });

  test('rocket loader visibility', async ({ page }) => {
    // Reload to see loader
    await page.goto('/');
    const loader = page.locator('app-rocket-loader');
    // Since it fades out, it should at least be present in the DOM initially
    await expect(loader).toBeAttached();
  });
});
