'use client';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';

const Modal = ({ children }) => {
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const router = useRouter();

    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const onClose = (e) => {
        if (e.target === overlay.current || e.target === wrapper.current) {
            if (onDismiss) onDismiss();
        }
    };

    const onKeyDown = useCallback(
        (e) => {
            if (e.key === 'Escape') onDismiss();
        },
        [onDismiss]
    );

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [onKeyDown]);
    return (
        <div
            ref={overlay}
            className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 p-10"
            onClick={onClose}
        >
            <div
                className="bg-white relative lg:mx-20 lg:my-10 lg:p-10 rounded-md "
                ref={wrapper}
            >
                <div
                    className="absolute right-2 top-1 cursor-pointer text-2xl hover:text-red-600 transition-all"
                    onClick={onDismiss}
                >
                    ✖
                </div>

                {children}
            </div>
        </div>
    );
};

export default Modal;
