package dao;

import java.util.List;

import exception.DuplicatedException;
import exception.GenericException;

public interface GenericDao<T> {
	
	public T getOne(Long id) throws GenericException;

	public void delete(Long id) throws GenericException;

	public T save(T entity) throws DuplicatedException, GenericException;

	public void update(T entity) throws GenericException, DuplicatedException;

	public List<T> findAll() throws GenericException;
	
	public List<T> findBySQL(String whereSQL) throws GenericException;


}
