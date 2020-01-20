export function calculateAge(birth) {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  let monthDay = month + day;
  birth = birth.replace("-", "").replace("-", "");
  let birthdayy = birth.substr(0, 4);
  let birthdaymd = birth.substr(4, 4);
  let age = monthDay < birthdaymd ? year - birthdayy - 1 : year - birthdayy;
  return age;
}

export function createHash(string_length = 40) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
  let randomstring = "";
  for (var i = 0; i < string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum, rnum + 1);
  }
  return randomstring;
}

export function now() {
  var date = new Date();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  var h = date.getHours();
  var i = date.getMinutes();
  var s = date.getSeconds();
  return (
    date.getFullYear() +
    "-" +
    (m > 9 ? m : "0" + m) +
    "-" +
    (d > 9 ? d : "0" + d) +
    " " +
    (h > 9 ? h : "0" + h) +
    ":" +
    (i > 9 ? i : "0" + i) +
    ":" +
    (s > 9 ? s : "0" + s)
  );
}

export function getBirthday(ID_NUMBER) {
  const ID_NUMBER_FRONT = ID_NUMBER.split("-")[0];
  const ID_NUMBER_SEX = ID_NUMBER.split("-")[1].slice(0, 1);
  const birthday =
    parseInt(ID_NUMBER_SEX) >= 3
      ? "20"
      : "19" +
        ID_NUMBER_FRONT.slice(0, 2) +
        "-" +
        ID_NUMBER_FRONT.slice(2, 4) +
        "-" +
        ID_NUMBER_FRONT.slice(4, 6);

  return birthday;
}
