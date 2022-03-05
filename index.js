const readline = require('readline-sync')

function start() {
    const content = {}
    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askReturnPrefix()

    function askAndReturnSearchTerm() {
        return readline.question('Type a Wikipedia search term: ')
    }
    
    function askReturnPrefix(){
        const prefix = ['Who is', 'What is','The history of']
        const selectedPrefixindex = readline.keyInSelect(prefix, 'Chouse one option: ')
        const selectedPrefixtext = prefix[selectedPrefixindex]

        return selectedPrefixtext
    }
    console.log(content)
}

start()