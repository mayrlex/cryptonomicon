import { MainPage } from '@/pages/main';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		name: 'main',
		path: '/',
		component: MainPage,
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
