// for( let i =0; i< 3; i = i +1){
//     //có thể thực hiện bất cứ logic nào với biến i
//     console.log(i, "Hello worl")
// }

// luồng chạy của vòng lặp for loop
// lần chạy thứ 1: i =0; 0<3 (true), in ra "hello world", i = 0 +1 =1
// lần chạy thứ 2: i =1; 1<3 (true), in ra "hello world", i = 1 +1 =2
// lần chạy thứ 2: i =2; 2<3 (true), in ra "hello world", i = 2 +1 =3
// lần chạy thứ 3: i =3; 3<3 (false) vòng lặp dừng lại

// biến i được fọi là ( biến chạy)
// kiểm soát số lầm lăp thông qua biến i

// bộ 3 điều kiện lặp
// - điểm bắt đầu
// - điểm kết thúc của vòng lặp
// - bước nhảy

//EX1

// Cho người dùng nhập vào số n

// Tính tổng của dãy A = 1 + 2 + 3 + .... + n
// Tính tích của dãy B = 1 * 2 * 3 * .... * n
// Tính tổng của dãy C = 1/1*2 + 1/2*3 + .... + 1/(n-1)*n

// Ex2:
// Cho người dùng nhập vào số a và b
// Kiểm tra xem a > b hay < b
// In ra 1 dãy từ a đến b hoặc ngược lại kèm theo với
// - Chẵn nếu là số chẵn
// - Lẻ nếu là số lẻ

// VD:
// a = 1
// b = 5
// 1 - lẻ
// 2 - chẵn
// ...
// 5 - lẻ

// khai báo một biến khởi tạo

// let n = +prompt("Nhập vào một số tự nhiên n :")
// let sum =0;
// for ( let i=1; i< n ; i+=1){
//     sum = sum + i
// } console.log(sum)

// let n = +prompt("Nhập vào một số tự nhiên n :")
// let nh = 1;
// for (let i=1 ; i< n ;i = i +1){
//     nh = nh * i
// } alert(nh)

//  Tính tổng của dãy C = 1/1*2 + 1/2*3 + .... + 1/(n-1)*n

// let n = +prompt("Nhập vào một số tự nhiên n :")
// let sum = 0
// for (let i = 2; i <= n; i = i + 1){
//     sum = sum + 1/((i-1)*i)
// } alert(sum)

// // while dịch ra: trong khi, miễn là ...
// // while(condition){
//     //logic
//     // trong tương lai gần
//     // tại lần lặp thứ 100
//     // 1 điều kiện nào đó xảy ra biến cố
//     // dừng vòng lắp
//     // condition biến thành sai
// }

// cho người dùng nhập vào số n
// tiến hành xây dựng một ứng dụng AI
// kiểm tra xem số n có trùng voiws số result ở trong code hay không
// nếu trùng --> Binggo
// nếu lớn hơn ---> to big
// nếu nhỏ hơn ---> to small

// let n = Number(prompt("đoán số đi"));
// let result = 30;
// if (n === result ) {
//     console.log("Binggo");
// } else if (n > result){
//     console.log("To big");
//     else {
//         console.log("Too small")
//     }
// }

// let n = Number(prompt("Nhập vào một số nguyên n :"))
// let sum = 0;
// if (n >= 0){
//     for (let i = 0; i <= n; i = i +1 ){
//         sum = sum + i
//     } alert(sum)

// } else{
//     alert("Không hợp lệ")
// }

// let n = Number(prompt("Nhập vào một số nguyên :"))
// let result = 1
// if (n > 0){
//     for (let i = 1; i<=n; i= i+1 ){
//         result = result * i
//     }
//

//In ra các số từ 1 đến 10

// Vế 1:điều kiện bắt đầu : 1
// Vế 2: điều kiện kết thúc : <=10
// Vế 3: Bước nhảy +=1
// index = 1,2,3 4,5...10
// for(let index =1; index<=10; index=index+1){
//     console.log(index);
// }

//Viết một đoạn mã cho phép người dùng nhập vào một số n. Tiến hành kiểm tra xem đó
//có phải là một số nguyên hợp lệ hay không.
//Nếu đó là số hợp lệ, tiến hành tính kết quả của biểu thức B = 1 + 2 + 3 + … + n

