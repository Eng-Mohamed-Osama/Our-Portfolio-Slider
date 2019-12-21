// for toggle class 'active'
var linkMenu = document.querySelectorAll('.linksConatiner li');
for (let i = 0; i < linkMenu.length; i++) {
  linkMenu[i].onclick = function() {
    var c = 0;
    while (c < linkMenu.length) {
      linkMenu[c++].classList.remove('active');
    }
    linkMenu[i].classList.add('active');
  };
}
arr = document.querySelectorAll('.linksConatiner li');
let arr2;
arr.forEach((el) => {
  el.addEventListener('click', function (e){
    arr2 = document.querySelectorAll(`.${e.target.id}`);
    arr3 = document.querySelectorAll('.All');
    console.log(arr2)
    arr3.forEach((ell2) => {
      ell2.style.display = 'none';
     });
   arr2.forEach((ell) => {
     ell.style.display = 'flex';
    });

  });
});