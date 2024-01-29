import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>RootLoans</h1>
          <p>Haz tu camino mas facil con nosotros</p>
        </div>
        <div>
          <a href="/"> 
            <i class="fa-brands fa-square-facebook"></i>
          </a>
          <a href="/"> 
            <i class="fa-brands fa-square-instagram"></i>
          </a>
          <a href="/"> 
            <i class="fa-brands fa-square-twitter"></i>
          </a>
          <a href="/"> 
            <i class="fa-brands fa-square-behance"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Projectos</h4>
          <a href="/">Cambiar de Usuario</a>
          <a href="/">Estado</a>
          <a href="/">Licencia</a>
          <a href="/">Todas las Versiones</a>
        </div>
        <div>
          <h4>Comunidad</h4>
          <a href="/">GitHub</a>
          <a href="/">Problemas</a>
          <a href="/">Projecto</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Ayuda</h4>
          <a href="/">Support</a>
          <a href="/">Resolucion de Problemas</a>
          <a href="/">Contactanos</a>
        </div>
        <div>
          <h4>Otros</h4>
          <a href="/">Termino de Servicios</a>
          <a href="/">Politicas de Privacidad</a>
          <a href="/">Licencias</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
