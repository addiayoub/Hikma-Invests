import { getTotalOfArrayObject } from "./getTotalOfData";

export const getTotalOfCategory = (cat) => {
  let total = 0;
  for (const _ of cat) {
    total += getTotalOfArrayObject(_.data);
  }
  return total.toFixed(2);
};

export const tauxEpargne = (revenus, investissements) => {
  const totalRev = getTotalOfArrayObject(revenus);
  const totalInv = getTotalOfCategory(investissements);
  const t = +((totalInv / totalRev) * 100).toFixed(2);
  if (!isNaN(t)) {
    return t + "%";
  }
  return 0 + "%";
};

export const tauxEpargnePossible = (revenus, depences) => {
  const totalRev = getTotalOfArrayObject(revenus);
  const totalDep = getTotalOfCategory(depences);
  const t = +(((totalRev - totalDep) / totalRev) * 100).toFixed(2);
  if (!isNaN(t)) {
    return t + "%";
  }

  return 0 + "%";
};

export const rest = (revenus, investissements, depences) => {
  const r = revenus - investissements - depences;
  if (r < 0) {
    return `vous dépassez votre budget de ${r} MAD`;
  } else if (r > 0) {
    return `il vous reste ${addSpacesToNumber(r)} MAD  disponible`;
  } else {
    return "";
  }
};

export function addSpacesToNumber(number) {
  // Convert the number to a string
  let numberString = number.toString();

  // Use a regular expression to insert spaces
  numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return numberString;
}
