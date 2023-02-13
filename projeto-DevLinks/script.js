function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')//este toggle já existe no js e faz o que a função acima fez

    //condicional
   // if(html.classList.contains('light')) {
     // html.classList.remove('light')
   // } else {
    //    html.classList.add('light')
   // }
    //no html na lista de classe contém o light


    //pegar tag img

    //substituir a imagem (se tiver o light mode, adicionar a imagem light)
    //se não tiver o light mode, manter a imagem do dark mode
}
