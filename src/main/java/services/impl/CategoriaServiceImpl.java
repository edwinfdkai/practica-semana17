package services.impl;

import dao.imp.CategoriaDaoImpl;
import dominio.Categorias;
import services.CategoriaServices;

public class CategoriaServiceImpl extends AbstractBaseService<Categorias> implements CategoriaServices{
	
	public CategoriaServiceImpl() {
		super(new CategoriaDaoImpl());
	}
}
