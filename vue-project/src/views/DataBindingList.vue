<template>
  <h3>List 랜더링</h3>
  <div v-if="productList.length == 0">
    <span>** No Data **</span>
  </div>
  <div v-else>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <!--반복문-->
        <!--v-bind:key -> 중복되지 않는 값을 바인딩, ex) 상품아이디, 배열의 인덱스값...-->
        <!--v-for="(product, i) in productlist -> (반복할대상, 인덱스값) in 배열-->
        <tr v-bind:key="i" v-for="(product, i) in productList">
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: [
        {
          product_name: "기계식키보드",
          price: 25000,
          category: "노트북/태블릿",
          delivery_price: 3000,
        },
        {
          product_name: "무선마우스",
          price: 15000,
          category: "노트북/태블릿",
          delivery_price: 3000,
        },
        {
          product_name: "태블릿거치대",
          price: 35000,
          category: "노트북/태블릿",
          delivery_price: 3000,
        },
      ],
    };
  }, // end of data();
  mounted() {
    this.productList = [];
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
