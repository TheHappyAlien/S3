package Aleksander.S3Buckets;

public enum Constants {
    BUCKET_URL("https://neysbh3m3l.execute-api.us-east-1.amazonaws.com/dev/awslab5fileuploadbucket/");

    private final String value;
    Constants(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
