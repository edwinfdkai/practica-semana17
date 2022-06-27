<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<!-- http://localhost:8080/ejercicio-web/Main.jsp -->
<head>
<meta charset="UTF-8">
<title>Menu Principal</title>
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link href="./css/estilos.css" rel="stylesheet">
</head>
<body>
	
	<h1>Nuevas Categorias y Marcas</h1>
	
	<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgednWZ9wgxNlSUWgOp1fF3ZHBmd-ckOymRQ&usqp=CAU" class="img-fluid" alt="...">
	
	<div class="container">
		<div class="row">
			<div class="col">
				<button_personalizado type="button" onclick="validar()">Conozcalas</button_personalizado>
			</div>
		</div>
	</div>
	
	<!-- Modal Tablas -->
	<div class="modal fade" id="tablasModal" tabindex="-1" aria-labelledby="tablasModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="tablasModalLabel">Tablas</h5>
	        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
	      </div>
	      <div class="modal-body">
	      	<h4>Marcas</h4>
	      	<div class="table-responsive">
	      		<table class="table">
			  <thead>
			    <tr>
			      <th scope="col">ID</th>
				  <th scope="col">Descripcion</th>
				  <th scope="col">Codigo</th>
				  <th scope="col">Habilitada</th>
			    </tr>
			  </thead>
			  <tbody id="tablaMarBody">
			  	
			  </tbody>
			</table>
	      	</div>      	
		
			<h4>Categorias</h4>
			<div class="table-responsive">
				<table class="table">
				  <thead>
				    <tr>
				      <th scope="col">ID</th>
				      <th scope="col">Descripcion</th>
				      <th scope="col">Codigo</th>
				      <th scope="col">Habilitada</th>
				    </tr>
				  </thead>
				  <tbody id="tablaCatgBody">

				  </tbody>
				</table>
			</div>	 
	      </div>
	    </div>
	  </div>
	</div>
	<!-- Modal Formulario Marca -->
	<div class="modal fade" id="formArtModal" tabindex="-1" aria-labelledby="formArtModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="formArtModalLabel"></h5>
	        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
	      </div>
	      <div class="modal-body" id="artModalBody">
	      </div>
	    </div>
	  </div>
	</div>
	
	<!-- Modal Formulario Categoria -->
	<div class="modal fade" id="formCatgModal" tabindex="-1" aria-labelledby="formCatgModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="formCatgModalLabel"></h5>
	        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
	      </div>
	      <div class="modal-body" id="catgModalBody">
	      </div>
	    </div>
	  </div>
	</div>
	
<!-- AXIOS  -->
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<!-- Bootstrap JS  -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<!-- JS Propio -->
<script src="./js/validar.js" type="text/javascript"></script>
</body>
</html>
	     