//버튼을 누르면 메뉴가 나타나도록 (wrap에 on 클라스 부여)
const lnb_btn = document.querySelector('.lnb_btn')
const lnb_btnImg = document.querySelector('.lnb_btn img')
const cover = document.querySelector('.cover')

const open = () => {
  if(!wrap.classList.contains('on')){ //클라스를 가지고 있는지 아닌지 확인
  wrap.classList.add('on');
  lnb_btnImg.setAttribute('src', 'img/bg_header_lnb_active.png')
  } else {
    close();
  }
}

const close = () => {
  wrap.classList.remove('on');
  lnb_btnImg.setAttribute('src', 'img/bg_header_lnb.png')
}

lnb_btn.addEventListener('click',open)
cover.addEventListener('click',close)
