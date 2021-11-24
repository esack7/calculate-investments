function calculateInvestment(balanceToInvest) {
  return {
    SWISX: `$${balanceToInvest * 0.25}`,
    SWSSX: `$${balanceToInvest * 0.25}`,
    SWPPX: `$${balanceToInvest * 0.5}`,
  };
}

console.log(calculateInvestment(468.75));
