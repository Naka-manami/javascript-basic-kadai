function bmiValue(){
  let weight = getInputValue("weight");
  let height = getInputValue("height");
  let bmi = calculateSum(weight , height);
  document.getElementById("result").textContent = bmi;
}
// 指定されたIDのinput要素の値を数値として取得する関数
function getInputValue(bmi) {
  return Number(document.getElementById(bmi).value);
}
// 合計を計算する関数
function calculateSum(weight, height) {
  console.log(weight / (height * height))
}