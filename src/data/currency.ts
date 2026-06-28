// ============================================================
// AFROPOSH AFRITUDE — CURRENCY ENGINE
// Base: NGN. Rates are manually controlled margins
// (not live API — Joyce controls the margin)
// ============================================================

export type Currency = 'NGN' | 'USD' | 'GBP' | 'FCFA' | 'GHS';

export const RATES: Record<Currency, number> = {
  NGN: 1,
  USD: 1 / 1550,
  GBP: 1 / 1950,
  FCFA: 2.6,
  GHS: 1000 / 10300,
};

export const SYMBOLS: Record<Currency, string> = {
  NGN: '₦',
  USD: '$',
  GBP: '£',
  FCFA: 'FCFA ',
  GHS: 'GHS ',
};

export const CURRENCY_NAMES: Record<Currency, string> = {
  NGN: 'Nigerian Naira',
  USD: 'US Dollar',
  GBP: 'British Pound',
  FCFA: 'CFA Franc',
  GHS: 'Ghanaian Cedi',
};

export function formatPrice(naira: number, currency: Currency = 'NGN'): string {
  const converted = naira * RATES[currency];
  const sym = SYMBOLS[currency];
  if (currency === 'NGN' || currency === 'FCFA') {
    return sym + Math.round(converted).toLocaleString();
  }
  return sym + Math.round(converted).toLocaleString();
}

export function getAllPrices(naira: number): Record<Currency, string> {
  return {
    NGN: formatPrice(naira, 'NGN'),
    USD: formatPrice(naira, 'USD'),
    GBP: formatPrice(naira, 'GBP'),
    FCFA: formatPrice(naira, 'FCFA'),
    GHS: formatPrice(naira, 'GHS'),
  };
}

// Shipping prices in NGN
export const SHIPPING = {
  domestic_standard: { label: 'Standard Delivery', days: '3–5 business days', price: 3500 },
  domestic_express: { label: 'Express (DHL)', days: '24–72 hours', price: 8000 },
  international: { label: 'International (Aramex / DHL)', days: '5–10 business days', price: 25000 },
  pickup: { label: 'Pickup — Lagos / Yaoundé', days: 'Ready in 24 hours', price: 0 },
};
