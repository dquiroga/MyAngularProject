<div class="container">

  <form class="form-signin" role="form" novalidate>
    <h2 class="form-signin-heading">My Loggin Application</h2>
    <input type="text" class="form-control" placeholder="Usuario" required autofocus ng-model="usuario.nombreUsuario" >
    <input type="password" class="form-control" placeholder="Clave" ng-model="usuario.clave">
    <label class="checkbox">
      <input type="checkbox" value="remember-me"> Recordar clave?
    </label>
    <button class="btn btn-lg btn-primary btn-block" type="submit"  ng-click="login()">Iniciar sesion</button>
  </form>

</div> <!-- /container -->
