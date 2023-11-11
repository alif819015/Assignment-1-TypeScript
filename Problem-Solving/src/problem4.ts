{

    const findNumbers = (mixedData: (number | string)[]): number => {
        let total: number = 0;
      
        for (const item of mixedData) {
          if (typeof item === 'number') {
            total += item as number;
          }
        }     
        return total;
      }
      
      const mixedData: (number | string)[] = [1, 'two', 3, 'four', 5];
      const result = findNumbers(mixedData);
      
      console.log(result);


}