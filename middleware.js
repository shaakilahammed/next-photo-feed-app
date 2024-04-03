import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextResponse } from 'next/server';

const locales = ['en', 'bn'];
const defaultLocale = 'en';

const getLocale = (request) => {
    const acceptedLanguage =
        request.headers.get('accept-language') ?? undefined;
    const headers = { 'accept-language': acceptedLanguage };
    const languages = new Negotiator({ headers }).languages();
    return match(languages, locales, defaultLocale);
};

export const middleware = (request) => {
    const pathname = request.nextUrl.pathname;

    const isMissingLocale = locales.every(
        (locale) =>
            !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (isMissingLocale) {
        const locale = getLocale(request);
        return NextResponse.redirect(
            new URL(`/${locale}/${pathname}`, request.url)
        );
    }
    return NextResponse.next();
};

export const config = {
    matcher: [
        // Skip all internal paths (_next, assets, api)
        '/((?!api|assets|.*\\..*|_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
};
