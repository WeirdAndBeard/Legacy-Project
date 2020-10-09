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
  {
    path: "/companies/add",
    name: "AddCompany",
    component: AddCompany,
  },
  {
    path: "/tasksboard",
    name: "Tasksboard",
    component: Tasksboard,
  },

  {
    path: "/chat",
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
