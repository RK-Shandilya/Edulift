import {v2 as cloudinary} from "cloudinary"

export default async function uploadToCloudinary(imagePath: string): Promise<string> {
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true
    }

    try {
        const result = await cloudinary.uploader.upload(imagePath, options);
        return result.secure_url;
    } catch(error) {
        throw new Error("Error uploading image to Cloudinary: " + error)
    }
}