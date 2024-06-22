package Aleksander.S3Buckets.S3Files;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.*;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import Aleksander.S3Buckets.Constants;

@RestController
@RequestMapping("api")
@CrossOrigin(origins ="http://localhost:5173" )
public class FileController {

    @Autowired
    private FileService fileService;

    @GetMapping()
    public List<File> getFiles() {
        return fileService.findAll();
    }


    @PostMapping("/saveFile")
    public ResponseEntity<File> saveFile(@RequestPart("file") MultipartFile file) {
       String fileName = file.getOriginalFilename();

       UUID uuid = UUID.randomUUID();
       String uploadUrl = Constants.BUCKET_URL.getValue() + uuid.toString();

       RestTemplate restTemplate = new RestTemplate();
       HttpHeaders headers = new HttpHeaders();
       MediaType mediaType = MediaType.parseMediaType(Objects.requireNonNull(file.getContentType()));
       headers.setContentType(mediaType);

       try {
           byte[] fileBytes = file.getBytes();
           HttpEntity<byte[]> requestEntity = new HttpEntity<>(fileBytes, headers);
           ResponseEntity<String> response = restTemplate.exchange(uploadUrl, HttpMethod.PUT, requestEntity, String.class);

           if (response.getStatusCode().is2xxSuccessful()) {
               File savedFile = fileService.createNewFile(fileName, uploadUrl);
               return ResponseEntity.ok(savedFile);
           } else {
               return ResponseEntity.status(response.getStatusCode()).build();
           }
        } catch (IOException e) {
           e.printStackTrace();
           return ResponseEntity.status(500).build();
        }
    }

    @PostMapping("/update")
    @Transactional
    public ResponseEntity<?> updateFileName(@RequestParam("id") int id, @RequestParam("newFileName") String newFileName) {
        fileService.updateFileName(id, newFileName);
        return ResponseEntity.ok().build();
    }


    @GetMapping("/download/{id}")
    public ResponseEntity<?> downloadFile(@PathVariable int id) throws IOException {
        Optional<File> file = fileService.findById(id);
        if (file.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        String url = file.get().getUrl();

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<byte[]> response = restTemplate.getForEntity(url, byte[].class);

        if (response.getStatusCode().is2xxSuccessful()) {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
            headers.setContentDisposition(ContentDisposition.attachment().filename(file.get().getName()).build());

            return new ResponseEntity<>(response.getBody(), headers, HttpStatus.OK);
        } else {
            return ResponseEntity.status(response.getStatusCode()).build();
        }
    }


    @PostMapping("/delete/{id}")
    public ResponseEntity<?> deleteFile(@PathVariable int id) throws IOException {
        Optional<File> file = fileService.findById(id);
        if (file.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        String url = file.get().getUrl();

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.DELETE, null, String.class);
        if (response.getStatusCode().is2xxSuccessful()) {
            fileService.deleteById(id);
        }

        return ResponseEntity.ok().build();
    }
}
