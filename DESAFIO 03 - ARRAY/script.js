let cores = ["azul","verde","amarelo","rosa","branco"]
cores.unshift("roxo")
cores.pop()
cores.push("vermelho","preto")
cores.shift()
console.log(cores)

let numbers=[7,5,6,38,9,2,1,4]
numbers.sort(function(a,b){
    return a-b
})
console.log(numbers)


let bel = {
comida: 'Batata',
cor: "verde-água",
lugar: 'praia'
}
bel.doce='chocolate'
delete bel.comida
console.log(bel)

let cadastro = [
    {
        nome: "Henrique",
        idade: 21,
        telefone: 965253290,
        amigos: ["Paula" ,"Sara" , "Luiz" , "Samuel" , "Junior"]
    },
    {
        nome: "Amanda",
        idade: 38,
        telefone: 954865210,
        amigos:["Suelen" ,"Mateus" , "Ana" , "João" , "Vitor"]
    },
    {
        nome: "Paulo",
        idade: 38,
        telefone: 954865210,
        amigos:["Thiago" ,"Jessica" , "Karen" , "Anthony" , "Camila"]
        
    },
    {
        nome: "Beatriz",
        idade: 38,
        telefone: 954865210,
        amigos:["Bianca" ,"Nathaly" , "Ester" , "Karina" , "Lucas"]
    },
    {
        nome: "Vitória",
        idade: 38,
        telefone: 954865210,
        amigos:["Yara" ,"Vanessa" , "Gabriel" , "Carlos" , "Guilherme"]
    }
]
console.log(cadastro[0].amigos[4])
console.log(cadastro[1].amigos[3])
console.log(cadastro[2].amigos[0])
console.log(cadastro[3].amigos[1])
console.log(cadastro[4].amigos[2])