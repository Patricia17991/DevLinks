function toggleMode() {
    //as instruções estão na ordem de execussão 
    const html = document.documentElement
    html.classList.toggle('light')//este toggle já existe no js e faz o que a função acima fez

    //condicional
   if(html.classList.contains('light')) {
     
   } else {

   }


    //pegar tag img

    //substituir a imagem (se tiver o light mode, adicionar a imagem light)
    //se não tiver o light mode, manter a imagem do dark mode
}
