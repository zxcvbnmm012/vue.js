<template>
  <div id="myDIV" class="header">
    <h2 style="margin: 5px">My To Do List</h2>
    <input v-model="newTodo.todo" type="text" placeholder="Title..." />
    <span @click="newElement" class="addBtn">Add</span>
  </div>

  <ul id="myUL">
    <li
      :key="i"
      v-for="(item, i) in todoList"
      @click="clicked(i)"
      :class="{ checked: item.chk }"
    >
      {{ item.name }}
      <span class="close" @click.stop="deleteli(i)">&times;</span>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      todoList: [],
      newTodo: { name: "", chk: false },
    };
  },
  mounted() {
    console.log("컴포넌트 mounted 됨!"); // 이거부터 찍히는지 확인
    axios({
      method: "get",
      url: "http://localhost:3000/todoList",
    })
      .then((result) => {
        console.log("응답 데이터:", result.data);
        this.todoList = result.data;
        console.log(this.todoList);
      })
      .catch((error) => {
        console.error("데이터 요청 실패:", error);
      });
  },

  methods: {
    clicked(i) {
      this.todoList[i].checked = !this.todoList[i].checked;
    },
    // vue.js에서 배열의 요소 삭제하기.
    deleteli(no) {
      axios({
        method: "delete",
        url: "http://localhost:3000/todo/" + no,
      }).then((result) => {
        console.log(result);
        if (result.data.errno) {
          alert("처리실패");
          return;
        }
      });
      // this.todoList.splice(i, 1);
      this.todoList = this.todoList.filter((item, index) => index !== no);
      // todoList의 요소를 하나씩 검사해서 현재요소(item)의 index가 i가 아니면 true, i라면 false로 배열에 포함시키지 않음.
    },
    // 새로운 객체를 배열에 넣기
    newElement() {
      if (!this.newTodo.name.trim()) return;
      this.todoList.push({
        name: this.newTodo.name,
        chk: false,
      });
    },
  },
};
</script>

<style scoped>
template {
  margin: 0;
  min-width: 250px;
}

/* Include the padding and border in an element's total width and height */
* {
  box-sizing: border-box;
}

/* Remove margins and padding from the list */
ul {
  margin: 0;
  padding: 0;
}

/* Style the list items */
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  list-style-type: none;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;

  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Set all odd list items to a different color (zebra-stripes) */
ul li:nth-child(odd) {
  background: #f9f9f9;
}

/* Darker background-color on hover */
ul li:hover {
  background: #ddd;
}

/* When clicked on, add a background color and strike out text */
ul li.checked {
  background: #8a8484;
  color: #fff;
  text-decoration: line-through;
}

/* Add a "checked" mark when clicked on */
ul li.checked::before {
  content: "";
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}

/* Style the close button */
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}

/* Style the header */
.header {
  background-color: #f44336;
  padding: 30px 40px;
  color: white;
  text-align: center;
}

/* Clear floats after the header */
.header:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the input */
input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 75%;
  padding: 10px;
  float: left;
  font-size: 16px;
}

/* Style the "Add" button */
.addBtn {
  padding: 10px;
  width: 25%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

.addBtn:hover {
  background-color: #bbb;
}
</style>
