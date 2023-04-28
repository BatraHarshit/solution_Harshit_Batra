function filterClicks(clicks) {
  let freq = {};
  clicks.forEach((click) => {
    if (freq[click.ip]) {
      freq[click.ip]++;
    } else {
      freq[click.ip] = 1;
    }
  });
  for (let ip in freq) {
    if (freq[ip] > 10) {
      clicks = clicks.filter((click) => click.ip !== ip);
    }
  }
  return clicks;
}

function findResultSet(clicks) {
  let array = filterClicks(clicks); //filtering Input Array more than 10 clicks for an IP
  let period = new Array(24); // Hash Map for storing most expensive clicks at a particular hour.
  let hour = new Date(array[0].timestamp).getHours();
  period[hour] = [array[0]];

  for (let i = 1; i < array.length; i++) {
    let hour = new Date(array[i].timestamp).getHours();
    let sameIpIndex = period[hour]?.findIndex(
      (click) => click.ip === array[i].ip
    );
    if (sameIpIndex > -1) {
      if (period[hour][sameIpIndex].amount < array[i].amount) {
        period[hour][sameIpIndex] = array[i];
      } else if (period[hour][sameIpIndex].amount === array[i].amount) {
        period[hour][sameIpIndex] =
          period[hour][sameIpIndex].timestamp > array[i].timestamp
            ? array[i]
            : period[hour][sameIpIndex];
      }
    } else {
      period[hour] = period[hour] ? [...period[hour], array[i]] : [array[i]];
    }
  }
  return period.flat(Infinity);
}

module.exports = {
  findSubset: findResultSet,
};
