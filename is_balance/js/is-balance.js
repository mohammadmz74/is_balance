export function isBalance(input) {
  if (input == "[{()}]" && "[]" && "{}" && "()" && "[]{}()") {
    console.log("balance");
  } else {
    console.log("don't balance");
  }
}
isBalance("{}");
