<template>
    <div id="view">
        <ul class="collection with-header">
            <li class="collection-header"><h3>{{employee.name}}</h3></li>
            <li class="collection-item">Emplpoyee Id: <span class="secondary-content chip">{{employee.employee_id}} </span></li>
            <li class="collection-item">Department: <span class="secondary-content chip"> {{employee.dept}}</span></li>
            <li class="collection-item">Position: <span class="secondary-content chip">{{employee.position}}</span> </li>
        </ul>
        <router-link to="/" class="btn grey">back</router-link>
        <button @click="deleteEmployee" class="btn red">Delete</button>

        <div class="fixed-action-btn">
        <router-link :to="{ name: 'edit-employee', params: { id: employee.employee_id }}" class="btn-floating btn-large waves-effect yellow"> <i class="material-icons">edit</i></router-link>
        </div>
    </div>
</template>
<script>
import db from "../firebase/firebaseInit";

export default {
  name: "view-employee",
  data() {
    return {
      employee: {
        employee_id: null
      }
    };
  },
  created() {
    db
      .collection("employees")
      .where("employee_id", "==", this.$route.params.id)
      .get()
      .then(querySnapShot => {
        querySnapShot.forEach(doc => {
          this.employee = {
            id: doc.id,
            ...doc.data()
          };
        });
      });
  },
  methods: {
      deleteEmployee(){
              db
      .collection("employees")
      .where("employee_id", "==", this.$route.params.id)
      .get()
      .then(querySnapShot => {
        querySnapShot.forEach(doc => {
            doc.ref.delete()
            this.$router.push('/')
        });
      });
      }
  }
};
</script>

<style scoped>
</style>


