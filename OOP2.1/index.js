class Customer {
    account = null;
    constructor(id, address, phone, email) {
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }

    setAccount(account) {
        this.account = account;
    }
}

class WebUser {
    customer = null;
    shoppingCart = null;
    constructor(login_id, password, state) {
        this.login_id = login_id;
        this.password = password;
        this.state = state;
    }

    setCustomer(customer) {
        this.customer = customer;
    }
    setShoppingCart(shoppingCart) {
        this.shoppingCart = shoppingCart;
    }
}

class shoppingCart {
    lineItem = [];
    constructor(created) {
        this.created = created;
    }

    addLineItem(LineItem) {
        this.LineItems = LineItem;
    }
}

//userstate

class Account {
    shoppingCart = null;
    payments = [];
    orders = [];
    constructor(id, billing_address, is_closed, open, closed) {
        this.id = id;
        this.billing_address = billing_address;
        this.is_closed = is_closed;
        this.open = open;
        this.closed = closed;
    }

    setShoppingCart(shoppingCart) {
        this.ShoppingCart = shoppingCart;
    };

    addPayment(payment) {
        this.payments.push(payment);
    }

    addOrder(order) {
        this.orders.push(order);
    }

    printOrderDetail() {
        let TotalOrderPrice = 0;
      for (let i = 0; i < this.orders.length; i++) {
        console.log("คำสั่งซื้อที่ : " + (i + 1));
        this.orders[i].printDetail();
        TotalOrderPrice += this.orders[i].total;
      }
      console.log(" ค่าใช้จ่ายรวมทั้งสิ้น : " + TotalOrderPrice + " บาท ");
    }
}

class Payment {
    constructor(id, paid, total, details) {
        this.id = id;
        this.paid = paid;
        this.total = total;
        this.details = details;
    }
}

class Order{
    LineItems = [];
    payment = null;
    total = 0;
    shipped = "";
    constructor(number, ordered, shipped, ship_to, status, total) {
        this.number = number;
        this.ordered = ordered;
        this.shipped = shipped;
        this.ship_to = ship_to;
        this.status = status;
        this.total = total;
    }

    setPayment(payment) {
        this.payment = payment;
    }

    addLineItem(LineItem) {
        this.LineItems.push(LineItem);
    }

    setTotal() {
        let total = 0;
        for (let i = 0; i < this.LineItems.length; i++) {
            total += this.LineItems[i].quantity * this.LineItems[i].price;
        }
        this.total = total;
    }
    setShippedDate(date) {
        this.shipped = date;
    }
    printDetail() {
        for (let i = 0; i < this.orderDetails.length; i++) {
            console.log("คำสั่งซื้อ" + (i + 1) + " " + this.lineItems[i].getDetail());
        }
        this.setTotal();
      console.log("ราคารวม : " + this.total + " บาท");
      console.log(
        "ชำระวันที่ : " +
          this.payment.paid +
          " เป็นจำนวนเงิน : " +
          this.payment.total +
          " บาท"
      );
    }
}

    //Enumeration (enum)

class UserState {
    static NEW = new UserState("new");
    static ACTIVE = new UserState("active");
    static BLOCKED = new UserState("blocked");
    static BANNED = new UserState("banned");
    constructor(name) {
      this.name = name;
    }
}

class OrderStatus {
    static NEW = new OrderStatus("new");
    static HOLD = new OrderStatus("hold");
    static SHIPPED = new OrderStatus("shipped");
    static DELIVERED = new OrderStatus("delivered");
    static CLOSED = new OrderStatus("closed");

    constructor(name) {
      this.name = name;
    }
  }


  const main = () => {
    const user1 = new WebUser("user1", "123456", UserState.NEW);
    const user2 = new WebUser("user2", "123456", UserState.ACTIVE);

    const account1 = new Account("Kay", "BanKay", false, "05/01/2567", "");
    //console.log(user1.state);

    const pen = new Product(1, "pen", "vick");
    const pencil = new Product(2, "pencil", "Tin");
    const colors = new Product(3, "colors", "vick");
    const paper = new Product(4, "paper", "vick");
    const cardboard = new Product(5, "cardboard", "vick");

    // จำนวน Order
    const order1 = new Order("01", "05/01/2567", "Bankay", OrderStatus.CLOSED);

    const order2 = new Order("02", "05/01/2567", "Bankay", OrderStatus.CLOSED);

    const lineItem1 = new LineItem(10, 15);
    lineItem1.setproduct(pen);
    const lineItem2 = new LineItem(10, 15);
    lineItem2.setproduct(pencil);
    const lineItem3 = new LineItem(2, 1);
    lineItem3.setproduct(paper);

    order1.addLineItem(lineItem1);
    order1.addLineItem(lineItem2);
    order1.addLineItem(lineItem3);

    order2.addLineItem(lineItem2);
    order2.addLineItem(lineItem3);

    order1.setTotal();
    order2.setTotal();

    order1.setShippedDate("30/01/2567");
    order2.setShippedDate("30/01/2567");

    const payment1 = new Payment("p01", "22/01/2567", order1.total, "ส่งที่หอ");
    const payment2 = new Payment("p02", "22/01/2567", order2.total, "ส่งที่หอ");

    account1.addOrder(order1);
    account1.addOrder(order2);
    order1.setPayment(payment1);
    order2.setPayment(payment2);

    console.log("ชื่อ : " + account1.id);
    console.log("จำนวนคำสั่งซื้อ : " + account1.orders.length);
    // order1.printDetail();
    // order2.printDetail();
    account1.printOrderDetail();
    account1.ShoppingCart.printShoppingCart();

    console.log("--------------------");
  };
  main();











