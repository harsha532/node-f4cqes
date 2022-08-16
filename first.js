// var s = 'hello';
// var names = ['hh', 'ss'];
// var details;
// console.log(s);
// console.log(details);
// function doSetTimeout(i) {
//   setTimeout(function () {
//     console.log(i);
//   }, 5000);
// }

// for (let i = 1; i <= 5; i++) doSetTimeout(i);
// for (var i = 1; i <= 5; i++) {
//   (function () {
//     // var _i = i;
//     setTimeout(function () {
//       // x.value = _i * 2 + ' seconds';
//       console.log(i);
//     }, i * 2000);
//   })();
// }
for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 2000);
}
