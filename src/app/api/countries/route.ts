import { NextResponse } from 'next/server';

export async function GET() {
  const countries = [
    { code: "CO", name: "Colombia", flag: "🇨🇴" },
    { code: "CR", name: "Costa Rica", flag: "🇨🇷" },
    { code: "EC", name: "Ecuador", flag: "🇪🇨" },
    { code: "SV", name: "El Salvador", flag: "🇸🇻" },
    { code: "ES", "name": "España", flag: "🇪🇸" },
    { code: "GT", "name": "Guatemala", flag: "🇬🇹" },
    { code: "HN", "name": "Honduras", flag: "🇭🇳" }
  ];

  return NextResponse.json(countries);
}
