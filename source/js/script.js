window.addEventListener(`DOMContentLoaded`, () => {
  const body = document.querySelector(`.page__body`);
  const header = document.querySelector(`.page-header`);
  const rates = document.querySelector(`.rates`);
  const regFormInput = document.querySelector(`.reg-form__input`);
  const filterCountry = document.querySelector(`.filter-country`);
  const hobbySelect = document.querySelector(`.hobby-select`);
  const musicSelect = document.querySelector(`.music-select`);
  const foodSelect = document.querySelector(`.food-select`);
  const transportSelect = document.querySelector(`.transport-select`);
  const levelSelect = document.querySelector(`.level-select`);
  const stepTwo = document.querySelector(`.step--2`);
  const headerOffset = header.offsetTop;

  const validateEmail = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toString().toLowerCase());
  };

  if (body) {
    body.classList.remove(`page__body--no-js`);
  }

  if (header) {
    const navToggleButton = document.querySelector(`.nav-toggle-btn`);

    navToggleButton.addEventListener(`click`, () => {
      header.classList.toggle(`page-header--opened-menu`);
    });

    window.addEventListener(`scroll`, () => {
      if (window.pageYOffset >= headerOffset + 20) {
        header.classList.add(`page-header--scroll`);
      } else {
        header.classList.remove(`page-header--scroll`);
      }
    });
  }

  if (rates) {
    const ratesButton = document.querySelector(`.rates__modal-open`);
    const ratesCloseButton = document.querySelector(`.business-rates__close`);

    ratesButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      rates.classList.toggle(`rates--modal-open`);
    });

    ratesCloseButton.addEventListener(`click`, () => {
      rates.classList.toggle(`rates--modal-open`);
    });
  }

  if (regFormInput) {
    const regFormBtn = document.querySelector(`.reg-form__btn`);

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

  if (filterCountry) {
    const filterCountryToggleBtn = document.querySelector(`.filter-country__toggle-btn`);

    filterCountry.classList.remove(`filter-country--opened-menu`);

    filterCountryToggleBtn.addEventListener(`click`, () => {
      filterCountry.classList.toggle(`filter-country--opened-menu`);
    });
  }

  if (hobbySelect) {
    const button = document.querySelector(`.hobby-select__title-btn`);

    hobbySelect.classList.remove(`hobby-select--opened-list`);
    button.addEventListener(`click`, () => {
      hobbySelect.classList.toggle(`hobby-select--opened-list`);
    });
  }

  if (musicSelect) {
    const button = document.querySelector(`.music-select__title-btn`);

    musicSelect.classList.remove(`music-select--opened-list`);
    button.addEventListener(`click`, () => {
      musicSelect.classList.toggle(`music-select--opened-list`);
    });
  }

  if (foodSelect) {
    const button = document.querySelector(`.food-select__title-btn`);

    foodSelect.classList.remove(`food-select--opened-list`);
    button.addEventListener(`click`, () => {
      foodSelect.classList.toggle(`food-select--opened-list`);
    });
  }

  if (transportSelect) {
    const button = document.querySelector(`.transport-select__title-btn`);

    transportSelect.classList.remove(`transport-select--opened-list`);
    button.addEventListener(`click`, () => {
      transportSelect.classList.toggle(`transport-select--opened-list`);
    });
  }

  if (levelSelect) {
    const button = document.querySelector(`.level-select__title-btn`);

    levelSelect.classList.remove(`level-select--opened-list`);
    button.addEventListener(`click`, () => {
      levelSelect.classList.toggle(`level-select--opened-list`);
    });
  }

  if (stepTwo) {
    const openButton = document.querySelectorAll(`.country-step__select`)[2];

    stepTwo.classList.remove(`step--opened-menu`);
    openButton.addEventListener(`click`, () => {
      stepTwo.classList.toggle(`step--opened-menu`);
    });
  }
});