//Viết một đoạn mã cho phép người dùng nhập vào một số n.
//Tiến hành kiểm tra xem đó có phải là một số nguyên hợp lệ hay không.
//Nếu đó là số hợp lệ, tiến hành tính kết quả của biểu thức B = 1 x 2 x 3 x … x n

// let n = +prompt("Nhập vào một số tự nhiên n :")
// let result = 1
// for (let i = 1 ; i <= n ; i = i + 1){
//     result = result * i
// } console.log(result);

//Viết một đoạn mã cho phép người dùng nhập vào một số n.
//Tiến hành kiểm tra xem đó có phải là một số nguyên hợp lệ hay không.
//Nếu đó là số hợp lệ, tiến hành tính tổng của biểu thức C = 1 + ½ + ⅓ + … + 1/n

// let n = Number(prompt("Nhập vào một số n : "))
// let sum = 0
// for (let i = 1 ; i <= n ; i = i +1){
//     sum = sum + 1/i
// } console.log(sum)

//bài 1

// let n = Number(prompt("Nhập vào một số nguyên n :"))
// let sum = 0;
// if (n >= 0){
//     for (let i = 0; i <= n; i = i +1 ){
//         sum = sum + i
//     } alert(sum)

//bài 2

// let n = Number(prompt("Nhập vào một số nguyên :"))
// let result = 1
// if (n > 0){
//     for (let i = 1; i<=n; i= i+1 ){
//         result = result * i
//     }
//

// bài 3
// let x = Number(prompt("Nhập vào một số nguyên:"));
// if (Number.isInteger(x) && x > 0) {
//   let sum = 0;
//   for (let i = 1; i <= x; i++) {
//     sum += 1/(i+1);
//   }
//   console.log("Tổng là: " + sum);
// } else {

//   console.log("không hợp lệ hoặc không lớn hơn 0");
// }

// bài 4
let n = prompt("Nhập vào một số:");
if (isNaN(n)) {
  console.log("giá trị không hợp lệ!");
} else {
  console.log("Bảng cửu chương của " + n + " là:");
  for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
  }
}

// bài 5
// let n = prompt("Nhập vào một số:");
// if (isNaN(n) || n <= 0 || !Number.isInteger(Number(n))) {
//   console.log( "giá trị không hợp lệ!");
// } else {
//   console.log("Dãy số Fibonacci " + n + " phần tử là:");
//   let a = 0, b = 1;
//   for (let i = 1; i <= n; i++) {
//     console.log(a);
//     let temp = a + b;
//     a = b;
//     b = temp;
//   }
// }

// bai6
// let n = parseInt(prompt("Nhập vào một số:b"));
// if (isNaN(n) || n <= 0 || n % 1 !== 0) {
//   console.log("giá trị không đúng");
// } else {
//   let fibonacci = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//   }
//   console.log("Dãy Fibonacci; " + n + " phần tử là:");
//   console.log(fibonacci.join(", "));
// }

// bai7
// let n = parseInt(prompt("Nhập vào một số: "));

// if (isNaN(n) || n < 1) {
//   console.log("Số không hợp lệ!");
// } else {
//   console.log(`Các số từ 0 đến ${n} theo dạng chẵn lẻ là:`);
//   for (let i = 0; i <= n; i++) {
//     if (i % 2 === 0) {
//       console.log(i + " là số chẵn");
//     } else {
//       console.log(i + " là số lẻ");
//     }
//   }
// }

// bai8
// let n = parseInt(prompt("Nhập vào một số:"));

// if (Number.isInteger(n) && n > 0) {
//   console.log("Các số chẵn từ 0 đến n:");
//   for (let i = 0; i <= n; i += 2) {
//     console.log(i);
//   }
//   console.log("Các số lẻ từ 1 đến n:");
//   for (let i = 1; i <= n; i += 2) {
//     console.log(i);
//   }
// } else {
//   console.log("số không hợp lệ!");
// }

// bài 9
// const n = parseInt(prompt("Nhập một số : "));
// if (isNaN(n) || n <= 0) {
//   console.log("Số không hợp lệ.");
// } else {
//   let isPrime = true;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(`${n} là số nguyên tố.`);
//   } else {
//     console.log(`${n} không phải là số nguyên tố.`);
//   }
// }

// bài 9

