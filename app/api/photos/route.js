import { getAllPhotos } from '@/lib/data';
import { NextResponse } from 'next/server';

export const GET = async () => {
    const photos = await getAllPhotos();
    let data = {};
    if (photos) {
        data = { message: 'Photos fetched successfully', data: photos };
    } else {
        data = { message: 'Photo fetched faild', data: [] };
    }
    return NextResponse.json(data);
};
