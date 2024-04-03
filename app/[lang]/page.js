import { getDictionary } from './dictionaries/dictionaries';

const Home = async ({ params: { lang } }) => {
    const dictionary = await getDictionary(lang);
    return <div>{dictionary.save}</div>;
};

export default Home;
