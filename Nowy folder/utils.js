const greeting = () => {
    console.log('hello world')
}

const add = (a, b) => {
    console.log(a + b)
}

console.log('the file is loaded...')

module.exports = {
    greeting,
    add
}