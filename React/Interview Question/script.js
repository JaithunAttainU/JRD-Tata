/**
 * Pizza
 *  Small - 10
 *  Medium - 15
 *  Larger - 20
 * 
 * Pasta - 20
 * salads - 15.5
 * 
 * 
 * i) Tip - Certain dollar or certain % of total before tax
 * ii) Tax - 10% on food before gratuity & delivery fee
 * ii) Delivery Fee
 *        Manhattan - 5
 *        Brooklyn & Bronx - 6
 *        Queens - 4
 *        Staten - 10
 * 
 * iii) Delivery Off
 *    Delivery fee on weekday - 2 off
 *    Thursday - 3 off
 *    Seniors > 65 yrs - 2 off
 *    Students with stu Id - 1 off
 *    Large Orders > 8 items - free
 *    Large Orders > 100 dollars - free
 * 
 * iv) Promo Codes
 *        30-OFF - 30% off the order total
 *        HALF-OFF-PIZZA - 50% off on all pizzas
 *        FREEDELIVERY - free delivery
 * 
 */

//Question Inputs
const orderInput1 = {
  items: [
    {
      name: "small pizza",
      quantity: 4
    }
  ],
  tip: "10%",
  place: "Brooklyn",
  age: 35,
  day: "Wednesday"
}

const orderInput2 = {
  items: [
    {
      name: "small pizza",
      quantity: 2
    },
    {
      name: "medium pizza",
      quantity: 2
    },
    {
      name: "large pizza",
      quantity: 1
    }
  ],
  tip: "10%",
  place: "Manhattan",
  age: 35,
  day: "Wednesday"
}

const orderInput3 = {
  items: [
    {
      name: "medium pizza",
      quantity: 4
    }
  ],
  tip: "15$",
  place: "Brooklyn",
  age: 35,
  day: "Wednesday"
}

//totalCost - 60 tip -15$ tax - 6 , delivery - 4

const orderInput4 = {
  items: [
    {
      name: "medium pizza",
      quantity: 2
    },
    {
      name: "large pizza",
      quantity: 2
    }
  ],
  place: "Brooklyn",
  age: 54,
  day: "Wednesday",
  promoCode: 'FREEDELIVERY'
}


const orderInput5 = {
  items: [
    {
      name: "medium pizza",
      quantity: 3
    },
    {
      name: "pasta",
      quantity: 1
    }
  ],
  tip: "20$",
  place: "Brooklyn",
  age: 35,
  day: "Wednesday",
  promoCode: 'HALF-OFF-PIZZA'
}

const orderInput6 = {
  items: [
    {
      name: "medium pizza",
      quantity: 3
    }
  ],
  tip: "20$",
  place: "Brooklyn",
  age: 75,
  studentId: "343452",
  day: "Thursday"
}

const orderInput7 = {
  items: [
    {
      name: "medium pizza",
      quantity: 3
    },
    {
      name: "pasta",
      quantity: 2
    }
  ],
  tip: "20%",
  place: "Staten",
  age: 80,
  day: "Thursday",
  promoCode: "30-OFF"
}

const orderInput8 = {
  items: [
    {
      name: "large pizza",
      quantity: 6
    }
  ],
  day: "Thursday",
  age: 75,
  place: "Brooklyn",
  tip: "15%"
}

function getDeliveryFee(place) {
  const feeDetails = {
    "Brooklyn": 6,
    "Manhattan": 5,
    "Bronx": 6,
    "Queens": 4,
    "Staten": 10
  }
  return feeDetails[place]
}

function getFoodCost(food) {
  const foodCost = {
    "small pizza": 10,
    "medium pizza": 15,
    "large pizza": 20,
    "pasta": 20,
    "salads": 15.5
  }
  return foodCost[food]
}

const orders = [
  orderInput1,
  orderInput2,
  orderInput3,
  orderInput4,
  orderInput5,
  orderInput6,
  orderInput7,
  orderInput8
]

for (let index = 0; index < orders.length; index++) {
  console.log(calculate(orders[index]))
}

function calculate(order) {

  const { items, tip, promoCode } = order

  //i) Calculate the total
  let totalCost = 0;
  let pizzaAmount = 0;
  for (let index = 0; index < items.length; index++) {
    const { name, quantity } = items[index]
    const foodCost = getFoodCost(name) * quantity
    totalCost += foodCost

    if (name.includes("pizza")) {
      pizzaAmount += foodCost / 2;
    }
  }

  //ii) Calculate the tax //tax = 20
  const tax = totalCost * (10 / 100)

  //iii) Tip 
  let tipValue = 0 //20$
  if (tip) {
    const symbol = tip.charAt(tip.length - 1)
    const value = Number(tip.slice(0, tip.length - 1))
    if (symbol === "$") {
      tipValue = value
    } else {
      tipValue = totalCost * (value / 100)
    }
  }


  //iv) DeliveryFee
  let deliveryFee = calculateDeliveryFee(order, totalCost)

  //v) PromoCode
  let promoOffer = 0;
  if (promoCode === "30-OFF") {
    promoOffer = totalCost * (30 / 100)
  } else if (promoOffer === "HALF-OFF-PIZZA") {
    promoOffer = pizzaAmount
  } else if (promoCode === "FREEDELIVERY") {
    deliveryFee = 0
  }

  console.log("🚀 ~ file: script.js ~ line 297 ~ calculate ~ totalCost", totalCost)
  console.log("🚀 ~ file: script.js ~ line 297 ~ calculate ~ tax", tax)
  console.log("🚀 ~ file: script.js ~ line 297 ~ calculate ~ tipValue", tipValue)
  console.log("🚀 ~ file: script.js ~ line 297 ~ calculate ~ deliveryFee", deliveryFee)
  console.log("🚀 ~ file: script.js ~ line 297 ~ calculate ~ promoOffer", promoOffer)

  return (totalCost + tax + tipValue + deliveryFee) - promoOffer
}


function calculateDeliveryFee(order, totalCost) {

  const { place, studentId, day, items, age } = order
  let deliveryFee = getDeliveryFee(place)
  if (!(day === "Sunday" || day === "Saturday")) {
    deliveryFee -= 2
  }

  if (day === "Thursday") {
    deliveryFee -= 1
  }

  if (age > 65) {
    deliveryFee -= 2
  }

  if (studentId && studentId.length == 6) {
    deliveryFee -= 1
  }

  if (items.length > 8 || totalCost > 100) {
    deliveryFee = 0
  }
  return deliveryFee
}

console.log(calculate(orderInput3))
