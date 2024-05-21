package Aleksander.S3Buckets.S3Files;

import Aleksander.S3Buckets.Constants;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
//@Controller
public class FileController {

    @Autowired
    private FileService fileService;
//    @GetMapping
//    public String getFiles(Model model) {
//        model.addAttribute("files", fileService.findAll());
//        return "index";
//    }

    @CrossOrigin(origins = "http://localhost:5173")
    @GetMapping("/api")
    public List<File> getFiles() {
        return fileService.findAll();
    }

//    @PostMapping("/saveFile")
//    public String saveFile(@RequestPart("file") MultipartFile file) {
//        // Get the file name from the uploaded file
//        String fileName = file.getOriginalFilename();
//
//        // Upload the file to the specified address
//        UUID uuid = UUID.randomUUID();
//        String uploadUrl = Constants.BUCKET_URL.getValue() + uuid.toString();
//
//        RestTemplate restTemplate = new RestTemplate();
//        HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
//
//        try {
//            byte[] fileBytes = file.getBytes();
//            HttpEntity<byte[]> requestEntity = new HttpEntity<>(fileBytes, headers);
//            ResponseEntity<String> response = restTemplate.exchange(uploadUrl, HttpMethod.PUT, requestEntity, String.class);
//
//            // Check if the upload was successful
//            if (response.getStatusCode().is2xxSuccessful()) {
//                // Save the file name to the database
//                File savedFile = fileService.createNewFile(fileName, uploadUrl);
////                return ResponseEntity.ok(savedFile);
//            } else {
//                // Handle the error case
////                return ResponseEntity.status(response.getStatusCode()).build();
//            }
//        } catch (IOException e) {
//            e.printStackTrace();
////            return ResponseEntity.status(500).build();
//        }
//        return "redirect:/";
//    }
//
//    @PostMapping("/update")
//    @Transactional
//    public ResponseEntity<?> updateFileName(@RequestParam("id") int id, @RequestParam("newFileName") String newFileName) {
//        fileService.updateFileName(id, newFileName);
//        return ResponseEntity.ok(null);
//    }
//    @GetMapping("/download/{id}")
//    public ResponseEntity<InputStreamResource> downloadFile(@PathVariable int id) throws IOException {
//        Optional<File> file = fileService.findById(id);
//        if (file.isEmpty()) {
//            return ResponseEntity.notFound().build();
//        }
//        String url = file.get().getUrl();
//
//        RestTemplate restTemplate = new RestTemplate();
//        byte[] fileBytes = restTemplate.getForObject(url, byte[].class);
//
//        assert fileBytes != null;
//        InputStream inputStream = new ByteArrayInputStream(fileBytes);
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.add("Content-Disposition", "attachment; filename=" + file.get().getName());
//
//        return ResponseEntity.ok()
//                .headers(headers)
//                .contentLength(fileBytes.length)
//                .contentType(MediaType.APPLICATION_OCTET_STREAM)
//                .body(new InputStreamResource(inputStream));
//    }
//
//    @PostMapping("/delete/{id}")
//    public String deleteFile(@PathVariable int id) throws IOException {
//        Optional<File> file = fileService.findById(id);
//        if (file.isEmpty()) {
//            return "redirect:/";
//        }
//        String url = file.get().getUrl();
//
//        RestTemplate restTemplate = new RestTemplate();
//        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.DELETE, null, String.class);
//        if (response.getStatusCode().is2xxSuccessful()) {
//            fileService.deleteById(id);
//        }
//
//        return "redirect:/";
//    }
}
