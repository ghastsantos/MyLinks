//função para realizar o toogleMode(switch) em que caso o html esteja no light mode ao clicar no switch irá mudar para dark (root) e vice-versa
function toggleMode() {
  const html = document.documentElement
  // if(html.classList.contains('light')){
  // html.classList.remove('light')
  // } else {
  // html.classList.add('light')
  //}
  html.classList.toggle("light")
}
