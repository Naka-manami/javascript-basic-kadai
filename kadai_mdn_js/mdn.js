const today = new Date();
const ymd = today.toLocaleDateString("ja-JP",{
  year: "numeric",
  month: "long",
  day : "numeric"
});
console.log(ymd);