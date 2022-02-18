function toggleMenu() {
  console.log('call here');
  document.getElementById("nav-primary").classList.toggle("open");
}
let x = document.getElementById('btn-hamburger');
x.onclick = toggleMenu;