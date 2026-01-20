import { NextResponse } from 'next/server';

export async function GET() {
  const currencies = [
    { code: "USD", name: "Dólar Estadounidense", symbol: "$" },
    { code: "COP", name: "Peso Colombiano", symbol: "$" },
    { code: "PAB", name: "Balboa Panameño", symbol: "B/." },
    { code: "BOB", "name": "Boliviano", "symbol": "Bs." },
    { code: "CRC", "name": "Colón Costarricense", "symbol": "₡" },
    { code: "NIC", "name": "Córdoba Nicaragüense", "symbol": "C$" },
    { code: "CAD", "name": "Dólar Canadiense", "symbol": "$" },
    { code: "EUR", "name": "Euro", "symbol": "€" },
    { code: "PYG", "name": "Guaraní Paraguayo", "symbol": "₲" },
    { code: "HNL", "name": "Lempira Hondureño", "symbol": "L" },
    { code: "GBP", "name": "Libra Esterlina Británica", "symbol": "£" },
    { code: "PEN", "name": "Nuevo Sol Peruano", "symbol": "S/" }
  ];

  return NextResponse.json(currencies);
}
