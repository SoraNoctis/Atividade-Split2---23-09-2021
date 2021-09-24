function impares(x) {
    for (var val=0; val <= x; val++) {
        if(val %2 !=0) {
            console.log(val)
        }
    }
}

console.log(`Os valores impares entre 20 e 0 são: `)
impares(20)
