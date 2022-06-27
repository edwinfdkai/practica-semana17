package services.impl;

import dao.imp.MarcasDaoImpl;
import dominio.Marcas;
import services.MarcasServices;

public class MarcasServiceImpl extends AbstractBaseService<Marcas> implements MarcasServices{
	
	public MarcasServiceImpl() {
		super(new MarcasDaoImpl());
	}
}
