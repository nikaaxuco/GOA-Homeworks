 
 function Product(id, price, discount) {
      this.id = id;
      this.price = price;
      this.discount = discount;

      this.changePrice = function() {
          let discAmount = (this.price * this.discount) / 100;
          let finalPrice = this.price - discAmount;
          return finalPrice;
      }
  }

