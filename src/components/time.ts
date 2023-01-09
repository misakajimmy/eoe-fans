export function secondToDate(seconds: number) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds / 60 % 60));
  const s = Math.floor((seconds % 60));
  let res = '';
  if (h !== 0) {
    res += h + ':';
  }
  res += m + ':';
  res += s;
  return res;
}
