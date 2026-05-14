import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Image Loading Tests
 *
 * Verify the header logo image loads successfully and that the home page
 * shows at least one hero/gallery image.
 */

test.describe('Image Loading', () => {
  test('header logo should load and be visible', async ({ page }) => {
    await page.goto('/')
    const headerLogo = page.locator(`header a[href="/"] img[alt="${testConfig.logo.headerAlt}"]`)
    await expect(headerLogo).toBeVisible()
    const src = await headerLogo.getAttribute('src')
    expect(src).toBeTruthy()
  })

  test('home page should render at least one image', async ({ page }) => {
    await page.goto('/')
    const images = page.locator('img')
    const count = await images.count()
    expect(count).toBeGreaterThan(1)
  })
})
