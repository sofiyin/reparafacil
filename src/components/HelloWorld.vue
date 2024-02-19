<script setup>

</script>

<template>
  <div class="a">
    <div class= "titulo"> 
      <h1 style.color="#fff">Repara Fácil</h1> 
      <h3>Encuentra tu reparador del hogar</h3>
    </div>

    <div class= "hola">
      <h2> Registrate </h2>
    </div>

    <div class="caja">
      <div class="caja1">
        <a href="#" class="btn btn-success btn-lg active" role="button" aria-pressed="true">Soy Reparador</a>
      </div>

      <div class="caja1">
        <a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Soy Cliente</a>
      </div>
    </div>

    <div class="datos">
          <input type="text" class="form-control" placeholder="Nombre">
          <input type="text" class="form-control" placeholder="Apellido">
          <input type="text" class="form-control" placeholder="Telefono">
          <input type="text" class="form-control" placeholder="Dirección">
          <input type="text" class="form-control" placeholder="Especialidad">
          <input type="text" class="form-control" placeholder="Experiencia">
    </div>

    <router-link to="/BuscarRep">
      Siguiente
    </router-link>

    </div>

  
</template>

