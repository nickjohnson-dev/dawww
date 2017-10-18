export function measuresToTime(measures) {
  return `(${Math.floor(measures * 32)} * 32n)`;
}
