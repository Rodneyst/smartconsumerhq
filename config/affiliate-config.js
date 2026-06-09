// Centralized affiliate configuration
// Edit network IDs and status flags here only — never hardcode in components or pages

var AFFILIATE_CONFIG = {
  amazon: {
    storeId: 'smartconsu0ca-20',
    status: 'active',
    baseUrl: 'https://www.amazon.com/dp/',
    tagParam: 'tag'
  },
  cj: {
    propertyId: '101779331',
    status: 'active'
  },
  walmart: {
    status: 'pending'
  },
  impact: {
    status: 'disabled'
  }
};

if (typeof module !== 'undefined') module.exports = AFFILIATE_CONFIG;
