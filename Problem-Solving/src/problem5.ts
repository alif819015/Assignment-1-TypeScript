{

    interface Car {
        make: string;
        model: string;
        year: number;
      }
      
      interface Driver {
        name: string;
        licenseNumber: string;
      }
      

      const combineCarAndDriver = (car: Car, driver: Driver): { car: Car; driver: Driver } => {
        return {car, driver};
      }
      
      const carInfo: Car = { make: 'Toyota', model: 'Camry', year: 2023 };
      const driverInfo: Driver = { name: 'Mahmud Hasan', licenseNumber: 'PH12345' };
      
      const combinedInfo = combineCarAndDriver(carInfo, driverInfo);
      console.log(combinedInfo);
      


}   