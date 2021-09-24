var parOUimpar = (val1, val2) => {

    total = val1 + val2

    if (total%2 == 0) {
        return "Par"
    } else {
        return "Impar"
    }
}

console.log(`O valor é ${parOUimpar(80,30)}`)
