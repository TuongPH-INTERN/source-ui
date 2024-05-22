<template>
  <div class="wrapper min-h-screen">
    <div class="container text-left mx-auto max-w-1228 px-2 sm:px-7">
      <Header @toggleLogin="toggleLogin" @toggleSignUp="toggleSignUp" />
      <router-view />
    </div>
  </div>
  <Footer />
  <Login
    :status="statusLogin"
    @closeModal="closeModal"
    @toggleSignUp="toggleSignUp"
  />
  <SignUp
    :status="statusSignUp"
    @closeModal="closeModal"
    @toggleLogin="toggleLogin"
  />
</template>

<script>
import Header from "@/components/HeaderComponent.vue";
import Footer from "@/components/FooterComponent.vue";
import Login from "@/components/LoginComponent.vue";
import SignUp from "@/components/SignUpComponent.vue";
import { ref } from "vue";

export default {
  components: { Header, Footer, Login, SignUp },
  setup() {
    const statusLogin = ref(false);
    const statusSignUp = ref(false);

    const toggleLogin = () => {
      closeModal();
      statusLogin.value = !statusLogin.value.show;
    };
    const toggleSignUp = () => {
      closeModal();
      statusSignUp.value = !statusSignUp.value.show;
    };
    const closeModal = () => {
      statusLogin.value = false;
      statusSignUp.value = false;
    };
    return {
      statusLogin,
      statusSignUp,
      toggleLogin,
      toggleSignUp,
      closeModal,
    };
  },
};
</script>
