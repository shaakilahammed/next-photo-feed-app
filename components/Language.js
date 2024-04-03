import Image from 'next/image';

const Language = () => {
    return (
        <div className="relative">
            <button className="flex items-center gap-2">
                <Image
                    src="/assets/images/bd.png"
                    alt="bangla"
                    height={32}
                    width={32}
                    className="max-w-8"
                />
                Bangla
            </button>

            {/* <!-- dropdown --> */}
            {/* <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
                <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                    <Image
                        src="/assets/images/bd.png"
                        alt="bangla"
                        width={32}
                        height={32}
                        className="max-w-8"
                    />
                    Bangla
                </li>
                <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                    <Image
                        src="/assets/images/usa.png"
                        alt="bangla"
                        height={32}
                        width={32}
                        className="max-w-8"
                    />
                    English
                </li>
            </div> */}
        </div>
    );
};

export default Language;
