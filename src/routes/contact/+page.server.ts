import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import type { Actions } from './$types';

// Initialize Resend with API key (with fallback for build time)
const resend = new Resend(process.env.RESEND_API_KEY || 'fake-key-for-build');

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const name = formData.get('name')?.toString();
		const email = formData.get('email')?.toString();
		const project = formData.get('project')?.toString();
		const message = formData.get('message')?.toString();

		// Basic validation
		if (!name || !email || !message) {
			return fail(400, {
				error: 'Please fill in all required fields.',
				name,
				email,
				project,
				message
			});
		}

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return fail(400, {
				error: 'Please enter a valid email address.',
				name,
				email,
				project,
				message
			});
		}

		try {
			// Check if Resend is properly configured
			if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'fake-key-for-build') {
				console.error('Resend API key not configured');
				return fail(500, {
					error: 'Email service is not configured. Please contact me directly at ryan@roga.dev.',
					name,
					email,
					project,
					message
				});
			}

			// Send notification email to you
			const { error: notificationError } = await resend.emails.send({
				from: 'Contact Form <onboarding@resend.dev>', // Using Resend's test domain for development
				to: ['ryan@roga.dev'], // your email
				subject: `New Contact Form Submission - ${project || 'General Inquiry'}`,
				html: `
					<h2>New Contact Form Submission</h2>
					<p><strong>Name:</strong> ${name}</p>
					<p><strong>Email:</strong> ${email}</p>
					<p><strong>Project Type:</strong> ${project || 'Not specified'}</p>
					<p><strong>Message:</strong></p>
					<p>${message.replace(/\n/g, '<br>')}</p>
					<hr>
					<p><small>Sent from roga.dev contact form</small></p>
				`,
				text: `
					New Contact Form Submission
					
					Name: ${name}
					Email: ${email}
					Project Type: ${project || 'Not specified'}
					Message: ${message}
					
					Sent from roga.dev contact form
				`
			});

			if (notificationError) {
				console.error('Notification email failed:', notificationError);
				throw new Error('Failed to send notification email');
			}

			// Send auto-reply to the sender
			const { error: autoReplyError } = await resend.emails.send({
				from: 'Ryan Roga <onboarding@resend.dev>', // Using Resend's test domain for development
				to: [email],
				subject: 'Thanks for reaching out! - Roga.dev',
				html: `
					<h2>Thanks for your message, ${name}!</h2>
					<p>I've received your inquiry about <strong>${project || 'your project'}</strong> and will get back to you within 24 hours.</p>
					<p>In the meantime, feel free to check out my recent work at <a href="https://roga.dev/projects">roga.dev/projects</a>.</p>
					<br>
					<p>Best regards,<br>Ryan Roga</p>
					<p><a href="https://roga.dev">roga.dev</a></p>
					<hr>
					<p><small>This is an automated response. I'll respond personally from my email address soon.</small></p>
				`,
				text: `
					Thanks for your message, ${name}!
					
					I've received your inquiry about ${project || 'your project'} and will get back to you within 24 hours.
					
					In the meantime, feel free to check out my recent work at https://roga.dev/projects.
					
					Best regards,
					Ryan Roga
					https://roga.dev
					
					This is an automated response. I'll respond personally from my email address soon.
				`
			});

			if (autoReplyError) {
				console.error('Auto-reply email failed:', autoReplyError);
				// Don't fail the whole request if auto-reply fails
			}

			return {
				success: true,
				message: "Thanks for your message! I'll get back to you soon."
			};
		} catch (error) {
			console.error('Email sending failed:', error);
			return fail(500, {
				error:
					'Sorry, there was an issue sending your message. Please try emailing me directly at ryan@roga.dev.',
				name,
				email,
				project,
				message
			});
		}
	}
};
