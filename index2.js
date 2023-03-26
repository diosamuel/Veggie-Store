class VegetableStore {
  constructor() {
    if (VegetableStore.instance) {
      return VegetableStore.instance;
    }

    VegetableStore.instance = this;
    this.vegetables = [
  {
    id:1,
    title: "Tomatoes",
    price: 10000,
  },
  {
    id:2,
    title: "Carrots",
    price: 8000,
  },
  {
    id:3,
    title: "Broccoli",
    price: 12000,
  },
  {
    id:4,
    title: "Cucumbers",
    price: 9000,
  },
  {
    id:5,
    title: "Bell Peppers",
    price: 11000,
  },
  {
    id:6,
    title: "Spinach",
    price: 15000,
  },
  {
    id:7,
    title: "Onions",
    price: 7000,
  },
  {
    id:8,
    title: "Eggplants",
    price: 13000,
  },
  {
    id:9,
    title: "Potatoes",
    price: 6000,
  },
  {
    id:10,
    title: "Lettuce",
    price: 10000,
  },
  {
    id:11,
    title: "Zucchinis",
    price: 10000,
  }
];
    this.veggieCart = [];
    this.searchStrategy;
  }

  add(id) {
    this.veggieCart.push(this.vegetables[id-1]);
  }

  sum() {
    const total2 = this.veggieCart.reduce((acc, cur) => acc + cur.price, 0);
    return total2;
  }

  setSearchStrategy(strategy) {
    this.searchStrategy = strategy;
  }

  search(query) {
    if (!this.searchStrategy) {
      throw new Error('Search strategy must be filled');
    }

    return this.searchStrategy.search(this.vegetables, query);
  }

}

class SearchByTitle {
  search(vegetables, query) {
    return vegetables.filter(veggie => veggie.title.toLowerCase().includes(query.toLowerCase()));
  }
}

class SearchByPriceRange {
  search(vegetables, query) {
    return vegetables.filter(veggie => veggie.price >= 0 && veggie.price <= query);
  }
}

