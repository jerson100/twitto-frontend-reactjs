const differenceDates = (d1, d2) => {
  const d1_Milis = d1.getTime();
  const d2_Milis = d2.getTime();
  const diff = d2_Milis - d1_Milis;
  const segs = parseInt((diff / 1000) % 60);
  const minutes = parseInt((diff / (60 * 1000)) % 60);
  const hours = parseInt((diff / (60 * 60 * 1000)) % 24);
  const days = parseInt((diff / (24 * 60 * 60 * 1000)) % 30);
  const years = parseInt(diff / (24 * 60 * 60 * 1000) / (30 * 12));
  return {
    years,
    days,
    hours,
    minutes,
    segs,
  };
};

export default { differenceDates };
