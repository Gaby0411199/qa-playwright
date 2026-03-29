const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('login válido', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goTo();
  await login.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
});

test('login inválido', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goTo();
  await login.login('wrong', 'wrong');

  await expect(page.locator(login.error)).toBeVisible();
});