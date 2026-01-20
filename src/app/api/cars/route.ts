import { NextResponse } from 'next/server';

export async function GET() {
  const cars = [
    {
      id: "car-1",
      vendor: {
        name: "Hertz",
        logo: "/design/vendors/hertz.svg",
        rating: 4.8
      },
      location: {
        pickup_location: "En Aeropuerto"
      },
      car: {
        name: "Kia Soul o Similar",
        category: "Economico",
        image_url: "/design/cars/kia-soul.png",
        features: {
          passengers: 5,
          bags: 3,
          has_ac: true,
          transmission: "Automático"
        }
      },
      tags: ["Recomendado"],
      badge: "Seguro de Viajes Incluido Gratis",
      pricing: {
        currency: "COP",
        options: [
          {
            type: "inclusive",
            name: "Con Seguros",
            description: "Tarifa Todo Incluido",
            price_per_day: 319552,
            total_price: 926552,
            original_price_per_day: 550552,
            discount_percentage: 45,
            inclusions: ["Seguro Auto Rentado", "Seguro a Terceros"],
            is_recommended: true,
            button_text: "Reservar"
          },
          {
            type: "basic",
            name: "Sin Seguros",
            description: "Tarifa Básica",
            price_per_day: 319552,
            total_price: 926552,
            original_price_per_day: 550552,
            inclusions: ["Tarifa sin Seguros"],
            is_recommended: false,
            button_text: "Reservar"
          }
        ]
      }
    },
    {
      id: "car-2",
      vendor: {
        name: "Avis",
        logo: "/design/vendors/avis.svg",
        rating: 4.8
      },
      location: {
        pickup_location: "En Aeropuerto"
      },
      car: {
        name: "Kia Soul o Similar",
        category: "Intermedio",
        image_url: "/design/cars/kia-soul-silver.png",
        features: {
          passengers: 5,
          bags: 3,
          has_ac: true,
          transmission: "Automático"
        }
      },
      tags: ["¡Oferta de Hoy!"],
      badge: "Seguro de Viajes Incluido Gratis",
      pricing: {
        currency: "COP",
        options: [
          {
            type: "inclusive",
            name: "Con Seguros",
            description: "Tarifa Todo Incluido",
            price_per_day: 319552,
            total_price: 926552,
            original_price_per_day: 550552,
            discount_percentage: 45,
            inclusions: ["Seguro Auto Rentado", "Seguro a Terceros"],
            is_recommended: false,
            is_offer: true, // Specific for the purple badge logic if needed separate from tags
            button_text: "Default"
          },
          {
            type: "basic",
            name: "Sin Seguros",
            description: "Tarifa Básica",
            price_per_day: 319552,
            total_price: 926552,
            original_price_per_day: 550552,
            inclusions: ["Tarifa sin Seguros"],
            is_recommended: false,
            button_text: "Reservar"
          }
        ]
      }
    }
  ];

  return NextResponse.json(cars);
}
