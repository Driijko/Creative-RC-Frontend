export default function mapRange(type, curVal, min0, max0, min1, max1) {
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


