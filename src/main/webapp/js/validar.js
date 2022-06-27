/**
 * 
 */

function validar() {
	
	
	//ASYNC
	//let response = await axios.get('http://localhost:8080/ejercicio-web/controllers/ListadoServlet');
	
	//console.log(response.data);
	
	const data = {
		"marcas": [
			{
				"id": 1,
				"descripcion":"Samsung",
				"codigo": "SM1",
				"habilitada": 1
			},
			{
				"id": 2,
				"descripcion":"LG",
				"codigo": "LG-TV",
				"habilitada": 1
			},	
			{
				"id": 3,
				"descripcion":"HUAWEI",
				"codigo": "PC D15",
				"habilitada": 1
			}		
		],
		"categorias": [
			{
				"id": 1,
				"descripcion":"ElectroHogar",
				"codigo": "EleHogar01",
				"habilitada": 1
			},			
			{
				"id": 2,
				"descripcion":"Moviles",
				"codigo": "Mov01",
				"habilitada": 1
			}
			,			
			{
				"id": 3,
				"descripcion":"Portatiles",
				"codigo": "Port001",
				"habilitada": 1
			}
		]
	};
	
	//Manejo modal
	const tablasModal = new bootstrap.Modal(document.getElementById('tablasModal'))
	tablasModal.show();
	
	let tablaMarcas = document.getElementById('tablaMarBody');
	
	tablaMarcas.innerHTML = "";
	
	for (let mar of data.marcas){
		
		tablaMarcas.innerHTML = tablaMarcas.innerHTML + 
		`
			<tr>
		      <th scope="row">${mar.id}</th>
		      <td>${mar.descripcion}</td>
		      <td>${mar.codigo}</td>
		      <td>${mar.habilitada}</td>
		   
		      <td>
			  	<button type="button" class="btn btn-info" onclick="abrirFormArt(${mar.id})" >Editar Marca</button>
			  </td>	
		    </tr>
		`
	};
	
	let tablaCatg = document.getElementById('tablaCatgBody');
	
	tablaCatg.innerHTML = "";
	
	for (let catg of data.categorias){
		tablaCatg.innerHTML = tablaCatg.innerHTML +
		`
			<tr>
		      <th scope="row">${catg.id}</th>
		      <td>${catg.descripcion}</td>
		      <td>${catg.codigo}</td>
		      <td>${catg.habilitada}</td>
		      <td>
			  	<button type="button" class="btn btn-info" onclick="abrirFormCatg(${catg.id})" >Editar Categoria</button>
			  </td>
		    </tr>
		`
	}
};

function abrirFormArt(id){
	const data = {
		"articulos": [
			{
				"id": 1,
				"descripcion":"Nueva Descripción",
				"codigo": "Nuevo Codigo",
				"habilitada": 1
			},
			{
				"id": 2,
				"descripcion":"Nueva Descripción 2",
				"codigo": "Nuevo Codigo 2",
				"habilitada": 1
			},
			{
				"id": 3,
				"descripcion":"Nueva Descripción 3",
				"codigo": "Nuevo Codigo 3",
				"habilitada": 1
			}
						
		]
	};
	
	let art;
	
	for (let categoria of data.articulos){
		if(categoria.id === id){
			art = categoria;
		}
	};
		
	let articuloModalBody = document.getElementById('artModalBody');
	
	articuloModalBody.innerHTML = 
	`
		<form>
			<div class="mb-3" id="divId" >
				<label class="form-label">ID</label>	 
				<span>${art.id}</span>				
		  	</div>
			<div class="mb-3" id="descripcion" >
				<label for="tituloInput" class="form-label">descripcion</label>
			   	<input type="text" class="form-control" id="tituloInput" value="${art.titulo}">
		  	</div>
		  	<div class="mb-3" id="Codigo" >
			  <label for="codigoInput" class="form-label">Codigo</label>
			  <input type="text" class="form-control" id="codigoInput" value="${art.codigo}">
		  	</div>
		  	<div class="mb-3" id="habilitada" >
			  <label for="precioInput" class="form-label">habilitada</label>
			  <input type="number" class="form-control" id="precioInput" value="${art.precio}">
		  	</div>
		  	<button type="submit" class="btn btn-primary">Guardar</button>
		</form>
	`
	const articuloModal = new bootstrap.Modal(document.getElementById('formArtModal'))
	articuloModal.show();
}

function abrirFormCatg(id){
	debugger
	
	const data = {
		"categorias": [
			{
				"id": 1,
				"descripcion":"ElectroHogar",
				"codigo": "EleHogar01",
				"habilitada": 1
			},			
			{
				"id": 2,
				"descripcion":"Moviles",
				"codigo": "Mov01",
				"habilitada": 1
			}
			,			
			{
				"id": 3,
				"descripcion":"Portatiles",
				"codigo": "Port01",
				"habilitada": 1
			}
		]
	};
	
	let catg;
	
	for (let categoria of data.categorias){
		if(categoria.id === id){
			catg = categoria;
		}
	};
	
	let categoriaModalBody = document.getElementById('catgModalBody');
	
	categoriaModalBody.innerHTML = 
	`
		<form>
			<div class="mb-3" id="divId" >
				<label class="form-label">ID</label>
				<span id=${catg.id}></span>
			</div>
				<div class="mb-3" id="descripcionCat">	
				<label for="descripcionInput" class="form-label">Descripcion'</label>
				<input type="text" class="form-control" id="descripcionInput" value="${catg.descripcion}">
		  	</div>
		  	<div class="mb-3" id="divCodigo" >
			  <label for="codigoInput" class="form-label">Codigo</label>
			  <input type="text" class="form-control" id="codigoInput" value="${catg.codigo}">
		  	</div>
		  	<div class="mb-3" id="divHabilitada" >
			  <label for="habilitadaInput" class="form-label">Habilitada</label>
			  <input type="text" class="form-control" id="habilitadaInput" value="${catg.habilitada}">
		  	</div>			  	
		  <button type="submit" class="btn btn-primary">Guardar</button>
		</form>
	`
		
	const categoriaModal = new bootstrap.Modal(document.getElementById('formCatgModal'))
	categoriaModal.show();
}
