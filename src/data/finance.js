export function getAssets() {
  return (
    Number(localStorage.getItem("house") || 6500000) +
    Number(localStorage.getItem("epf") || 329978) +
    Number(localStorage.getItem("fd") || 150000) +
    Number(localStorage.getItem("mf") || 145000)
  );
}

export function getLiabilities() {
  return (
    Number(localStorage.getItem("homeLoan") || 4765000) +
    Number(localStorage.getItem("carLoan") || 657000) +
    Number(localStorage.getItem("personalLoan") || 95642) +
    Number(localStorage.getItem("creditCard") || 89000)
  );
}