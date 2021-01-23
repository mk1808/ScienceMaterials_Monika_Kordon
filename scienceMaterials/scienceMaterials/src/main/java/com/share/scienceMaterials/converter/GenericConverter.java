package com.share.scienceMaterials.converter;

public interface GenericConverter {
	
	public <D, E> E createFromDto(D dto);
	public <D, E> D createFromEntity(E entity);
}
