package com.share.scienceMaterials.services;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Objects;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileService {

	private final String path = ".\\src\\main\\resources\\static\\files\\";
	public List<String> saveFiles(List<MultipartFile> files) {
		List<String> savedFilePaths = new ArrayList<>();
		for(MultipartFile file:files) {
			try {
				String savedFilePath = saveFile(file.getBytes(), file.getOriginalFilename());
				if(Objects.nonNull(savedFilePath)) {
					savedFilePaths.add(savedFilePath);		
				}
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		return savedFilePaths;
	}
	
	public String saveFile(byte[] content, String fileName) {
		StringBuilder filePath = new StringBuilder("")
				.append(new Date().getTime())
				.append(fileName);
		Path newPath = Paths.get(path+filePath.toString());
		try {
			Files.createDirectories(newPath.getParent());
			Files.write(newPath, content);
			return filePath.toString();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	public Resource getFile(String fileName) {
		Resource file = null;
		try {
			Path filePath = Paths.get(path + fileName);
			file = new UrlResource(filePath.toUri());

		} catch (Exception e) {
			e.printStackTrace();
		}

		return file;
	}
}
