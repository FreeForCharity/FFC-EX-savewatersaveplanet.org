import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Social Links Tests
 *
 * Verify the footer contains the expected social media icons (Facebook, X, Instagram)
 * for savewatersaveplanet.org.
 */

test.describe('Footer Social Links', () => {
  test('should not contain Google+ social link', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('footer a[href*="plus.google.com"]')).toHaveCount(0)
  })

  test('should display Facebook, X, and Instagram social links', async ({ page }) => {
    await page.goto('/')

    const facebookLink = page.locator(`footer a[href*="${testConfig.socialLinks.facebook.url}"]`)
    await expect(facebookLink).toBeVisible()
    await expect(facebookLink).toHaveAttribute(
      'aria-label',
      testConfig.socialLinks.facebook.ariaLabel
    )

    const twitterLink = page.locator(`footer a[href*="${testConfig.socialLinks.twitter.url}"]`)
    await expect(twitterLink).toBeVisible()
    await expect(twitterLink).toHaveAttribute(
      'aria-label',
      testConfig.socialLinks.twitter.ariaLabel
    )

    const instagramLink = page.locator(`footer a[href*="${testConfig.socialLinks.instagram.url}"]`)
    await expect(instagramLink).toBeVisible()
    await expect(instagramLink).toHaveAttribute(
      'aria-label',
      testConfig.socialLinks.instagram.ariaLabel
    )
  })

  test('should have exactly 3 social media icons', async ({ page }) => {
    await page.goto('/')

    const socialMediaLinks = page.locator(
      `footer a[aria-label="${testConfig.socialLinks.facebook.ariaLabel}"], footer a[aria-label="${testConfig.socialLinks.twitter.ariaLabel}"], footer a[aria-label="${testConfig.socialLinks.instagram.ariaLabel}"]`
    )
    await expect(socialMediaLinks).toHaveCount(3)
  })
})
