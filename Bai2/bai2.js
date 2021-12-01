function findIndex(arr, index) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === index) {
            return i;
        }
    }
    return -1;
}

arr = [2, 3, 5, 6, 8, 9, 0];
let input = parseInt(prompt("Nhập số bạn muốn gặp"));
let check = findIndex(arr, input);
if(check === -1){
    console.log("Phần tử không nằm trong mảng");
}
else{
    console.log(`Phần tử nằm ở vị trí thứ ${check} trong mảng `);
}