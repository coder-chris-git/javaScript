function sum(array) {
    return array.reduce((a, b) => a + b, 0)
}

array1 = [3, 5]
console.log(sum(array1))


function map(x) {
    let i = 0
    let count = x[i]
    let newl = []
    while (i <= x.length) {
        if (i !== x.length) {
            let temp
            temp = count
            num = temp * 1

            count = x[i + 1]



            newl.push(num)

            i++

        }
        else {
            return newl
        }

    }
}
let a = [1, 4, 5, 7, 3, 2, 4, 5, 45, 32, 2, 99, 905, 124, 4124, 124, 431, 42, 1]

console.log(map(a))



