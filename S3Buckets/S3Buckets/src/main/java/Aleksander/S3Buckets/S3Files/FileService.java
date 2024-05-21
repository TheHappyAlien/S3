package Aleksander.S3Buckets.S3Files;

import Aleksander.S3Buckets.Constants;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FileService {
    @Autowired
    private FileRepository fileRepository;

    public File createNewFile(String fileName, String url) {
        File file = new File();
        file.setName(fileName);
        file.setUrl(url);
        return fileRepository.saveAndFlush(file);
    }
    public List<File> findAll() {
        return fileRepository.findAll();
    }

    public void updateFileName(int id, String newFileName) {
        int rowsUpdated = fileRepository.setFileNameById(newFileName, id);
        if (rowsUpdated > 1) {
            throw  new IllegalStateException("More than one entity has been updated for update query by Id. Id value: " + id + " | new file name: " + newFileName);
        }
    }

    public Optional<File> findById(int id) {
        return fileRepository.findById(id);
    }

    public void deleteById(int id) {
        fileRepository.deleteById(id);
    }
}
