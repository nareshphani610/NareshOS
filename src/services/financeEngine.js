export function calculateFinancials(
  assets,
  liabilities
) {

  const totalAssets =
    Number(assets.house || 0) +
    Number(assets.epf || 0) +
    Number(assets.fd || 0) +
    Number(assets.mf || 0);

  const totalDebt =
    Number(liabilities.homeLoan || 0) +
    Number(liabilities.carLoan || 0) +
    Number(liabilities.personalLoan || 0) +
    Number(liabilities.creditCard || 0);

  const netWorth =
    totalAssets -
    totalDebt;

  return {
    totalAssets,
    totalDebt,
    netWorth,
  };
}

export function calculateWealthScore(
  financials
) {

  let score = 0;

  if (
    financials.netWorth >
    2000000
  )
    score += 25;
  else if (
    financials.netWorth >
    1000000
  )
    score += 15;

  if (
    financials.totalDebt <
    3000000
  )
    score += 25;
  else if (
    financials.totalDebt <
    6000000
  )
    score += 15;
  else
    score += 5;

  return score;
}