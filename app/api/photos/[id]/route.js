import { getPhotoById } from '@/lib/data';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
    const photoId = params?.id;
    const photo = await getPhotoById(photoId);
    let data = {};
    if (photo) {
        data = { message: 'Photo fetched successfully', data: photo };
    } else {
        data = { message: 'Invalid photo id', data: {} };
    }
    return NextResponse.json(data);
};
