function toggleMode() {
    const html = document.documentElement

    //condicional
   // if(html.classList.contains('light')) {
     // html.classList.remove('light')
   // } else {
    //    html.classList.add('light')
   // }
    //no html na lista de classe contém o light

    html.classList.toggle('light')//este toggle já existe no js
}
