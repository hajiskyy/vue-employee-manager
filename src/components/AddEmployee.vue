<template>
    <div id="add">
        <h4>New Employee</h4>
        <form @submit.prevent="onSubmit">
            <div class="input-field">
                <input type="text" v-model="employee.employee_id" name="id" id="id">
                <label for="id">Employee Id</label>
            </div>
            <div class="input-field">
                <input type="text" v-model="employee.name"  name="name" id="name">
                <label for="name">Full Name</label>
            </div>
            <div class="input-field">
                <input type="text" v-model="employee.dept" name="dept" id="dept">
                <label for="id"> Department</label>
            </div>
            <div class="input-field">
                <input type="text" v-model="employee.position" name="position" id="position">
                <label for="position">Position</label>
            </div>
            <div class="input-field">
                <input type="submit" value="submit" class="btn">
            </div>
        </form>
    </div>
</template>

<script>
import db from '../firebase/firebaseInit'
export default {
  name: "add-employee",
  data() {
    return {
        employee: {
            employee_id: '',
            name: '',
            dept: '',
            position: ''
        }
    };
  },
  methods: {
      onSubmit(){
          db.collection('employees').add(this.employee)
          .then(doc => this.$router.push('/'))
          .catch(err => console.log(err));
      }
  }
};
</script>
<style scoped>
</style>


