const validateName = (name: string) => {
  const REG_EXP = /^[a-zA-Z][a-zA-Z0-9-]+$/;

  if (!name) {
    return 'Required';
  } else if (!REG_EXP.test(name)) {
    return 'Incorect validate';
  }
};

const validateEmail = (email: string) => {
  const REG_EXP = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

  if (!email) {
    return 'Required';
  } else if (!REG_EXP.test(email)) {
    return 'Incorect validate';
  }
};

const validatePhone = (number: string) => {
  const REG_EXP = /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;

  if (!number) {
    return 'Required';
  } else if (!REG_EXP.test(number)) {
    return 'Incorect validate';
  }
};

export { validateName, validateEmail, validatePhone };
