/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React from 'react';
import SectionHeading from './section-heading';
import SubmitBtn from './submit-btn';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import toast from 'react-hot-toast';

export default function Contact() {
	const { ref } = useSectionInView('Contact');

	return (
		<motion.section
			id='contact'
			ref={ref}
			className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center '
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}>
			<SectionHeading>Contact me</SectionHeading>

			<p className='text-gray-800 -mt-7 dark:text-white'>
				Please contact me directly at{' '}
				<a className='underline' href='mailto:austinperezwebdev@gmail.com'>
					austinperezwebdev@gmail.com
				</a>{' '}
				or through this form
			</p>
			<form
				className='mt-10 flex flex-col'
				action={async (formData) => {
					const { data, error } = await sendEmail(formData);
					if (error) {
						toast.error(error);
						return;
					}
					toast.success('Message sent!');
				}}>
				<input
					className='h-14 rounded-lg borderBlack p-4'
					name='senderEmail'
					type='email'
					required
					maxLength={100}
					placeholder='Your Email'
				/>
				<textarea
					className='h-52 my-3 rounded-lg borderBlack p-4 text-gray-700'
					name='message'
					placeholder='Your Message'
					required
					maxLength={500}
				/>
				<SubmitBtn />
			</form>
		</motion.section>
	);
}
