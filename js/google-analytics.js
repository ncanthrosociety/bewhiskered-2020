/**
 * Configuration for google analytics service.
 *
 * @module google-analytics
 */

/**
 * Add a gtag for google analytics.
 */
function gtag () { window.dataLayer.push(arguments) }

/**
 * Run setup in a self invoking function.
 */
(() => {
  window.dataLayer = window.dataLayer || []
  gtag('js', new Date())
  gtag('config', 'G-PMXX1RWYYL')
})()
