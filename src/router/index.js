import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/components/Dashboard.vue";
import CompaniesList from "@/components/companies/CompaniesList.vue";
import Tasksboard from "@/components/Tasksboard.vue";
import EmployeesList from "@/components/employees/EmployeesList.vue";
import AddEmployee from "@/components/employees/AddEmployee.vue";
import AddCompany from "@/components/companies/AddCompany.vue";
import Message from "@/components/companies/Message.vue";
import Chat from "@/components/employees/Chat.vue";
import Rooms from "@/components/employees/Rooms.vue";




Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/messages",
    name: "Message",
    component: Message,
  },
  {
    path: "/companies",
    name: "CompaniesList",
    component: CompaniesList,
  },
  {
    path: "/employees",
    name: "EmployeesList",
    component: EmployeesList,
  },
  {
    path: "/employees/add",
    name: "AddEmployee",
    component: AddEmployee,
  },
<<<<<<< HEAD
=======

>>>>>>> 096bf3a0c89648e9135a59c048ad43af7c4eaa9e
  {
    path: "/companies/add",
    name: "AddCompany",
    component: AddCompany,
  },
<<<<<<< HEAD
=======
    
>>>>>>> 096bf3a0c89648e9135a59c048ad43af7c4eaa9e
  {
    path: "/tasksboard",
    name: "Tasksboard",
    component: Tasksboard,
  },

  {
    path: "/chat",
    name: "Rooms",
    component: Rooms,
  },

  {
    path: "/rooms/chat",
    name: "Chat",
    component: Chat,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
