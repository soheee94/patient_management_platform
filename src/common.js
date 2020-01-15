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
