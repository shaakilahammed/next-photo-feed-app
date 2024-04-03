import PhotoDetails from '@/components/PhotoDetails';

const PhotoPage = ({ params }) => {
    const { id, lang } = params;
    return <PhotoDetails id={id} lang={lang} />;
};

export default PhotoPage;
