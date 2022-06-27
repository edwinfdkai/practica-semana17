package controllers;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;

import com.fasterxml.jackson.databind.ObjectMapper;

import dominio.Categorias;
import dominio.Marcas;
import services.CategoriaServices;
import services.MarcasServices;
import services.exception.ServiceException;
import services.impl.CategoriaServiceImpl;
import services.impl.MarcasServiceImpl;

@WebServlet("/controllers/ListadoServlet")
public class ListadoServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletRequest response) throws ServletException, IOException {
		
		//Llamado capa de servicio
		MarcasServices marcaService = new MarcasServiceImpl();
		CategoriaServices categoriaService = new CategoriaServiceImpl();
		
		//Clase object mapper de Jackson
		ObjectMapper om = new ObjectMapper();
				
		try {
			
			List<Marcas> listaMarcas = marcaService.findAll();
			List<Categorias> listaCategoria = categoriaService.findAll();
			
			Map<String, Object> jsonObject = new HashMap<String, Object>();
			jsonObject.put("categorias", listaCategoria);
			jsonObject.put("marcas", listaMarcas);
			
			String json = om.writeValueAsString(jsonObject);
			
			response.getAttribute(json);
			
		} catch (ServiceException e) {
			e.printStackTrace();
		}		
	}
}

