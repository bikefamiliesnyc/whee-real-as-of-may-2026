const PRICING_DATA = {
  title: 'Monthly Subscription',
  price: 300,
  period: 'month',
  features: [
    { text: 'STORAGE OPTIONS!', href: 'storage-options.html' },
    { text: 'Premium family cargo bike' },
    { text: 'All-inclusive preventative maintenance and repairs' },
    { text: 'Theft protection' },
    { text: 'Free delivery in NYC' },
    { text: 'Month-to-month flexibility' },
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
    ? '<a href="get-started.html" class="cta-button primary full-width">Get Started Today</a>'
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
