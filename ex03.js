function inverterPalavra(str) {
    return str.split('').reverse().join('');
  }
  let palavra = window.prompt("Digite uma palavra para ve-la ao contraria: ").toLowerCase().replace(/\s+/g, '')
  let aocontrario = inverterPalavra(palavra).replace(/\s+/g, '')
  if (palavra==aocontrario) {
document.write(`${palavra} ao contrario fica ${aocontrario}, então é um palindromo`)
  }
  else {
    document.write(`${palavra} ao contrario fica ${aocontrario}, então não é um palindromo`)
  }