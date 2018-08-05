import Vue from 'vue'
import Router from 'vue-router'
import AddEmployee from '@/components/AddEmployee'
import EditEmployee from '@/components/EditEmployee'
import Dashboard from '@/components/Dashboard'
import ViewEmployee from '@/components/ViewEmployee'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/add',
      name: 'add-employee',
      component: AddEmployee
    },
    {
      path: '/edit/:id',
      name: 'edit-employee',
      component: EditEmployee
    },
    {
      path: '/:id',
      name: 'view-employee',
      component: ViewEmployee
    }
  ]
})
