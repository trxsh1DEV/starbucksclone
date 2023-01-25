const menuHamb = document.querySelector('header .header--menu img');

menuHamb.addEventListener('click', () => {
    const menuMobile = document.querySelector('header .menu-mobile');
    // console.log(menuMobile.style.marginRight);

    if(menuMobile.style.marginRight == '' || menuMobile.style.marginRight == '-400px'){
        menuMobile.style.marginRight = '0';
        return;
    }
    menuMobile.style.marginRight = '-400px';
})