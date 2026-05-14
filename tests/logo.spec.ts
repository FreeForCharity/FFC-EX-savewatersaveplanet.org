import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Logo Visibility Tests
 *
 * Verify the header logo is present and has the expected alt text.
 */

test.describe('Logo and Image Visibility', () => {
  test('should display logo in header', async ({ page }) => {
    await page.goto('/')
    const headerLogo = page.locator(`header a[href="/"] img[alt="${testConfig.logo.headerAlt}"]`)
    await expect(headerLogo).toBeVisible()
    await expect(headerLogo).toHaveAttribute('alt', testConfig.logo.headerAlt)
  })

  test('header logo should have a src attribute', async ({ page }) => {
    await page.goto('/')
    const headerLogo = page.locator(`header a[href="/"] img[alt="${testConfig.logo.headerAlt}"]`)
    await expect(headerLogo).toBeVisible()
    const src = await headerLogo.getAttribute('src')
    expect(src).toBeTruthy()
  })
})
