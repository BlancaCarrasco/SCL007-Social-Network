describe('registrar', () => {

  it('debería ser una función', () => {
    assert.equal(typeof registrar, 'function');
  });

  it('debería poder registrar con el correo electronico "blankcarr@gmail.com" con su clave 123456', () => {
    assert.equal(registrar.registrado(" blankcarr@gmail.com", 123456), "usuario registrado");
  });
});

describe('login', () => {

  it('debería ser una función', () => {
    assert.equal(typeof login, 'function');
  });

  it('debería poder entrar con el correo electronico "blankcarr@gmail.com" con su clave 123456', () => {
    assert.equal(entrar.login(" blankcarr@gmail.com", 123456), "sesion iniciada");
  });
});

