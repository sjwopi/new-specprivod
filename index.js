window.onload = function () {
  // отркрытие и закрытие шапки на мобилке
  const hambBtnHeader = document.getElementById('header__hambbtn')
  const header = document.getElementById('header')
  hambBtnHeader.addEventListener('click', () => {
    hambBtnHeader.classList.toggle('open');
    header.classList.toggle('open')
  })

  // отркрытие и закрытие меню каталога
  const btnDropdownCatalog = document.getElementById('btn-dropdown-catalog')
  const menuDropdownCatalog = document.getElementById('menu-dropdown-catalog')

  btnDropdownCatalog.addEventListener('click', () => {
    btnDropdownCatalog.classList.toggle('open')
    menuDropdownCatalog.classList.toggle('open')
  })

  // изменение типа инпута для пароля
  const btnPasswordShow = document.querySelectorAll('.modal__eye');
  btnPasswordShow.forEach(item => {
    item.addEventListener('click', (e) => {
      const parent = e.target.parentElement;
      parent.classList.toggle('open')

      const input = parent.querySelector('input')
      if (input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
      } else {
        input.setAttribute('type', 'password');
      }
    })
  })

  const allModals = document.querySelectorAll('.modal')
  const modalSupportFunction = (modalOpenBtns, modal, modalOvelay, modalCloseBtn) => {
    modalOpenBtns.forEach(item => {
      item.addEventListener('click', () => {
        allModals.forEach(item => item.classList.remove('open'))
        modal.classList.add('open')
      })
    })

    modalOvelay.addEventListener('click', () => {
      modal.classList.remove('open')
    })
    modalCloseBtn.addEventListener('click', () => {
      modal.classList.remove('open')
    })
  }

  // модалка с запросом звонка
  const btnsRequestСall = document.querySelectorAll('.requestСall');
  const modalRequestСall = document.getElementById('modalRequestСall');
  const overlayRequestСall = document.getElementById('overlayRequestСall');
  const closeBtnRequestСall = document.getElementById('closeBtnRequestСall');
  modalSupportFunction(btnsRequestСall, modalRequestСall, overlayRequestСall, closeBtnRequestСall)

  // модалка с авторизацией
  const btnsLogin = document.querySelectorAll('.openLogin');
  const modalLogin = document.getElementById('modalLogin');
  const overlayLogin = document.getElementById('overlayLogin');
  const closeBtnLogin = document.getElementById('closeBtnLogin');
  modalSupportFunction(btnsLogin, modalLogin, overlayLogin, closeBtnLogin)

  // модалка с регистрацией физ лиц
  const btnsRegisterPhys = document.querySelectorAll('.btnToRegisterPhys');
  const modalRegisterPhys = document.getElementById('modalRegisterPhys');
  const overlayRegisterPhys = document.getElementById('overlayRegisterPhys');
  const closeBtnRegisterPhys = document.getElementById('closeBtnRegisterPhys');
  modalSupportFunction(btnsRegisterPhys, modalRegisterPhys, overlayRegisterPhys, closeBtnRegisterPhys)

  // модалка с регистрацией юр лиц
  const btnsRegisterUr = document.querySelectorAll('.btnToRegisterUr');
  const modalRegisterUr = document.getElementById('modalRegisterUr');
  const overlayRegisterUr = document.getElementById('overlayRegisterUr');
  const closeBtnRegisterUr = document.getElementById('closeBtnRegisterUr');
  modalSupportFunction(btnsRegisterUr, modalRegisterUr, overlayRegisterUr, closeBtnRegisterUr)

  document.querySelectorAll('.btnToProfile').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      location.href = "./profile-lk.html";
    })
  })
}
