<template>
    <div id="edit">
        <h4>Edit Employee</h4>
        <form @submit.prevent="onSubmit">
            <div class="input-field">
                <input type="text" v-model="employee.employee_id" name="id" id="id" placeholder="Employee Id">
            </div>
            <div class="input-field">
                <input type="text" v-model="employee.name"  name="name" id="name" placeholder="Full Name">
            </div>
            <div class="input-field">
                <input type="text" v-model="employee.dept" name="dept" id="dept" placeholder="Department">
            </div>
            <div class="input-field">
                <input type="text" v-model="employee.position" name="position" id="position" placeholder="Position">
            </div>
            <div class="input-field">
                <input type="submit" value="submit" class="btn">
                <router-link :to="{ name: 'view-employee', params: { id: employee.employee_id }}" class="btn grey"> back </router-link>
            </div>
        </form>
    </div>
</template>
<script>
import db from '../firebase/firebaseInit';
export default {
  name: "edit-employee",
  data() {
    return {
            employee: {
            employee_id: '',
            name: '',
            dept: '',
            position: ''
        },
        id: ''
    };
  },
  created(){
      db.collection('employees').where("employee_id", "==", this.$route.params.id)
      .get()
      .then(querySnapShot => {
          querySnapShot.forEach(doc => {
              this.id = doc.id,
              this.employee = {
                  ...doc.data()
              }
          });
      })
  },
  methods: {
      onSubmit(){
          db.doc(`employees/${this.id}`).update(this.employee)
          .then(doc => this.$router.push({ name: 'view-employee', params: { id: this.employee.employee_id }}))
          .catch(err => console.log(err))
      }
  }
};
</script>

<style scoped>
</style>

