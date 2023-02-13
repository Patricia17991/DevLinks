function toggleMode() {
    //as instruções estão na ordem de execussão 
    const html = document.documentElement//pegando o html
    html.classList.toggle('light')//fazendo a troca das classes

    //pegar tag img
    const img = document.querySelector("#profile img")//seletor css para pegra a img usado p/ substituir img

   //condicional - substituindo img
   if(html.classList.contains('light')) {
     //se tiver light mode, adicionar a img light
     img.setAttribute('src', './assets/avatar-light.png')//modifica um atributo
   } else {
     //se estiver sem o light mode, manter a img normal
     img.setAttribute('src', './assets/avatar.png')//modifica um atributo
   }
}
