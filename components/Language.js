'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const Language = ({ lang }) => {
    const [locale, setLocale] = useState(lang);
    const [show, setShow] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const handleShow = () => {
        setShow((prev) => !prev);
    };

    const onChange = (selectedLocale) => {
        const redirectUrl = pathname.replace(
            `/${locale}`,
            `/${selectedLocale}`
        );
        router.push(redirectUrl);
        setLocale(selectedLocale);
        setShow(false);
    };

    return (
        <div className="relative">
            <button className="flex items-center gap-2" onClick={handleShow}>
                {locale === 'bn' ? (
                    <>
                        <Image
                            src="/assets/images/bd.png"
                            alt="bangla"
                            height={32}
                            width={32}
                            className="max-w-8"
                        />
                        Bangla
                    </>
                ) : (
                    <>
                        <Image
                            src="/assets/images/usa.png"
                            alt="english"
                            height={32}
                            width={32}
                            className="max-w-8"
                        />
                        English
                    </>
                )}
            </button>

            {/* <!-- dropdown --> */}
            {show && (
                <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
                    <li
                        onClick={() => onChange('en')}
                        className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
                    >
                        <Image
                            src="/assets/images/usa.png"
                            alt="english"
                            height={32}
                            width={32}
                            className="max-w-8"
                        />
                        English
                    </li>
                    <li
                        onClick={() => onChange('bn')}
                        className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
                    >
                        <Image
                            src="/assets/images/bd.png"
                            alt="bangla"
                            width={32}
                            height={32}
                            className="max-w-8"
                        />
                        Bangla
                    </li>
                </div>
            )}
        </div>
    );
};

export default Language;
