import {Link} from "react-router-dom"
function Menu() {
    return (
        <div className="menu">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/Inicio">Medlife</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active" aria-current="page" to="/Inicio">Inicio</Link>
        <Link class="nav-link" to="/Registro">registro</Link>
        <Link class="nav-link" aria-disabled="true" to="/Contacto">Contacto</Link>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
}
export default Menu