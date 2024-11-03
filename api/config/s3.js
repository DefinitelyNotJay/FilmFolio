import {
	S3Client,
	PutObjectCommand,
	DeleteObjectCommand,
    GetObjectCommand
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

import dotenv from 'dotenv';

dotenv.config();

const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const accessKey = process.env.UNKNOWN_ACC_KEY_ID;
const secretAccessKey = process.env.UNKNOWN_SEC_ACC_KEY;
const sessionToken = process.env.UNKNOWN_SES_TOK;

const s3 = new S3Client({
	credentials: {
		accessKeyId: accessKey,
		secretAccessKey: secretAccessKey,
		sessionToken: sessionToken,
	},
	region: bucketRegion,
});

export async function putObj(originalName, buffer, contentType) {
	try {
		const command = new PutObjectCommand({
			Bucket: bucketName,
			Key: originalName,
			Body: buffer,
			ContentType: contentType,
		});
		await s3.send(command);
	} catch (err) {
		console.log(err);
		throw err;
	}
}

export async function getImageUrl(imageUrl) {
	const imageList = imageUrl.split('/').slice(-1);
	const key = imageList[imageList.length - 1];
	const getObjectParams = {
		Bucket: bucketName,
		Key: key,
	};
	const command = new GetObjectCommand(getObjectParams);
	const url = await getSignedUrl(s3, command, { expiresIn: 36000 });
	return url;
}

export async function deleteImage(imageUrl) {
	const imageList = imageUrl.split('/').slice(-1);
	const key = imageList[imageList.length - 1];
	const command = new DeleteObjectCommand({
		Bucket: bucketName,
		Key: key,
	});
	const response = await s3.send(command);

    return response.DeleteMarker
}
