import formidable, { File as FormidableFile } from "formidable";
import fs from "fs";
import path from "path";
import { defineEventHandler } from "h3";
import Video from "~~/models/Video";

export default defineEventHandler(async (event) => {
    const options = {
        uploadDir: path.join(process.cwd(), "videos"), // upload path
        keepExtensions: true, // Keep file extension
    };

    const form = formidable(options);

    return new Promise((resolve, reject) => {
        form.parse(event.node.req, async (err, fields, files) => {
            if (err) {
                reject(err);
                return;
            }

            // Access the uploaded files
            const filesArray = files.file as formidable.File[];

            try {
                // Process each uploaded file
                const uploadedVideos = [];
                for (const file of filesArray) {
                    // Check if the file and its properties are available
                    if (!file || !file.filepath) {
                        reject(
                            new Error(
                                "File upload failed: No file path received."
                            )
                        );
                        return;
                    }

                    const filePath = file.filepath; // Path of the uploaded file
                    console.log(filePath);
                    const fileName = path.basename(filePath); // Get just the filename from path

                    // Ensure the upload directory exists
                    const uploadDir = options.uploadDir;
                    if (!fs.existsSync(uploadDir)) {
                        fs.mkdirSync(uploadDir, { recursive: true });
                    }

                    // Move the uploaded file to the 'videos/' folder
                    const newFilePath = path.join(uploadDir, fileName);
                    fs.renameSync(filePath, newFilePath); // Move file to target folder

                    // Insert into the database using Objection.js
                    const video = await Video.query().insert({
                        filename: fileName,
                        path: newFilePath,
                        size: file.size,
                        created_at: new Date().toISOString(),
                    });

                    uploadedVideos.push(video);
                }

                resolve({ videos: uploadedVideos });
            } catch (error: any) {
                reject(
                    new Error(`Database insertion failed: ${error}`)
                );
            }
        });
    });
});
