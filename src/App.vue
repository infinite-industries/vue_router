<template>
  <div id="app">

    <!--  Go to Page directly -->
    <button @click.stop="directRoute()">Go to Contacts Page Directly</button>

    <!--  User router-link directive -->
      <router-link to="/contacts">Go to Contacts</router-link>

    <!--  Slightly more complex example.
          Stole the general idea from Vuetify. Really like being able to switch
          between links within the router and outside of its scope
          - see last external link to google -->

    <ul class="nav">
      <template v-for="nav_item in nav_items">
        <li>
          <a :href="createLink(nav_item.href,nav_item.router)">
            {{ nav_item.title }}
          </a>
        </li>
      </template>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
  return {
    nav_items: [
        { title: 'Home',
          href: '/',
          router: true
        },
        { title: 'About',
          href: '/about',
          router:true
        },
        { title: 'Contacts',
          href: '/contacts',
          router:true
        },
        { title: 'External Link',
          href: 'http://www.google.com',
          router: false
        }
      ]
    }
  },
  methods: {
    directRoute: function(){
      this.$router.push({ path: '/contacts' })
    },
    createLink: function(link, belongs_to_router){
      if(belongs_to_router){
        link='#'+link;
      }
      return link;
    }
  }
}
</script>
