// playwright-tests/shopping.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Shopping List App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('Login fails with wrong credentials', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('wrong');
    await page.getByPlaceholder('Password').fill('wrong');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });

  test('Login succeeds and shows shopping list', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('admin');
    await page.getByPlaceholder('Password').fill('admin');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Shopping List')).toBeVisible();
  });

  test('Add, edit, delete item', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('admin');
    await page.getByPlaceholder('Password').fill('admin');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByPlaceholder('Add item').fill('Unique Bread');
    await page.getByRole('button', { name: 'Add' }).click();
    await expect(page.getByText('Unique Bread')).toBeVisible();

    const itemRow = page.locator('li', { hasText: 'Unique Bread' });
    await itemRow.getByRole('button', { name: 'Edit' }).first().click();

    await page.locator('input[value="Unique Bread"]').fill('Organic Bread');
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText('Organic Bread')).toBeVisible();

    await page.locator('li', { hasText: 'Organic Bread' }).first().getByRole('button', { name: 'Delete' }).click();
    await expect(page.locator('li', { hasText: 'Organic Bread' })).toHaveCount(0);

  });
});
