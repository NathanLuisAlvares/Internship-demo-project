<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Contact Link Menu
        </q-toolbar-title>
        <q-space/>
          <q-separator dark vertical />
          <q-btn
          stretch flat to="login">Login</q-btn>
          <q-separator dark vertical />
          <q-btn
            stretch flat @click="logout">Logout</q-btn>
          <q-separator dark vertical />

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Contact Me Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Github',
    caption: 'github.com/NathanLuisAlvares',
    icon: 'code',
    link: 'https://github.com/NathanLuisAlvares'
  },
  {
    title: 'Instagram',
    caption: '@nathalvofficial',
    icon: 'public',
    link: 'https://www.instagram.com/nathalvofficial/'
  },
  {
    title: 'LinkedIn',
    caption: 'www.linkedin.com/in/nathan-luis-alvares-1000061bb/',
    icon: 'public',
    link: 'https://www.linkedin.com/in/nathan-luis-alvares-1000061bb/'
  },
  {
    title: 'Twitter',
    caption: '@NathAlvOfficial',
    icon: 'public',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: 'Nathan Alvares',
    icon: 'public',
    link: 'https://www.facebook.com/nathan.alvares.77'
  }
]
export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      tab: ref(''),
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      logout(){
        console.log('logout')
      }
    }
  }
})
</script>
