function statusCalculator(scoreType) {
  if (scoreType >= 1 && scoreType <= 5) {
    return "Prudent";
  } else if (scoreType > 5 && scoreType <= 10) {
    return "Modere";
  } else if (scoreType > 10 && scoreType <= 15) {
    return "Dynamic";
  } else if (scoreType > 15 && scoreType <= 20) {
    return "Agressif";
  }
}

export default statusCalculator;
