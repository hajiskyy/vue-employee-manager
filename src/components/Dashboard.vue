<template>
    <div id="dashboard">
        <h3>Employees</h3>
            <ul class="collection">
                <li class="collection-item" v-for="emp in employees" v-bind:key ="emp.id">
                    <span class="chip">{{emp.dept}}</span>
                    {{emp.employee_id}}: 
                    {{emp.name}}
                    <router-link v-bind:to="emp.employee_id" class="secondary-content"><i class="material-icons">exit_to_app</i> </router-link>
                </li>
            </ul>
    
        <div class="fixed-action-btn">
        <router-link to="/add" class="btn-floating btn-large waves-effect green"> <i class="material-icons">add</i></router-link>
        </div>
    </div>
</template>

<script>
import db from '../firebase/firebaseInit'

export default {
    name: 'dashboard',
    data () {
        return {
            employees: []
        }
    },
    created() {
        db.collection('employees').orderBy("employee_id", "asc").get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    ...doc.data()
                }
                this.employees.push(data);
            })
        })
    }
}
</script>

<style scoped>

</style>


