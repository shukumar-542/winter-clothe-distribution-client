interface ProductCount {
    email: string;
    name: string;
    totalProducts: number;
    sweaters: number;
    jackets: number;
    gloves: number;
  }
  
  const CountProductAdded = (array: {
    email: string;
    name: string;
    category: 'sweeter' | 'jacket' | 'gloves';
  }[]): ProductCount[] => {
    const userProducts: Record<string, ProductCount> = {};
  
    array.forEach(obj => {
      const { email, name, category } = obj;
      const key = `${email}-${name}`;
  
      if (!userProducts[key]) {
        userProducts[key] = {
          email,
          name,
          totalProducts: 1,
          sweaters: category === 'sweeter' ? 1 : 0,
          jackets: category === 'jacket' ? 1 : 0,
          gloves: category === 'gloves' ? 1 : 0
        };
      } else {
        userProducts[key].totalProducts++;
        if (category === 'sweeter') {
          userProducts[key].sweaters++;
        } else if (category === 'jacket') {
          userProducts[key].jackets++;
        } else if (category === 'gloves') {
          userProducts[key].gloves++;
        }
      }
    });
  
    return Object.values(userProducts);
  };
  
  export default CountProductAdded;
  