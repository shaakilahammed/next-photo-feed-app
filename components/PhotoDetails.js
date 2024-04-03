import { getDictionary } from '@/app/[lang]/dictionaries/dictionaries';
import Image from 'next/image';

const PhotoDetails = async ({ lang, id }) => {
    const response = await fetch(`${process.env.API_BASE_URL}/photos/${id}`);
    const { data } = await response.json();
    const { title, url, tags, views, share, uploaded, author, likes } = data;
    const ditionary = await getDictionary(lang);
    return (
        <div className="grid grid-cols-12 gap-4 2xl:gap-10">
            {/* <!-- main photo --> */}
            <div className="col-span-12 lg:col-span-8 border rounded-xl">
                <Image
                    className="max-w-full h-full max-h-[70vh] mx-auto object-contain"
                    src={url}
                    alt={title}
                    width={900}
                    height={500}
                />
            </div>
            {/* <!-- main photo ends --> */}

            {/* <!-- details card --> */}
            <div className="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
                <h2 className="text-lg lg:text-2xl font-bold mb-2">{title}</h2>
                <div className="text-xs lg:text-sm text-black/60 mb-6">
                    {tags.map((tag) => `#${tag} `)}
                </div>
                {/* <!-- info rows --> */}
                <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
                    {/* <!-- item start --> */}
                    <div className="flex justify-between">
                        <span>{ditionary.views}</span>
                        <span className="font-bold">{views}</span>
                    </div>
                    {/* <!-- item ends --> */}
                    {/* <!-- item start --> */}
                    <div className="flex justify-between">
                        <span>{ditionary.share}</span>
                        <span className="font-bold">{share}</span>
                    </div>
                    {/* <!-- item ends --> */}
                    {/* <!-- item start --> */}
                    <div className="flex justify-between">
                        <span>{ditionary.uploadedOn}</span>
                        <span className="font-bold">{uploaded}</span>
                    </div>
                    {/* <!-- item ends --> */}
                </div>
                {/* <!-- info rows ends --> */}

                {/* <!-- author info --> */}
                <div className="mt-6">
                    {/* <!-- author header --> */}
                    <div className="flex justify-between items-center mb-3">
                        {/* <!--  --> */}
                        <div className="flex items-center gap-3">
                            <Image
                                className="size-12 lg:size-14 rounded-full border"
                                src={author.avatar}
                                alt={author.name}
                                width={50}
                                height={50}
                            />
                            <div className="spacy-y-3">
                                <h6 className="lg:text-lg font-bold">
                                    {author.name}
                                </h6>
                                <p className="text-black/60 text-xs lg:text-sm">
                                    {author.followers} {ditionary.followers}
                                </p>
                            </div>
                        </div>
                        {/* <!-- action --> */}
                        <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
                            <Image
                                src="/assets/icons/follow.svg"
                                className="w-5 h-5"
                                alt="follow"
                                width={20}
                                height={20}
                            />
                            {ditionary.follow}
                        </button>
                    </div>
                    {/* <!-- author bio --> */}
                    <p className="text-xs lg:text-sm text-black/60">
                        {author.bio}
                    </p>
                </div>
                {/* <!-- author info ends --> */}
                {/* <!-- actions --> */}
                <div className="mt-6">
                    <div className="flex items-stretch gap-3">
                        <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                            <Image
                                src="/assets/icons/heart.svg"
                                className="w-5 h-5"
                                alt="heart"
                                width={20}
                                height={20}
                            />
                            {likes}
                        </button>
                        <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                            <Image
                                src="/assets/icons/save.svg"
                                className="w-5 h-5"
                                alt="save"
                                width={20}
                                height={20}
                            />
                            {ditionary.save}
                        </button>
                        <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
                            <Image
                                src="/assets/icons/share.svg"
                                className="w-5 h-5"
                                alt="share"
                                width={20}
                                height={20}
                            />
                            {ditionary.share}
                        </button>
                    </div>
                </div>
            </div>
            {/* <!-- details card ends --> */}
        </div>
    );
};

export default PhotoDetails;
