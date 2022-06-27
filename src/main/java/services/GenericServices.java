package services;

import java.util.List;

import services.exception.ServiceException;

public interface GenericServices <T>{
	

	public T getOne(Long id) throws ServiceException;
	
	public void delete(Long id) throws ServiceException;
	
	public T save(T entity) throws ServiceException;
	
	public void update(T entity) throws ServiceException;
	
	public List<T> findAll() throws ServiceException;
	
	public List<T> findAllBy(String criteria) throws ServiceException; 
}


