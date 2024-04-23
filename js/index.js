// bài 1
var km = 130,
  price,
  discount = 1;
if (km > 0) {
  if (km <= 1) {
    price = 15000;
  } else if (km > 5) {
    price = 11000;
    if (km > 120) {
      discount = 9 / 10;
    }
  } else {
    price = 13500;
  }
  var payment = km * price * discount;
  document.write("bài 1: giá taxi " + payment + "vnđ <br>");
} else {
  document.write("bài 1: mời nhập lại <br>");
}

// bài 2
var kWh = 300,
  electricPrice;
if (kWh >= 0) {
  if (kWh <= 50) {
    electricPrice = 1678;
  } else if (kWh >= 51 && kWh <= 100) {
    electricPrice = 1734;
  } else if (kWh >= 101 && kWh <= 200) {
    electricPrice = 2014;
  } else if (kWh >= 201 && kWh <= 300) {
    electricPrice = 2536;
  } else if (kWh >= 301 && kWh <= 400) {
    electricPrice = 2834;
  } else {
    electricPrice = 2927;
  }
  var payment = kWh * electricPrice;
  document.write("bài 2: tiền điện là " + payment + "vnđ<br>");
} else {
  document.write("bài 2: mời nhập lại<br>");
}

// bài 3
var n = 5,
  s = 0;
for (var i = 1; i <= n; i++) {
  s += i * (i + 1);
}
document.write(
  "bài 3: tổng S = 1*2 + 2*3 + ... + n*(n+1) với n = " + n + " là " + s + "<br>"
);

// bài 4
var n = 7,
  check = true;
if (n <= 1 || n % 1 !== 0) {
  document.write("bài 4: mời nhập lại<br>");
} else {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      check = false;
      break;
    }
  }
  if (check === false) {
    document.write("bài 4: " + n + " không phải là số nguyên tố <br>");
  } else {
    document.write("bài 4: " + n + " là số nguyên tố <br>");
  }
}
// bài 5
var n = 5,
  result = "",
  count = 1;
for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= i; j++) {
    result = result + count + "";
    count++;
  }
  result += "<br>";
}
document.write("bài 5:");
document.write("<p>" + result + "</p>");
// bài 6
var table = document.createElement("table");
for (var i = 1; i <= 8; i++) {
  var row = document.createElement("tr");
  for (var j = 1; j <= 8; j++) {
    var cell = document.createElement("td");
    if ((i + j) % 2 === 0) {
      cell.className = "white";
    } else {
      cell.className = "black";
    }
    row.appendChild(cell);
  }
  table.appendChild(row);
}
document.body.appendChild(table);
// bài 7
document.write("<div class = 'bai7'> bài 7:");
for (i = 1; i <= 9; i++) {
  document.write("<div>");
  for (let j = 1; j <= 10; j++) {
    result = i * j;
    document.write("<p>" + i + " &times; " + j + " = " + result + "</p>");
  }
  document.write("</div>");
}
document.write("</div>");
