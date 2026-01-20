export interface Car {
  id: string;
  vendor: {
    name: string;
    logo: string;
    rating: number;
  };
  location: {
    pickup_location: string;
  };
  car: {
    name: string;
    category: string;
    image_url: string;
    features: {
      passengers: number;
      bags: number;
      has_ac: boolean;
      transmission: string;
    };
  };
  tags: string[];
  badge: string;
  pricing: {
    currency: string;
    options: {
      type: string;
      name: string;
      description: string;
      price_per_day: number;
      total_price: number;
      original_price_per_day: number;
      discount_percentage?: number;
      inclusions: string[];
      is_recommended: boolean;
      is_offer?: boolean;
      button_text: string;
    }[];
  };
}

export const CarsService = {
  getCars: async (): Promise<Car[]> => {
    const response = await fetch('/api/cars');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
};
