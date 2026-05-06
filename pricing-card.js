const PRICING_DATA = {
  title: 'Monthly Subscription',
  price: 300,
  period: 'month',
  features: [
    { text: 'Premium family cargo bike' },
    { text: 'Insurance & theft protection' },
    { text: 'Normal maintenance and repairs' },
    { text: 'Free delivery in Brooklyn, Manhattan, and Queens' },
    { text: 'Month-to-month, cancel anytime' },
    { text: 'Option to purchase' },
  ],
};

function renderPricingCard(containerId, options) {
  var container = document.getElementById(containerId);
  if (!container) return;

  var featuresHtml = PRICING_DATA.features.map(function(f) {
    var inner = f.href
      ? '<a href="' + f.href + '" style="color: var(--primary-color); text-decoration: none; font-weight: 600;">\u2713 ' + f.text + '</a>'
      : '\u2713 ' + f.text;
    return '<li>' + inner + '</li>';
  }).join('\n                    ');

  var ctaHtml = (options && options.showCta)
    ? '<a href="https://cal.com/ridewhee/whee-test-ride" class="cta-button primary full-width">Schedule a Test Ride</a>'
    : '';

  container.innerHTML =
    '<div class="pricing-card">' +
      '<div class="pricing-header">' +
        '<h3>' + PRICING_DATA.title + '</h3>' +
        '<div style="margin-bottom: 0.5rem; color: var(--text-light); font-size: 0.875rem;">(starts at)</div>' +
        '<div class="price-display">' +
          '<span class="currency">$</span>' +
          '<span class="amount">' + PRICING_DATA.price + '</span>' +
          '<span class="period">/' + PRICING_DATA.period + '</span>' +
        '</div>' +
      '</div>' +
      '<ul class="pricing-features">' +
        featuresHtml +
      '</ul>' +
      ctaHtml +
    '</div>';
}
