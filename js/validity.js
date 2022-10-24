const photoForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(photoForm,{
  classTo: 'img-upload__text text',
  errorTextParent: 'img-upload__text text',
  errorTextClass: 'img-upload__text text',
});

photoForm.addEventListener('submit', (evt) => {
  evt.preventDefault();


  const isValid = pristine.validate();
  if (isValid) {
    console.log('Можно отправлять');
  } else {
    console.log('Форма невалидна');

  }
});
