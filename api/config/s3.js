import { S3Client, PutObjectCommand, ListBucketsCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { GetObjectCommand } from "@aws-sdk/client-s3";

import dotenv from "dotenv"

dotenv.config()

const bucketName = process.env.BUCKET_NAME
const bucketRegion = process.env.BUCKET_REGION
const accessKey = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
const sessionToken = process.env.AWS_SESSION_TOKEN

const s3 = new S3Client({
    credentials: {
        accessKeyId: accessKey,
        secretAccessKey: secretAccessKey,
        sessionToken: sessionToken
    },
    region: bucketRegion
})

export async function putObj(originalName, buffer, contentType){

    try {
        const command = new PutObjectCommand({
            Bucket: bucketName,
            Key: originalName,
            Body: buffer,
            ContentType: contentType
        })
        await s3.send(command)
    }
    catch(err){
        console.log(err)
        throw err
    }
}


export async function getImageUrl(imageUrl){
    const imageList = imageUrl.split('/').slice(-1);
    const key = imageList[imageList.length - 1];
    const getObjectParams = {
        Bucket: bucketName,
        Key: key
    }
    const command = new GetObjectCommand(getObjectParams)
    const url = await getSignedUrl(s3, command, { expiresIn: 36000 });
    return url
}