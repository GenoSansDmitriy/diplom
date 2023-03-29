window.onload = function(){
    
    var
    menuBtn = document.querySelector('#menuBtn'),
    menu = document.querySelector('#menu'),
    toper = document.querySelector('.toper'),
    mider = document.querySelector('.mider'),
    boter = document.querySelector('.boter');

    let nulick = '-100%';
    menuBtn.addEventListener('click', function () {
        if (nulick == '-100%') {
            menu.style.left = '0';
            toper.style.transform = 'rotate(135deg)';
            mider.style.display = 'none';
            boter.style.transform = 'rotate(-135deg)';
            boter.style.position = 'absolute';
            boter.style.bottom = '-2px';
            nulick = '0';
        } else if (nulick == '0') {
            menu.style.left = '-100%';
            toper.style.transform = 'none';
            mider.style.display = 'flex';
            boter.style.transform = 'none';
            boter.style.position = 'unset';
            nulick = '-100%';
        }
    })
}




