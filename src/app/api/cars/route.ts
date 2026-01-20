import { NextRequest, NextResponse } from 'next/server';

const carsData = {
  es: [
    {
      id: "car-1",
      vendor: {
        name: "Hertz",
        logo: "/design/logos/logo-hertz.png",
        rating: 4.8
      },
      location: {
        pickup_location: "En Aeropuerto"
      },
      car: {
        name: "Kia Soul",
        category: "Economico",
        image_url: "/content/cars/kia-soul/kia-soul.png",
        features: {
          passengers: 5,
          bags: 3,
          has_ac: true,
          transmission: "automatic"
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
        logo: "/design/logos/logo-avis.svg",
        rating: 4.8
      },
      location: {
        pickup_location: "En Aeropuerto"
      },
      car: {
        name: "Hyundai Santa Fe",
        category: "Intermedio",
        image_url: "/content/cars/hyundai-santa-fe/hyundai-santa-fe.png",
        features: {
          passengers: 5,
          bags: 3,
          has_ac: true,
          transmission: "automatic"
        }
      },
      tags: ["¡Oferta de Hoy!"],
      badge: "Seguro de Viajes Incluido Gratis",
      badge_image: "/design/misc/travel-insurance-free.png",
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
            is_offer: true,
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
  ],
  en: [
    {
      id: "car-1",
      vendor: {
        name: "Hertz",
        logo: "/design/logos/logo-hertz.png",
        rating: 4.8
      },
      location: {
        pickup_location: "At Airport"
      },
      car: {
        name: "Kia Soul",
        category: "Economy",
        image_url: "/content/cars/kia-soul/kia-soul.png",
        features: {
          passengers: 5,
          bags: 3,
          has_ac: true,
          transmission: "automatic"
        }
      },
      tags: ["Recommended"],
      badge: "Free Travel Insurance Included",
      pricing: {
        currency: "COP",
        options: [
          {
            type: "inclusive",
            name: "With Insurance",
            description: "All Inclusive Rate",
            price_per_day: 319552,
            total_price: 926552,
            original_price_per_day: 550552,
            discount_percentage: 45,
            inclusions: ["Rental Car Insurance", "Third Party Insurance"],
            is_recommended: true,
            button_text: "Book Now"
          },
          {
            type: "basic",
            name: "No Insurance",
            description: "Basic Rate",
            price_per_day: 319552,
            total_price: 926552,
            original_price_per_day: 550552,
            inclusions: ["Rate without Insurance"],
            is_recommended: false,
            button_text: "Book Now"
          }
        ]
      }
    },
    {
      id: "car-2",
      vendor: {
        name: "Avis",
        logo: "/design/logos/logo-avis.svg",
        rating: 4.8
      },
      location: {
        pickup_location: "At Airport"
      },
      car: {
        name: "Hyundai Santa Fe",
        category: "Intermediate",
        image_url: "/content/cars/hyundai-santa-fe/hyundai-santa-fe.png",
        features: {
          passengers: 5,
          bags: 3,
          has_ac: true,
          transmission: "automatic"
        }
      },
      tags: ["Today's Offer!"],
      badge: "Free Travel Insurance Included",
      badge_image: "/design/misc/travel-insurance-free.png",
      pricing: {
        currency: "COP",
        options: [
          {
            type: "inclusive",
            name: "With Insurance",
            description: "All Inclusive Rate",
            price_per_day: 319552,
            total_price: 926552,
            original_price_per_day: 550552,
            discount_percentage: 45,
            inclusions: ["Rental Car Insurance", "Third Party Insurance"],
            is_recommended: false,
            is_offer: true,
            button_text: "Default"
          },
          {
            type: "basic",
            name: "No Insurance",
            description: "Basic Rate",
            price_per_day: 319552,
            total_price: 926552,
            original_price_per_day: 550552,
            inclusions: ["Rate without Insurance"],
            is_recommended: false,
            button_text: "Book Now"
          }
        ]
      }
    }
  ],
  pt: [
    {
      id: "car-1",
      vendor: {
        name: "Hertz",
        logo: "/design/logos/logo-hertz.png",
        rating: 4.8
      },
      location: {
        pickup_location: "No Aeroporto"
      },
      car: {
        name: "Kia Soul",
        category: "Econômico",
        image_url: "/content/cars/kia-soul/kia-soul.png",
        features: {
          passengers: 5,
          bags: 3,
          has_ac: true,
          transmission: "automatic"
        }
      },
      tags: ["Recomendado"],
      badge: "Seguro de Viagem Gratuito Incluído",
      pricing: {
        currency: "COP",
        options: [
          {
            type: "inclusive",
            name: "Com Seguros",
            description: "Tarifa Tudo Incluído",
            price_per_day: 319552,
            total_price: 926552,
            original_price_per_day: 550552,
            discount_percentage: 45,
            inclusions: ["Seguro Carro Alugado", "Seguro contra Terceiros"],
            is_recommended: true,
            button_text: "Reservar"
          },
          {
            type: "basic",
            name: "Sem Seguros",
            description: "Tarifa Básica",
            price_per_day: 319552,
            total_price: 926552,
            original_price_per_day: 550552,
            inclusions: ["Tarifa sem Seguros"],
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
        logo: "/design/logos/logo-avis.svg",
        rating: 4.8
      },
      location: {
        pickup_location: "No Aeroporto"
      },
      car: {
        name: "Hyundai Santa Fe",
        category: "Intermediário",
        image_url: "/content/cars/hyundai-santa-fe/hyundai-santa-fe.png",
        features: {
          passengers: 5,
          bags: 3,
          has_ac: true,
          transmission: "automatic"
        }
      },
      tags: ["Oferta de Hoje!"],
      badge: "Seguro de Viagem Gratuito Incluído",
      badge_image: "/design/misc/travel-insurance-free.png",
      pricing: {
        currency: "COP",
        options: [
          {
            type: "inclusive",
            name: "Com Seguros",
            description: "Tarifa Tudo Incluído",
            price_per_day: 319552,
            total_price: 926552,
            original_price_per_day: 550552,
            discount_percentage: 45,
            inclusions: ["Seguro Carro Alugado", "Seguro contra Terceiros"],
            is_recommended: false,
            is_offer: true,
            button_text: "Default"
          },
          {
            type: "basic",
            name: "Sem Seguros",
            description: "Tarifa Básica",
            price_per_day: 319552,
            total_price: 926552,
            original_price_per_day: 550552,
            inclusions: ["Tarifa sem Seguros"],
            is_recommended: false,
            button_text: "Reservar"
          }
        ]
      }
    }
  ]
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const locale = searchParams.get('locale') || 'es';
  
  const cars = carsData[locale as keyof typeof carsData] || carsData.es;

  return NextResponse.json(cars);
}
