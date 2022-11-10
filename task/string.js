const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter your String here', name => {
    console.log(`hey there ${name}`)
    openB = ['{', '(', '[']
    closeB = ['}', ')', ']']
    value = []
    console.log(name.length % 2)
    if (name.length % 2 == 0) {
        for (var i = 0; i < name.length; i++) {
            if (openB.includes(name[i])) {
                value.push(name[i])
            }
            else {
                if (value[value.length - 1] == '{' && name[i] == '}' || value[value.length - 1] == '(' && name[i] == ')' || value[value.length - 1] == '[' && name[i] == ']') {
                    value.pop(value.length - 1)
                }
            }
        }
        console.log(value)
        for (var i = 0; i < name.length; i++) {
            if (closeB.includes(name[i])) {

            }
        }
        if (value == 0) {
            console.log('Valid Input')
        } else {
            console.log('Invalid input')
        }
    } else {
        console.log('Invalid Input')
    }
    readline.close()
})