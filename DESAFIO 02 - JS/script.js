function nome (){
    console.log ("meu nome")
}
nome()

function nome (nome){
    console.log ("meu nome" + nome)
}
nome("isabel")
nome("Brendon")

function pessoa (nome,idade,música){
    console.log (nome,idade,música)
}
pessoa("Isabel",22,"POP")

function número (número){
return número*3
}
console.log (número (3))
 

function condicional (){
    let idade=20
    if(idade>18){
        console.log("pode entrar")
    } else{
        console.log("não pode entrar")
    }
    
}
condicional()