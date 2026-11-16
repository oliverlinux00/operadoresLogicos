// 1. Validação de Login Simples (&&)
// Crie um programa que receba o usuário e a senha em variáveis. Exiba a mensagem
// "Acesso permitido" apenas se o usuário for exatamente "admin" e a senha for
// "1234".

let nome = 'Oliver'
let senha = 1234
let admin = true

if (admin && senha == 1234) {
    console.log("Acesso Permitido")
} else {
    console.log("Acesso Negado!")
}

// 2. Entrada Gratuita no Parque (||)
// Crie um programa que leia a idade de uma pessoa. O parque dá entrada gratuita
// se a pessoa tiver menos de 6 anos ou tiver 60 anos ou mais. Exiba se a pessoa
// paga ou entra de graça.

let idade = 60

if (idade < 6 || idade > 60) {
    console.log("Entrada permitida: Idade " + idade)
} else {
    console.log("Entrada não permitida!")
}

// 3. Verificação de Interruptor (!)
// Crie um programa que tenha uma variável booleana lampadaAcesa. Use o
// operador de negação para inverter o estado da lâmpada e exiba no console o novo
// estado (se estava true, vira false e vice-versa).

let lampadaAcesa = true

console.log(!lampadaAcesa)


// 4. Pode Dirigir? (&&)
// Crie uma função que receba a idade de uma pessoa e uma variável booleana
// temCarteira. A função deve retornar true apenas se a idade for maior ou igual a 18
// e temCarteira for true.

function verificaHabiliticacao(idade, temCarteira) {

    if (idade >= 18 && temCarteira == true) {

        return "Você pode Dirigir!"

    } else {

        return "Você NÃO pode Dirigir!"

    }

}

console.log(verificaHabiliticacao(18, true))

// 5. Desconto no Cinema (||)
// O cinema dá desconto se o dia da semana for "quarta-feira" ou se o cliente for
// "estudante". Crie um programa que receba o dia e a condição de estudante
// (true/false) e informe se ele tem direito ao desconto.

let diaDaSemana = "Quarta"
let escolaridade = "estudante"

if (diaDaSemana == "Quarta" || escolaridade == "estudante") {

    console.log("Tem direito a desconto!")

} else {

    console.log("Não tem direito a desconto!")

}

// 6. Alarme de Segurança (||)
// Um sistema de alarme deve disparar se a portaAberta for true ou se a janelaAberta
// for true. Escreva uma estrutura de condição que exiba "Alarme Disparado!"
// quando qualquer uma das duas estiver aberta.

let portaAberta = true
let janelaAberta = true

if (portaAberta && janelaAberta) {
    
    console.log("Alarme Disparado!")

} else { 
    console.log("Tudo ok!")
}

// 7. Número no Intervalo (&&)
// Escreva um programa que receba um número e verifique se ele está no intervalo
// entre 10 e 20 (inclusive). Exiba no console se o número está ou não no intervalo.

let numero = 35

if (numero >= 10 && numero <= 20) {

    console.log("O número está entre 10 e 20!")

} else {
    
    console.log("O número NÃO está entre 10 e 20!")

}

// 8. Aprovação Escolar Completa (&& e ||)
// Um aluno é aprovado se tiver nota maior ou igual a 7 e frequencia maior ou igual a 75%. Porém, se ele tiver nota menor que 7, mas tiver o trabalhoExtra como true e frequencia maior ou igual a 75%, ele também é aprovado. Crie a lógica para
// verificar a situação do aluno.

function alunoAprovado (nota1, nota2, nota3, frequencia, trabalhoExtra) {

    let media = (nota1 + nota2 + nota3) / 3

    if (media >= 7 && frequencia >= 75 ) {
        return "Aluno aprovado"
    } else if (trabalhoExtra && frequencia >= 75) {
        return "Média menor que 7, porém, aprovado com frequencia e trabalho extra"
    } else {
        return "Aluno reprovado por falta de frequencia e trabalho extra"
    }
}


console.log(alunoAprovado(10,10,10,76,true))


// 9. Requisitos para Montanha-Russa (&& e !) Para entrar em um brinquedo do parque, a pessoa precisa ter altura maior ou igual a 1.50m e idade maior ou igual a 12 anos. Porém, se a pessoa tiver problemaCardiaco igual a true, ela não pode andar de jeito nenhum.

function requesitoMontanha (altura, idade, cardiaco) {

    if (altura>= 1.50 && idade >= 12 && cardiaco == false){
        console.log("Você pode entrar no parque, altura e idade estão ok")
    } else if (cardiaco) {
        console.log("Você não pode andar por ser cardíaco!")
    } else {
        console.log("Você não pode andar!")
    }

}


requesitoMontanha(1.20,11,false)


// 10. Regra de Frete Grátis (&&, || e !) Uma loja online oferece frete grátis se o valorCompra for maior que R$ 100 ou se o cliente for membroVIP. No entanto, o frete grátis não se aplica se a entrega for para zonaRural. Crie o programa que retorne se o cliente tem direito ao frete grátis.

function freteGratis (vcompra, mvip, entrega) {

    if (entrega == "Zona Rural") {
        console.log("NÃO HÁ FRETE GRÁTIS para Zona Rural")
    } else if (vcompra >= 100 || mvip == true  ) {
        console.log("Você tem FRETE GRÁTIS  ")
    } else {
        console.log("Você Não tem FRETE GRÁTIS")
    }

}
