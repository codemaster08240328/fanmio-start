import currencies from '../mock/currency.json'

export function getCurrencySymbol(code) {
  return currencies[code] ? currencies[code].symbol_native : code;
}
