const cliente = {
    nome: 'Ítalo',
    idade: 15,
    status: false
}
if (cliente.status) {
    if (cliente.idade >= 16 && cliente.idade < 18) {
        console.log('O cliente ' + cliente.nome + ' pode acessar alguns conteúdos.')
    } else if (cliente.idade >= 18) {
        console.log('O cliente ' + cliente.nome + ' pode acessar todos os conteúdos.')
    } 
    else {
        console.log('Menor de idade')
    }
}

cliente.status === true ? console.log('Cadastro Ativo') : console.log('Cadastro Inativo')

 switch (cliente.status) {
    case true:
        console.log('Cadastro Ativo')
        break
    case false:
        console.log('Cadastro Inativo')
        break
    default:
        console.log('Status desconhecido')
        break
}