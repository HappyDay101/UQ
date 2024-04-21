import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Enter site
  await page.goto('http://localhost:3000/');
  // Find login button
  await page.getByRole('link', { name: 'Log in' }).click();
  // Find email field and enter right info
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('abc@abc.com');
  await page.getByLabel('Email').press('Tab');
    // Find password field and enter right info
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'Log in' }).click();
});
