import { useQuery } from '@tanstack/react-query';
import { CarsService, type Car } from '@/services/cars-service';

export function useCars() {
  return useQuery<Car[]>({
    queryKey: ['cars'],
    queryFn: CarsService.getCars,
  });
}
