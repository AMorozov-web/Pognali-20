window.addEventListener(`DOMContentLoaded`, () => {
  const body = document.querySelector(`.page__body`);
  const header = document.querySelector(`.page-header`);
  const navToggleButton = document.querySelector(`.nav-toggle-btn`);
  const rates = document.querySelector(`.rates`);
  const ratesButton = document.querySelector(`.rates__modal-open`);
  const ratesCloseButton = document.querySelector(`.business-rates__close`);
  const regFormInput = document.querySelector(`.reg-form__input`);
  const regFormBtn = document.querySelector(`.reg-form__btn`);

  const validateEmail = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toString().toLowerCase());
  };

  if (body) {
    body.classList.remove(`page__body--no-js`);
  }

  if (header && navToggleButton) {
    navToggleButton.addEventListener(`click`, () => {
      header.classList.toggle(`page-header--opened-menu`);
    });
  }

  if (rates && ratesButton) {
    ratesButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      rates.classList.toggle(`rates--modal-open`);
    });

    ratesCloseButton.addEventListener(`click`, () => {
      rates.classList.toggle(`rates--modal-open`);
    });
  }

  if (regFormInput) {
    regFormBtn.addEventListener(`click`, (evt) => {
      const email = regFormInput.value;

      if (!validateEmail(email)) {
        evt.preventDefault();
        regFormInput.classList.add(`reg-form__input--invalid`);
        setTimeout(() => {
          regFormInput.classList.remove(`reg-form__input--invalid`);
        }, 2000);
      }
    });
  }
});
