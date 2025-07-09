import {v2 as cloudinary} from "cloudinary"

export default async function uploadToCloudinary(file: Express.Multer.File): Promise<string> {
    try {
        const result = await cloudinary.uploader.upload(file.path, {
            folder: "edulift",
            resource_type: "auto",
        });
        return result.secure_url;
    } catch(error) {
        throw new Error("Error uploading image to Cloudinary: " + error)
    }
}