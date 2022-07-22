IsArrayPolyfill = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };

let arr = ['Millie', 'Bobby', 'Brown'];
console.log(Array.isArray(arr))
console.log(IsArrayPolyfill(arr))
let data = {
  realname: 'Millie Bobby Brown',
  character: 'Eleven',
  series: 'Stranger Things'
};
console.log(Array.isArray(data));
console.log(IsArrayPolyfill(data))


// if (!Array.isArray) {
//   Array.isArray = function(arg) {
//     return Object.prototype.toString.call(arg) === '[object Array]';
//   };
// }
