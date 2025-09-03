// utils/convertPrice.js

// Mock conversion rates (₹1 = X foreign currency)
export const conversionRates = {
  USD: 0.012, // Example: 1 INR = 0.012 USD
  EUR: 0.011,
  GBP: 0.0095,
};

/**
 * Convert INR price string (e.g. "₹200 - ₹500") to selected currency
 * @param {string} priceStr - Price string in INR, e.g. "₹200 - ₹500"
 * @param {string} currency - Target currency (USD, EUR, GBP)
 * @returns {string} - Converted price string, e.g. "2.40 - 6.00 USD"
 */
export const convertPrice = (priceStr, currency = "USD") => {
  const rate = conversionRates[currency] || 1;

  // Remove all non-numeric except "-" and split min/max
  const [minStr, maxStr] = priceStr.replace(/[^\d-]/g, "").split("-");

  const min = parseInt(minStr.trim(), 10);
  const max = parseInt(maxStr.trim(), 10);

  const convertedMin = (min * rate).toFixed(2);
  const convertedMax = (max * rate).toFixed(2);

  return `${convertedMin} - ${convertedMax} ${currency}`;
};
