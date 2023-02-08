const questions = [
 "Qual o seu nome?",
 "O que eu aprendi neste dia?",
 "A evolução de hoje foi boa?",
 "Eu consegui atingir minha espectativa?"   
]

const ask = (index = 0)=>{
    process.stdout.write(`\n ${questions[index]} \n`)
}

ask()

const resp = []

process.stdin.on("data", data =>{
    resp.push(data.toString().trim())
    if(questions.length > resp.length){
        ask(resp.length)
    }else{
        process.exit()   
    }
})

process.on("exit", exit=>{
    process.stdout.write(
    `Olá ${resp[0]}, vamos conferir o relatório? 
    
    Olha o quê você aprendeu hoje:
    ${resp[1]}

    Sua evolução foi boa hoje?
    ${resp[2]}

    E consegui atingir sua espectativa:
    ${resp[3]}
    `)
    process.exit()
})