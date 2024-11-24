const formLogin = (req, res) => {
  res.render("auth/login", {
    pagina: "Iniciar Sesión",
  });
};

const formRegister = (req, res) => {
  res.render("auth/register", {
    pagina: "Crear Cuenta"
  });
};

const formRememberPassword = (req, res) => {
  res.render("auth/remember-password", {
    pagina: "Recupera tu acceso a Bienes Raices",
  });
};

export {
  formLogin,
  formRegister,
  formRememberPassword
};
