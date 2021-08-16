/**
 *
 * @param {*} data
 * @param {*} prefix
 *
 * Convert price integer value into string devided by (.) and give prefix IDR
 *
 * How to use -> convertToIdr(10000, "Rp")
 * Result -> Rp 10.000
 *
 */
export const convertToIdr = (data = 0, prefix = "IDR") => {
  return prefix + " " + data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

/**
 *
 * @param {*} data
 *
 * Convert integer value into string devided by (.)
 *
 */
export const convertToKilo = (data = 0) => {
  return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

/**
 *
 * @param {*} data
 *
 *  getFullYear() - Returns the 4-digit year
 *  getMonth() - Returns a zero-based integer (0-11) representing the month of the year.
 *  getDate() - Returns the day of the month (1-31).
 *  getDay() - Returns the day of the week (0-6). 0 is Sunday, 6 is Saturday.
 *  getHours() - Returns the hour of the day (0-23).
 *  getMinutes() - Returns the minute (0-59).
 *  getSeconds() - Returns the second (0-59).
 *  getMilliseconds() - Returns the milliseconds (0-999).
 *  getTimezoneOffset() - Returns the number of minutes between the machine local time and
 *
 **/

export const getTimezone = (format) => {
  switch (format) {
    case "Asia/Makassar":
      return "WITA";
    case "Asia/Jayapura":
      return "WIT";
    default:
      return "WIB";
  }
};

/**
 *
 * @param {*} data
 * @param {*} format
 * @param {*} utc
 *
 * Formatting datetime javascript value into the design needed
 *
 * How to use -> formatDateTime(data, "dd MMM y")
 * Result -> 12 Jun 2020
 *
 */
export const formatDateTime = (data, format, utc = "") => {
  const date = new Date(data);

  let MMMM = [
    "\x00",
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  let MMM = [
    "\x01",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agt",
    "Sep",
    "Oct",
    "Nov",
    "Des",
  ];

  let dddd = [
    "\x02",
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];

  let ddd = ["\x03", "Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

  const ii = (i, len) => {
    let s = i + "";
    len = len || 2;
    while (s.length < len) s = "0" + s;
    return s;
  };

  let y = utc ? date.getUTCFullYear() : date.getFullYear();
  format = format.replace(/(^|[^\\])yyyy+/g, "$1" + y);
  format = format.replace(/(^|[^\\])yy/g, "$1" + y.toString().substr(2, 2));
  format = format.replace(/(^|[^\\])y/g, "$1" + y);

  let M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
  format = format.replace(/(^|[^\\])MMMM+/g, "$1" + MMMM[0]);
  format = format.replace(/(^|[^\\])MMM/g, "$1" + MMM[0]);
  format = format.replace(/(^|[^\\])MM/g, "$1" + ii(M));
  format = format.replace(/(^|[^\\])M/g, "$1" + M);

  let d = utc ? date.getUTCDate() : date.getDate();
  format = format.replace(/(^|[^\\])dddd+/g, "$1" + dddd[0]);
  format = format.replace(/(^|[^\\])ddd/g, "$1" + ddd[0]);
  format = format.replace(/(^|[^\\])dd/g, "$1" + ii(d));
  format = format.replace(/(^|[^\\])d/g, "$1" + d);

  let H = utc ? date.getUTCHours() : date.getHours();
  format = format.replace(/(^|[^\\])HH+/g, "$1" + ii(H));
  format = format.replace(/(^|[^\\])H/g, "$1" + H);

  let h = H > 12 ? H - 12 : H === 0 ? 12 : H;
  format = format.replace(/(^|[^\\])hh+/g, "$1" + ii(h));
  format = format.replace(/(^|[^\\])h/g, "$1" + h);

  let m = utc ? date.getUTCMinutes() : date.getMinutes();
  format = format.replace(/(^|[^\\])mm+/g, "$1" + ii(m));
  format = format.replace(/(^|[^\\])m/g, "$1" + m);

  let s = utc ? date.getUTCSeconds() : date.getSeconds();
  format = format.replace(/(^|[^\\])ss+/g, "$1" + ii(s));
  format = format.replace(/(^|[^\\])s/g, "$1" + s);

  let f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
  format = format.replace(/(^|[^\\])fff+/g, "$1" + ii(f, 3));
  f = Math.round(f / 10);
  format = format.replace(/(^|[^\\])ff/g, "$1" + ii(f));
  f = Math.round(f / 10);
  format = format.replace(/(^|[^\\])f/g, "$1" + f);

  let T = H < 12 ? "AM" : "PM";
  format = format.replace(/(^|[^\\])TT+/g, "$1" + T);
  format = format.replace(/(^|[^\\])T/g, "$1" + T.charAt(0));

  let t = T.toLowerCase();
  format = format.replace(/(^|[^\\])tt+/g, "$1" + t);
  format = format.replace(/(^|[^\\])t/g, "$1" + t.charAt(0));

  let tz = -date.getTimezoneOffset();
  let K = utc || !tz ? "Z" : tz > 0 ? "+" : "-";

  if (!utc) {
    tz = Math.abs(tz);
    let tzHrs = Math.floor(tz / 60);
    let tzMin = tz % 60;
    K += ii(tzHrs) + ":" + ii(tzMin);
  }

  format = format.replace(/(^|[^\\])K/g, "$1" + K);

  let day = (utc ? date.getUTCDay() : date.getDay()) + 1;

  format = format.replace(new RegExp(dddd[0], "g"), dddd[day]);
  format = format.replace(new RegExp(ddd[0], "g"), ddd[day]);

  format = format.replace(new RegExp(MMMM[0], "g"), MMMM[M]);
  format = format.replace(new RegExp(MMM[0], "g"), MMM[M]);

  format = format.replace(/\\(.)/g, "$1");

  return format;
};

/**
 *
 * @param {*} data
 *
 * Convert times into times ago.
 *
 */
export const convertTimeAgo = (data) => {
  const now = new Date();
  const past = new Date(data);
  const elapsed = now - past;

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 365 * day;

  if (elapsed < minute) {
    return "recently";
  } else if (elapsed < hour) {
    return Math.round(elapsed / minute) + " minutes ago";
  } else if (elapsed < day) {
    return Math.round(elapsed / hour) + " hours ago";
  } else if (elapsed < month) {
    return Math.round(elapsed / day) + " days ago";
  } else if (elapsed < year) {
    return Math.round(elapsed / month) + " bulan yang lalu";
  } else {
    return Math.round(elapsed / year) + " years ago";
  }
};

/**
 *
 * @param {*} start
 * @param {*} end
 * @param {*} into
 *
 * Convert time start and time end into duration time
 * and return it by different type
 *
 * format start & end = "00:00"
 * type = showcase / small_showcase
 *
 */
export const convertToDuration = (start, end, type) => {
  start = start.split(":");
  end = end.split(":");

  let startDate = new Date(0, 0, 0, start[0], start[1], 0);
  let endDate = new Date(0, 0, 0, end[0], end[1], 0);
  let diff = endDate.getTime() - startDate.getTime();
  let hours = Math.floor(diff / 1000 / 60 / 60);
  diff -= hours * 1000 * 60 * 60;
  let minutes = Math.floor(diff / 1000 / 60);

  // If 24 hours format
  if (hours < 0) {
    hours = hours + 24;
  }

  switch (type) {
    case "showcase":
      return `${hours}jam ${(minutes <= 9 ? "0" : "") + minutes}menit`;
    case "small_showcase":
      return `${hours}j ${(minutes <= 9 ? "0" : "") + minutes}m`;
    case "seconds":
      const hourToSeconds = hours * 60 * 60;
      const minuteToSeconds = minutes * 60;

      return hourToSeconds + minuteToSeconds;
    default:
      return `${(hours <= 9 ? "0" : "") + hours}:${
        (minutes <= 9 ? "0" : "") + minutes
      }`;
  }
};

export const convertTimeToDuration = (data, type) => {
  let temp = data.split(":");

  switch (type) {
    case "small":
      return `${parseInt(temp[0]) > 0 ? parseInt(temp[0]) : `0`}j ${
        parseInt(temp[1]) > 0 ? parseInt(temp[1]) : `00`
      }m`;
    default:
      return `${parseInt(temp[0]) > 0 ? parseInt(temp[0]) : `0`}jam ${
        parseInt(temp[1]) > 0 ? parseInt(temp[1]) : `00`
      }menit`;
  }
};
