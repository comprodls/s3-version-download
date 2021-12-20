function getFormattedTime() {
  const today = new Date();
  const y = today.getUTCFullYear();
  const m = today.getUTCMonth() + 1;
  const d = today.getUTCDate();
  const h = today.getUTCHours();
  const mi = today.getUTCMinutes();
  const s = today.getUTCSeconds();
  return y + "-" + m + "-" + d + "-" + h + "-" + mi + "-" + s;
}

module.exports = { getFormattedTime };