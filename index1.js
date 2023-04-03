// let numberlist =[ 2, 5, 7, 20];
// let numberlist2 ="day la array";
// console.log( "day co phai la array khong: ", Array.isArray(numberlist));
// console.log( "day co phai la array khong: ", Array.isArray(numberlist2));

// //Array.from()

// console.log(Array.from("Bình học giỏi quá"));

// //

// let array = [2, 3, 4, 6, 7, 8]
// //kiểm tra trong mảng này nó có tồn tại thằng số 8 hay không\



///


// array.splice(start, deleteCoun, iteml, ...)


// let trt = ["abc", "2", "3"];
// for (let i = 0; i <= trt.length-1; i++){
//     console.log(trt[i]);

// }






// // Khai báo mảng rỗng để chứa các số ngẫu nhiên
// let numRandom = [];
// // Tạo ra các số ngẫu nhiên
// // dùng Math.random để chọn
// //dùng Math.floor để làm tròn
// // dùng push để đẩy vào mảng rỗng đã khai báo
// for (let i = 1; i <= 10; i++) {
//   numRandom.push(Math.floor(Math.random() * 100));
// }
// // gán các phần tử ngẫu nhiên vào mảng
// console.log("Mảng số nguyên ngẫu nhiên là: " + numRandom);
// // tìm các phần tử là số chẵn trong mảng
// console.log("các số chẵn trong mảng là :");

// for (let i = 0; i < numRandom.length; i++) {
//   if (numRandom[i] % 2 === 0){
//     console.log(numRandom[i]);
//   }
// }


// //bài 2
// const afab = 'abcdefghijklmnopqrstuvwxyz'
// const randomStr = Array.from({length : 10},() => {

// let result = [" "];
// for (let i = 0; i < 5; i++) {
//  result += afab.charAt(Math.floor(Math.random() * afab.length) );
// }
// return result;
// });
// console.log(randomStr);
// for(let i = randomStr.length - 1;i>=0; i--) {
//   console.log(randomStr[i]);
// }

// Bài 3
// let newarray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(newarray.length);
// for (let i = 0; i < newarray.length; i++){
//     for (let j = i+1 ; j< newarray.length; j++){
//         if (newarray[i] + newarray[j] == 10){
//             console.log(newarray[i] + "+" + newarray[j] + "= 10")
//         }
//     } 
// }



// Bài 4

// let randomNumber = []; 

// for (let i = 1; i <= 10; i++) {
//   randomNumber.push(Math.floor(Math.random() * 100));
// }
// console.log(randomNumber);
//  randomNumber.sort((a, b) => a - b);
//  console.log(randomNumber);


// Bài 5


// let str = [];

// // Tạo mảng chuỗi ngẫu nhiên
// for (let i = 0; i < 10; i++) {
//   const randomLength = Math.floor(Math.random() * 10) + 1; // Độ dài chuỗi từ 1 đến 10
//   let randomStr = '';
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';

//   // Tạo chuỗi ngẫu nhiên
//   for (let j = 0; j < randomLength; j++) {
//     randomStr += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
//   }

//  str.push(randomStr);
// }

// // Tìm chuỗi có độ dài lớn nhất
// let maxLengthStr = '';
// for (let i = 0; i < str.length; i++) {
//   if (str[i].length > maxLengthStr.length) {
//     maxLengthStr = str[i];
//   }
// }

// console.log(str);
// console.log('Chuỗi có độ dài lớn nhất là: ' + maxLengthStr);



// bài 1

// let a = 5;
// let b = 6;
// let c = 0;
// c = a;
// a = b;
// b = c;
// console.log(" a =" + a ,"b = " + b);


// //bài 2

// let s = "Hello beauty there";



//bài1

let sum = prompt("nhập vào một chuỗi số được ngăn cách nhau bởi dấu (,) :");
let numbers = sum.split(",");

for (let i=0; i< numbers.length; i++){
    let tg = 0
    for( let j = i+1; j <numbers.length;j++){
        if( numbers[i] > numbers[j]){
            tg = numbers[i]
            numbers[i]= numbers[j]
            numbers[j]=tg
        }

    }
} console.log(numbers);
console.log("Min =" + numbers[0]);
console.log("Max =" + numbers[numbers.length-1]);


