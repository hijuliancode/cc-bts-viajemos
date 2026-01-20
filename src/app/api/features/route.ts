import { NextResponse } from 'next/server';

export async function GET() {
  const features = [
    { id: "passengers", name: "Pasajeros", icon_code: "users" },
    { id: "bags", name: "Maletas", icon_code: "briefcase" },
    { id: "ac", name: "Aire Acondicionado", icon_code: "snowflake" },
    { id: "transmission", name: "Transmisión", icon_code: "settings" }
  ];

  return NextResponse.json(features);
}
