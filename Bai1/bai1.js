function ptBac1(so1,so2) {
    if (so1 === 0) {
        console.log("Phương trình vô nghiệm");
    } else if (so2 === 0) {
        console.log("Phương trình có nghiệm x = 0");
    } else {
        let x = - so2 / so1;
        console.log("Kết quả x là: " + x);
    }
}
ptBac1(5,8);