import Modal from '@/components/Modal';
import PhotoDetails from '@/components/PhotoDetails';

const PhotoModal = ({ params }) => {
    const { id, lang } = params;
    return (
        <Modal>
            <PhotoDetails id={id} lang={lang} />
        </Modal>
    );
};

export default PhotoModal;
