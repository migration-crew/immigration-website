import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest } from "next/server";

// サポートするロケール
const locales = ['en-US', 'nl-NL', 'nl'];

// リクエストからロケールを取得する関数
function getLocale(request: Request): string {
    const headers = {
        'accept-language': request.headers.get('accept-language') || 'en-US,en;q=0.5',
    };
    const languages = new Negotiator({ headers }).languages();
    const defaultLocale = 'en-US';

    // languagesから最適なロケールを取得
    return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
    // リクエストのパスを取得
    const { pathname } = request.nextUrl;

    // パスにロケールが含まれているか確認
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    // ロケールが含まれている場合は何もしない
    if (pathnameHasLocale) return;

    // ロケールを取得
    const locale = getLocale(request);

    // 新しいパスにロケールを追加
    request.nextUrl.pathname = `/${locale}${pathname}`;

    // リダイレクトを実行
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // _next以下のパスはスキップ
        '/((?!_next).*)',
    ],
};