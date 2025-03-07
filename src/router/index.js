import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import HomeView from '@/views/HomeView.vue'
import About from '@/views/About.vue'
import Chatbot from '@/views/Chatbot.vue'
import ImageUploadAi from '@/views/ImageUploadAi.vue'
const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: HomeView },
      { path: '/bmi', component: () => import('@/views/Bmi.vue') },
      { path: '/about', component: About },
      { path: '/chat-with-ai',component: () => import('@/views/Chatbot.vue')  },
      { path: '/image-upload-ai',component: () => import('@/views/ImageUploadAi.vue')  },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
