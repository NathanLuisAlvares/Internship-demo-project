const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children:
    [
      {
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: 'login',
        component: () => import('pages/LoginPage.vue')
      },
      {
        path: 'parent-component',
        component: () => import('pages/ParentComponent.vue')
      },
      {
        path: 'signup',
        component: () => import('pages/SignupPage.vue')
      },
      {
        path: '/UserDashboard/:usern',
        name: 'UserDashboard',
        component: () => import('pages/UserDashboard.vue')
      },
      {
        path: '/AdminDashboard/:usern',
        name: 'AdminDashboard',
        component: () => import('pages/AdminDashboard.vue'),
      },
      {
        path: 'display-people',
        component: () => import('pages/DisplayPeople.vue')
      },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]
//})

export default routes
