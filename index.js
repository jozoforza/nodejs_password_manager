console.log("im js script")
const prompt = require('prompt-sync')({sigint: true});
const sqlite3 = require('sqlite3').verbose();
const {db, dbAll, dbInsert, createTable, delPassword, dbSearch} = require('./mudules/db')


async function startApp(){
while(true){
    const input = prompt("pManager> ");
    switch (input) {
        case "exit":
            console.log("exiting...")
            return
        case "all":
            console.log('quering...')
            await dbAll()
            break
        case "new":
            const provider = prompt("provider: ");
            const username = prompt("username: ");
            const password = prompt("password: ");
            await dbInsert(provider,username,password)
            break
        case "newTable":
            await createTable()
            break
        case "del":
            const id = prompt("password id: ")
            await delPassword(id)
            break
        case "search":
            const search = prompt("search for provider of password: ")
            await dbSearch(search)
            break
        case "help":
            console.log(
            `
exit - exit the app
del - del password with given id
all - display all passswords
new - insert new password into the db
newTable - creates table for saving passwords`)
            break
        default:
            console.log(`no such command as: ${input}`)
            break
    }
}}

startApp()
