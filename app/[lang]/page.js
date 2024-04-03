import PhotoGrid from '@/components/PhotoGrid';

const Home = async () => {
    const response = await fetch(`${process.env.API_BASE_URL}/photos`);
    const data = await response.json();

    return <PhotoGrid photos={data.data} />;
};

export default Home;
