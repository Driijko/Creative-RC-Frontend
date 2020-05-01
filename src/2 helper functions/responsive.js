function mapRange(type, curVal, min0, max0, min1, max1) {
  if (type === "proportional") {
    if (curVal <= min0) {
      return min1;
    }
    else if (curVal >= max0) {
      return max1;
    }
    else {
      const range0 = max0 - min0;
      const range1 = max1 - min1;
      const curValReduced = curVal - min0;
      return min1 + (range1 * (curValReduced/range0));
    }
  }
  else if (type === "inverse") {
    if (curVal <= min0) {
      return max1;
    }
    else if (curVal >= max0) {
      return min1;
    }
    else {
      const range0 = max0 - min0;
      const range1 = max1 - min1;
      const curValReduced = curVal - min0;
      return max1 - (range1 * (curValReduced/range0));
    }
  }
}

export default function responsive(dimension, maxDimensionSize, minSize, maxSize) {
  let dim = 0;
  if (dimension === "biggest") {
    if (window.innerWidth >= window.innerHeight) {
      dim = window.innerWidth;
    }
    else {
      dim = window.innerHeight;
    }
  }
  else if (dimension === "width") {
    dim = window.innerWidth;
  }
  else {
    dim = window.innerHeight;
  }
  const outcome = mapRange("inverse", dim, 320, maxDimensionSize, minSize, maxSize);
  console.log(outcome);
  return outcome;
}
