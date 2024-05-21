package Aleksander.S3Buckets.S3Files;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepository extends JpaRepository<File, Integer> {

    @Modifying
    @Query("Update File f set f.name=?1 where f.id=?2")
    int setFileNameById(String newFileName, int id);

}
