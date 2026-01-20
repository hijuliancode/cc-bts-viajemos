import { useQuery } from '@tanstack/react-query';
import { CarsService, type Car } from '@/services/cars-service';
import { useLocale } from 'next-intl';

export function useCars() {
  const locale = useLocale();
  
  return useQuery<Car[]>({
    queryKey: ['cars', locale],
    queryFn: () => CarsService.getCars(locale),
  });
}
