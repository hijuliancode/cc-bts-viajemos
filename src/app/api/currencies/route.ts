import { NextResponse } from 'next/server';

export async function GET() {
  const currencies = [
    { code: "USD", name: "Dólar Estadounidense", symbol: "$", rate: 4200 },
    { code: "COP", name: "Peso Colombiano", symbol: "$", rate: 1 },
    { code: "PAB", name: "Balboa Panameño", symbol: "B/.", rate: 4200 },
    { code: "BOB", name: "Boliviano", symbol: "Bs.", rate: 608 },
    { code: "CRC", name: "Colón Costarricense", symbol: "₡", rate: 8 },
    { code: "NIC", name: "Córdoba Nicaragüense", symbol: "C$", rate: 114 },
    { code: "CAD", name: "Dólar Canadiense", symbol: "$", rate: 3100 },
    { code: "EUR", name: "Euro", symbol: "€", rate: 4500 },
    { code: "PYG", name: "Guaraní Paraguayo", symbol: "₲", rate: 0.5 },
    { code: "HNL", name: "Lempira Hondureño", symbol: "L", rate: 170 },
    { code: "GBP", name: "Libra Esterlina Británica", symbol: "£", rate: 5300 },
    { code: "PEN", name: "Nuevo Sol Peruano", symbol: "S/", rate: 1100 }
  ];

  return NextResponse.json(currencies);
}
