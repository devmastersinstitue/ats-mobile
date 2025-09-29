package com.example.demo.service;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.oned.Code128Writer;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Base64;

public class BarcodeGeneratorService {
    public static String createCode128Base64(String text)
            throws WriterException, IOException {
        try{
            Code128Writer writer = new Code128Writer();
            BitMatrix bitMatrix = writer.encode(text, BarcodeFormat.CODE_128, 300, 100);

            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            MatrixToImageWriter.writeToStream(bitMatrix, "PNG", baos);

            return "data:image/png;base64," + Base64.getEncoder().encodeToString(baos.toByteArray());
        }catch (Exception e) {
            throw new RuntimeException("Error generating barcode", e);
        }
    }
}
