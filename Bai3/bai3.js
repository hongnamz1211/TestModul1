function timSoNguyenAm(char) {
    let count = 0;
    for (let i = 0; i < char.length; i++) {
        if (char[i] === "a" || char[i] === "o" || char[i] === "e" || char[i] === "u" || char[i] === "i") {
            count++;
        }
    }
    if (count === 0) {
        return false;
    } else {
        return count;
    }
}

let char = prompt("Nhập chuỗi bất kỳ: ");
console.log(timSoNguyenAm(char));