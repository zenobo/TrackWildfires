module.exports = {
  abbreviateNumber: (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return `${(n / 1e3).toFixed(1)}K`;
    if (n >= 1e6 && n < 1e9) return `${(n / 1e6).toFixed(1)}M`;
    return n;
  },
  cleanName: (name) => (
    name.replace(/ /g, '-')
  ),
  entryDate: (fromDate) => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dt = new Date(Number(fromDate));
    return `${monthNames[dt.getMonth()]} ${dt.getDate()}/${dt.getFullYear()}`;
  },
  entrySize: (size) => (
    size.toLocaleString()
  ),
};
