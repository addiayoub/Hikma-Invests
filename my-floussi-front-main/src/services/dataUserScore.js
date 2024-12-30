/**
 * This function calculates a score based on the provided prudent, moderate, and aggressive values.
 * It uses a reference data set and calculates correlations with the provided data.
 * The score is determined by the index of the highest correlation in the data set.
 *
 * @param {number} predunt - The prudent value.
 * @param {number} modere - The moderate value.
 * @param {number} agressif - The aggressive value.
 * @returns {number} The calculated score, rounded up to the nearest integer.
 */

function dataUserScore(predunt, modere, agressif) {
  // Reference data
  const referenceData = [
    ((predunt - 150) / (750 - 150)) * 50,
    ((modere - 150) / (750 - 150)) * 50,
    ((agressif - 150) / (750 - 150)) * 50,
  ];

  // Provided data
  const data = [
    [45, 5, 0],
    [40, 10, 0],
    [40, 0, 10],
    [30, 20, 0],
    [30, 10, 10],
    [30, 0, 20],
    [20, 30, 0],
    [20, 20, 10],
    [20, 10, 20],
    [5, 40, 5],
    [20, 0, 30],
    [10, 40, 0],
    [10, 30, 10],
    [10, 20, 20],
    [10, 10, 30],
    [10, 0, 40],
    [0, 40, 10],
    [0, 30, 20],
    [0, 20, 30],
    [0, 10, 40],
    [0, 5, 45],
  ];

  // Calculate correlations
  const correlations = data.map((row) => {
    const covariance = (referenceData, row) => {
      const mean1 =
        referenceData.reduce((sum, val) => sum + val, 0) / referenceData.length;
      const mean2 = row.reduce((sum, val) => sum + val, 0) / row.length;
      const product = referenceData
        .map((val, i) => (val - mean1) * (row[i] - mean2))
        .reduce((sum, val) => sum + val, 0);
      return product / (referenceData.length - 1);
    };
    const variance1 =
      referenceData.reduce(
        (sum, val) =>
          sum +
          Math.pow(
            val -
              referenceData.reduce((sum, val) => sum + val, 0) /
                referenceData.length,
            2,
          ),
        0,
      ) /
      (referenceData.length - 1);
    const variance2 =
      row.reduce(
        (sum, val) =>
          sum +
          Math.pow(
            val - row.reduce((sum, val) => sum + val, 0) / row.length,
            2,
          ),
        0,
      ) /
      (row.length - 1);
    return covariance(referenceData, row) / Math.sqrt(variance1 * variance2);
  });

  let score = correlations.reduce(
    (max, current, index) => (current > correlations[max] ? index : max),
    0,
  );

  return Math.ceil(score / 2);
}

export default dataUserScore;
