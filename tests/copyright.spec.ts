import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Copyright Notice Tests
 *
 * The footer copyright is rendered as text; we verify it shows the brand name
 * and the current year.
 */

test.describe('Footer Copyright Notice', () => {
  test('should display copyright notice with current year', async ({ page }) => {
    await page.goto('/')
    const currentYear = new Date().getFullYear()

    const footerText = page.locator(`footer p:has-text("${testConfig.copyright.searchText}")`)
    await expect(footerText).toBeVisible()
    await expect(footerText).toContainText(`${currentYear}`)
    await expect(footerText).toContainText(testConfig.copyright.text)
  })

  test('should link to Free For Charity in the copyright notice', async ({ page }) => {
    await page.goto('/')
    const link = page.locator(`footer a[href="${testConfig.copyright.linkUrl}"]`)
    await expect(link).toBeVisible()
    await expect(link).toContainText(testConfig.copyright.linkText)
  })
})
