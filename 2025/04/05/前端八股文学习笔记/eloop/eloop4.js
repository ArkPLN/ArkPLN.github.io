console.log(1)
async function async1() {
    await async2()
    console.log(2)
    await async3()
    console.log(3)
}
async function async2() {
    console.log(4)
}

async function async3() {
    console.log(5)
}

async1()
console.log(6)