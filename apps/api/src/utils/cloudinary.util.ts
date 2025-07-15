import { v2 as cloudinary } from "cloudinary";
import { Readable } from 'stream';

interface UploadResult {
    url: string;
    publicId: string;
}

export const uploadToCloudinary = async (file: Express.Multer.File): Promise<UploadResult> => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder: "edulift/courses",
                resource_type: "video",
                chunk_size: 6000000,
                eager: [
                    { width: 640, height: 360, crop: "pad" },
                ]
            },
            (error, result) => {
                if (error) {
                    console.error('Cloudinary upload error:', error);
                    reject(new Error(`Failed to upload file: ${error.message}`));
                    return;
                }
                if (!result?.secure_url || !result.public_id) {
                    reject(new Error('Invalid response from Cloudinary'));
                    return;
                }
                resolve({
                    url: result.secure_url,
                    publicId: result.public_id
                });
            }
        );

        const readableStream = new Readable();
        readableStream.push(file.buffer);
        readableStream.push(null);
        readableStream.pipe(uploadStream);
    });
};

export const uploadMultipleToCloudinary = async (files: Express.Multer.File[]): Promise<UploadResult[]> => {
    try {
        const uploadPromises = files.map(file => uploadToCloudinary(file));
        return await Promise.all(uploadPromises);
    } catch (error) {
        console.error('Error uploading multiple files:', error);
        throw new Error('Failed to upload some files');
    }
};

export const deleteFromCloudinary = async (publicIds: string[]): Promise<void> => {
    try {
        await cloudinary.api.delete_resources(publicIds, {
            resource_type: 'video'
        });
    } catch (error) {
        console.error('Error deleting from Cloudinary:', error);
        throw new Error('Failed to delete files from Cloudinary');
    }
};