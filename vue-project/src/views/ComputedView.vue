<template>
  <h3>Computed</h3>
  <h3>FirstName: {{ firstName }}</h3>
  <h3>LastName: {{ lastName }}</h3>
  <h3>fullName: {{ fullName }}</h3>

  <h3>장바구니</h3>
  <div :key="product.id" v-for="product in cart">
    <strong>{{ product.name }}</strong> - 가격: {{ product.price }}원 - 수량:
    <input type="number" v-model.number="product.quantity" />
  </div>
  <p><strong>총수량: </strong> {{ totalQuantity }}개</p>
  <p><strong>총금액: </strong> {{ totalPrice }}원</p>
</template>

<script>
export default {
  data() {
    return {
      firstName: "길동",
      lastName: "홍",
      cart: [
        { id: 1, name: "사과", price: 2000, quantity: 2 },
        { id: 2, name: "바나나", price: 1000, quantity: 3 },
        { id: 3, name: "딸기", price: 3000, quantity: 1 },
      ],
    };
  },
  // computed: 계산된 속성(computed property) 을 정의할 때 사용하는 속성
  // methods와는 달리 값을 저장해두고 재사용
  // computed의 속성: 함수().
  computed: {
    fullName() {
      return this.firstName + ", " + this.lastName;
    },
    totalQuantity() {
      // reduce: 기존 값에 새로운 값을 더해줌.
      // acc: 누적값, 이전 순번까지의 값
      // item: 이번 순번의 값, cart[0], cart[1], cart[2]를 의미
      // 0: reduce()의 초기값.
      return this.cart.reduce((acc, item) => acc + item.quantity, 0);
    },
    totalPrice() {
      return this.cart.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
    },
    // 화살표 함수가 아닌 일반 함수선언방식 사용.
    // totalPrice() {
    //   return this.cart.reduce(function (acc, item) {
    //     return acc + item.quantity * item.price;
    //   }, 0);
    // },
  },
  mounted() {
    console.log(this);
    this.firstName = "kildong";
  },
};
</script>
