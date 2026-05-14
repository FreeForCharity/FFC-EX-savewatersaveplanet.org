/**
 * Test Configuration for savewatersaveplanet.org
 *
 * Centralized expected values for Playwright tests. Update here when site
 * content changes -- no need to touch each spec.
 */

export const testConfig = {
  /**
   * Social Media Links Configuration
   * Used in: tests/social-links.spec.ts
   */
  socialLinks: {
    facebook: {
      url: 'facebook.com/savewatersaveplanet',
      ariaLabel: 'Facebook',
    },
    twitter: {
      url: 'x.com/savewatersaveplanet',
      ariaLabel: 'X (Twitter)',
    },
    instagram: {
      url: 'instagram.com/savewatersaveplanet',
      ariaLabel: 'Instagram',
    },
  },

  /**
   * Copyright Configuration
   * Used in: tests/copyright.spec.ts
   */
  copyright: {
    text: 'Saving Water Saves the Planet',
    searchText: 'Saving Water Saves the Planet',
    linkUrl: 'https://freeforcharity.org',
    linkText: 'Free For Charity',
  },

  /**
   * Logo Configuration
   * Used in: tests/logo.spec.ts and tests/image-loading.spec.ts
   */
  logo: {
    headerAlt: 'Saving Water Saves the Planet',
    navBarAriaLabel: 'Saving Water Saves the Planet home',
  },
}