// if (n <= 9 || Number.isInteger(n) === false) {
//   if (n === 2 || n === 3 || n === 5 || n === 7) {
//     console.log("n là số nguyên tố");
//   } else {
//     console.log("Không phải số nguyên tố");
//   }
// } else {
//   if (
//     n % 2 === 0 ||
//     n % 3 === 0 ||
//     n % 5 === 0 ||
//     n % 7 === 0 ||
//     Number.isInteger(Math.sqrt(n)) === true
//   ) {
//     console.log("Không phải số nguyên tố");
//   } else {
//     console.log("Là số nguyên tố");
//   }
// }

// for (let j = 0; j < 4; j = j + 1) {
//   let str = "";
//   for (let i = 0; i < 4; i = i + 1) {
//     if (i <= j) {
//       str = str + "*";
//     }
//   }
//   console.log(str);
// }



 
// * (DONE)
// * * (DONE)
// * * *
// * * * *

// Lần 1: j = 0; str = "";
//      Lần 1: i = 0; 0 < 4 (true); (0 >= 0(true)) -> str = "" + * (*), i = 0 + 1 (1)
//      Lần 2: i = 1; 1 < 4 (true); (1 >= 0(true)) KHÔNG THỰC HIỆN hành động nối * vào str, i = 1 + 1 (2)
//      Lần 3: i = 2; 2 < 4 (true); (2 >= 0(false)) KHÔNG THỰC HIỆN hành động nối * vào str, i = 2 + 1 (3)
//      Lần 4: i = 3; 3 < 4 (true); (3 >= 0(false)) KHÔNG THỰC HIỆN hành động nối * vào str, i = 3 + 1 (4)
//      Lần 5: i = 4; 4 < 4 (false); DỪNG VÒNG LẶP j
// IN RA *, j (0) < 4 (true), j = 0 + 1 (1)

// Lần 2: j = 1; str = "";
//      Lần 1: i = 0; 0 < 4 (true); (0 <= 1(true)) -> str = "" + * (*), i = 0 + 1 (1)
//      Lần 2: i = 1; 1 < 4 (true); (1 <= 1(true)) -> str = "*" + * (**), i = 1 + 1 (2)
//      Lần 3: i = 2; 2 < 4 (true); (2 <= 1(false)) KHÔNG THỰC HIỆN hành động nối * vào str, i = 2 + 1 (3)
//      Lần 4: i = 3; 3 < 4 (true); (3 <= 1(false)) KHÔNG THỰC HIỆN hành động nối * vào str, i = 3 + 1 (4)
//      Lần 5: i = 4; 4 < 4 (false); DỪNG VÒNG LẶP j
// IN RA **, j (1) < 4 (true), j = 1 + 1 (2)







// * * * *
// * * * *
// * * * *
// * * * *
// Lần 1: j = 0; str = "";
//      Lần 1: i = 0; 0 < 4 (true); str = "" + * (*), i = 0 + 1 (1)
//      Lần 2: i = 1; 1 < 4 (true); str = "*" + * (**), i = 1 + 1 (2)
//      Lần 3: i = 2; 2 < 4 (true); str = "**" + * (***), i = 2 + 1 (3)
//      Lần 4: i = 3; 3 < 4 (true); str = "***" + * (****), i = 3 + 1 (4)
//      Lần 5: i = 4; 4 < 4 (false); KẾT THÚC VÒNG LẶP j
// IN RA ****, j (0) < 4 (true), j = 0 + 1 (1)
// Lần 2: j = 1; str = "";
//      Lần 1: i = 0; 0 < 4 (true); str = "" + * (*), i = 0 + 1 (1)
//      Lần 2: i = 1; 1 < 4 (true); str = "*" + * (**), i = 1 + 1 (2)
//      Lần 3: i = 2; 2 < 4 (true); str = "**" + * (***), i = 2 + 1 (3)
//      Lần 4: i = 3; 3 < 4 (true); str = "***" + * (****), i = 3 + 1 (4)
//      Lần 5: i = 4; 4 < 4 (false); KẾT THÚC VÒNG LẶP j
// IN RA ****, j (1) < 4 (true), j = 1 + 1 (2)
// ....
// IN RA ****, j (3) < 4 (true), j = 3 + 1 (4)
// Lần 5: j = 4; 4 < 4 (false) DỪNG VÒNG LẶP j
