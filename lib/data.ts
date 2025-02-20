import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '../public/images/corpcomment.png';
import NoteSurfImg from '../public/images/NoteSurf.png';
import remindersappImg from '../public/images/reminders-app.png';

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const;

export const experiencesData = [
	{
		title: 'Full-Stack Engineer',
		location: 'Juno Beach, FL',
		description:
			'I worked as a full-stack engineer for the pricing and estimations division of NextEra Energy. A fortune 100 sustainable energy company. ',
		icon: React.createElement(CgWorkAlt),
		date: '2024-2025',
	},
	{
		title: 'Full-Stack Web Developer',
		location: 'Remote',
		description:
			'I am currently a full-stack web developer who works on a variety of projects. I have relevent experience in both front-end and back-end development.',
		icon: React.createElement(CgWorkAlt),
		date: '2019 - Present',
	},
	{
		title: 'Software Consultant',
		location: 'San Diego CA',
		description:
			'I held the role of Software Consultant for Global Flow Cycling during the companies early planning and development stages.',
		icon: React.createElement(CgWorkAlt),
		date: '2024 - 2025',
	},
	{
		title: 'Software Tester II',
		location: 'Remote, TX',
		description:
			'I worked as a systems software tester for the Tandem Source web applications launched in both the U.S and Canada. Focusing on both R&D, automation, and production software.',
		icon: React.createElement(CgWorkAlt),
		date: '2022 - 2024',
	},
	{
		title: 'Software Tester I',
		location: 'San Diego, CA',
		description:
			'I worked as a systems software tester preforming and writing manual code tests for digital health systems software in accordance with company software development lifecycles and FDA guidelines.',
		icon: React.createElement(CgWorkAlt),
		date: '2021 - 2022',
	},
	{
		title: 'University of California San Diego',
		location: 'San Diego, CA',
		description:
			'I completed a 6 month project focused bootcamp where I focused on full-srtack engineering and web development.',
		icon: React.createElement(LuGraduationCap),
		date: '2021 - 2022',
	},
] as const;

export const projectsData = [
	{
		title: 'Project Newt',
		description:
			'I worked as a full-stack engineer on a robust project for NextEra Energy. Creating a complex Excel like web application. capable of handling large data sets and complex calculations.',
		tags: ['Vite', 'Vitest', 'DynamoDB', 'MDUI', 'TypeScript'],
		imageUrl: corpcommentImg,
		link: 'https://www.nexteraenergy.com/',
	},
	{
		title: 'NoteSurf',
		description:
			'Pin a thought, idea, question, or task to your personal board. A MERN stack web application with full user authentication and CRUD functionality. ',
		tags: [
			'React',
			'JavaScript',
			'MongoDB',
			'Tailwind',
			'Express',
			'Node.js',
			'Vite',
		],

		imageUrl: NoteSurfImg,
		link: 'https://github.com/AustinPerez760/NoteSurf-app',
	},
	{
		title: 'Reminders',
		description:
			'A public web app for logging and tracking user input in the form of a personal reminder. Utilizes React Context API, React Hooks, and user authentication with Kinde.',
		tags: ['React', 'TypeScript', 'Kinde', 'Tailwind', 'Vite'],
		imageUrl: remindersappImg,
		link: 'https://reminder-app-six-mauve.vercel.app/',
	},
] as const;

export const skillsData = [
	'HTML5',
	'CSS3',
	'JavaScript ES6+',
	'TypeScript',
	'React',
	'React Native',
	'Next.js',
	'Vue.js',
	'JQuery',
	'Node.js',
	'Tailwind',
	'Vite',
	'Vitest',
	'Git',
	'GitHub',
	'DynamoDB',
	'MongoDB',
	'GraphQL',
	'Apollo',
	'Express',
	'PostgreSQL',
	'Framer Motion',
	'StoryBook',
	'WordPress',
] as const;
