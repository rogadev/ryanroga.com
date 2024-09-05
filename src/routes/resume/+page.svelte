<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<svelte:head>
	<title>Resume | Roga.dev</title>
	<meta name="description" content="Resume | Ryan Roga" />
</svelte:head>

<section class="mx-auto max-w-5xl p-6 sticky top-0 border-b border-slate-800 pb-3 mb-3 bg-white">
	<div class="flex flex-row justify-between items-start">
		<div>
			<h1 class="text-5xl font-bold text-slate-800">Ryan Roga</h1>
			<h2 class="text-3xl mb-2">Full-Stack Web Developer</h2>
		</div>
		<div class="flex flex-col sm:flex-row justify-end items-end">
			<a href="https://github.com/rogadev" target="_blank">
				<Icon class="h-10 w-10 hover:text-black transition-colors" icon="mdi:github-box" />
			</a>
			<a href="https://www.linkedin.com/in/ryanroga/" target="_blank">
				<Icon class="h-10 w-10 hover:text-black transition-colors" icon="mdi:linkedin" />
			</a>
		</div>
	</div>
	<div class="flex flex-row justify-between items-center">
		<p>Dartmouth, Nova Scotia<span class="hidden sm:inline">, Canada</span></p>
		<a class="hover:text-blue-700" href="tel:+1-902-830-8881">(902) 830-8881</a>
		<a class="hover:text-blue-700" href="mailto:ryan@roga.dev" target="_blank">ryan@roga.dev</a>
	</div>
</section>

<div class="flex justify-center items-center gap-x-4 mt-6">
	<Icon icon="mdi:printer" class="h-8 w-8" />
	<span>
		<a href="/resume/plain" target="_blank" class="underline text-blue-700 hover:text-blue-400"
			>Click Here</a
		> for a print-friendly version.
	</span>
</div>

<main class="mx-auto max-w-5xl p-6 prose">
	<p>
		Highly proficient web developer with full-stack web development experience, specializing in
		creating dynamic web applications using SvelteKit, Nuxt 3, and Astro. Demonstrated expertise in
		full-stack development, e-commerce, and building business-focused web applications along with a
		proven ability to lead projects from inception to completion. A committed self-starter with
		excellent problem-solving skills, seeking to leverage expertise in a collaborative front-end,
		back-end, or full-stack developer role.
	</p>
	<p>
		Personally incorporated and available for contract work. Also available for regular full-time
		temporary, or full-time permanent positions. Remote work experienced with excellent
		recommendations of work ethic and quality while working remotely. Interested in creating
		long-term value in a high-performance team environment, with a focus on quality and efficiency.
		Strong supporter of diversity and inclusion. Great communication skills, values collaboration,
		and is a strong team player.
	</p>
	<h3 class="text-center bg-emerald-300">Technical Competencies</h3>
	<p class="text-center pt-6 px-2">
		JavaScript &ThinSpace; TypeScript &ThinSpace; HTML &ThinSpace; CSS &ThinSpace; SvelteKit
		&ThinSpace; Nuxt &ThinSpace; Astro &ThinSpace; Vue &ThinSpace; React &ThinSpace; Svelte
		&ThinSpace; Node.js &ThinSpace; TS Node &ThinSpace; Express &ThinSpace; Git &ThinSpace; GitHub
		&ThinSpace; Vercel &ThinSpace; Vercel AI &ThinSpace; Vercel KV &ThinSpace; TailwindCSS
		&ThinSpace; Tailwind UI &ThinSpace; Vitest &ThinSpace; Jest &ThinSpace; Mocha &ThinSpace; CI/CD
		&ThinSpace; Zod &ThinSpace; Puppeteer &ThinSpace; Google Maps API &ThinSpace; OpenAI API
	</p>
	<h3 class="text-center bg-emerald-300">Academic Accomplishments</h3>
	<div class="flex flex-wrap gap-2 justify-evenly mt-4">
		<p class="font-bold my-0">Diploma, Web &amp; Mobile Application Development</p>
		<p class="my-0">
			<strong>Vancouver Island University</strong> - <em>Nanaimo, BC</em> - <em>2023</em>
		</p>
	</div>
	<ul class="mx-6">
		<li>
			<strong>Web Frameworks:</strong> Mastered a variety of web frameworks including Svelte, SvelteKit,
			Vue, and more.
		</li>
		<li>
			<strong>Full-Stack Development:</strong> Developed robust full-stack web applications catering
			to specific client needs.
		</li>
		<li>
			<strong>Agile Development Methodology:</strong> Adopted agile principles for rapid feature deployment
			and effective project management.
		</li>
	</ul>
	<h5 class="text-xl text-center font-semibold mb-3">Projects</h5>

	<h6 class="text-lg text-center">
		Co-op Project -
		<a class=" hover:text-blue-700" href="https://career-outlooks.viu.ca" target="_blank">
			VIU Career Outlooks
		</a>
	</h6>

	<div class="flex justify-center">
		<a
			class=" hover:text-blue-700"
			href="https://github.com/rogadev/viu-career-outlooks"
			target="_blank"
		>
			Project Repo
		</a>
	</div>

	<p class="px-4 mb-0 text-justify">
		The VIU Career Outlooks web app is a project that I designed and developed during my co-op. The
		application is a web app that allows prospective students to see the career outlooks for
		different programs on offer at VIU. The application is built using SvelteKit and is hosted on
		Vercel. The tech stack for this project, including proof of concept and web scraping
		technologies, is as follows:
	</p>

	<div class="flex flex-wrap gap-3 justify-between mt-2 mb-4 mx-4 italic">
		<span>Node/Express</span>
		<span>Puppeteer</span>
		<span>Nuxt 3</span>
		<span>Tailwind CSS</span>
		<span>Fuse.js</span>
		<span>SvelteKit 1 (RC)</span>
		<span>GC LMI-EO API (Deprecated)</span>
		<span>Vercel KV</span>
	</div>

	<h6 class="text-lg text-center mt-5">
		Capstone Project -
		<a
			class="hover:text-blue-700"
			href="https://www.canva.com/design/DAFfid4eMDA/XdWkNkor_7pZTy1r3YTySw/edit?utm_content=DAFfid4eMDA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
			target="_blank"
		>
			EzTripr
		</a>
	</h6>

	<div class="flex justify-center">
		<a class=" hover:text-blue-700" href="https://github.com/rogadev/capstone" target="_blank">
			Project Repo
		</a>
	</div>

	<p class="px-4 mb-0 text-justify">
		Developed an intuitive application for a company transporting elderly users to medical
		appointments, facilitating efficient road map plotting and simultaneous pickups for multiple
		users. The user-friendly interface provided drivers with critical trip details including arrival
		times, estimated time of arrival, location specifics, and passenger information.
	</p>

	<div class="flex flex-wrap gap-3 justify-between mt-2 mb-4 mx-4 italic">
		<span> TypeScript </span>
		<span> Vue </span>
		<span> Nuxt 3 </span>
		<span> Tailwind CSS </span>
		<span> Vercel </span>
		<span> Supabase </span>
		<span> Prisma </span>
		<span> Zod </span>
		<span> Nuxt Icon </span>
		<span> Google Maps Distance Matrix API </span>
		<span> DaisyUI </span>
		<span> Vitest </span>
		<span> Pinia </span>
		<span> Mapbox GL </span>
		<span> OpenAI API </span>
		<span> Superjson </span>
	</div>

	<h3 class="text-center bg-emerald-300">Professional Experience</h3>

	<div class="flex flex-wrap gap-2 justify-between items-center my-5">
		<p class="font-bold my-0">Web Developer</p>
		<p class="my-0">
			<strong>Vancouver Island University</strong> - <em>Nanaimo, BC</em>
		</p>
		<p class="m-0 p-0">
			<em>April 2022</em> -
			<em>September 2022</em>
		</p>
	</div>
	<p class="text-justify">
		Undertook the design and development of the VIU Career Outlook web tool, a dynamic full-stack
		application created to empower prospective students with valuable insights into their future
		education and career outcomes. Leveraging a blend of innovative web frameworks and real-time
		data integration, I designed and built this web application to help facilitate future students
		make better, more well-informed decisions about their education. This hybrid position was mostly
		remote work.
	</p>

	<ul>
		<li>
			Led the development of the VIU Career Outlook web tool, utilizing SvelteKit for a dynamic and
			intuitive user interface, integrated with real-time data from the Government of Canada's
			Labour Market Information API to offer users a three-year outlook on potential career paths.
		</li>
		<li>
			Demonstrated adaptability by creating a proof of concept with Nuxt.js and designing a
			dedicated backend using Node.js/Express for efficient web scraping of Stats Canada NOC data,
			highlighting proficiency in both frontend and backend technologies.
		</li>
		<li>
			Contributed significantly to the education sector by enabling prospective students to make
			informed decisions about their academic choices and future careers, showcasing a commitment to
			leveraging technology for positive educational outcomes.
		</li>
	</ul>

	<div class="flex flex-wrap gap-2 justify-between items-center my-5">
		<p class="font-bold my-0">Founder/CEO</p>
		<p class="my-0">
			<strong>MossAway Services Inc.</strong> - <em>Victoria, BC</em>
		</p>
		<p class="m-0 p-0">
			<em>December 2017</em> -
			<em>May 2023</em>
		</p>
	</div>
	<p class="text-justify">
		Founded and grew the business from the ground up. Emphasized continuous optimization from day
		one, focusing on crafting a frictionless customer journey that became a hallmark of the company.
		Implemented extensive automation into the workflow, allowing for high-level communication with
		customers while freeing up time to concentrate on daily tasks, directly translating to 5-star
		testimonials, repeat business, and referrals.
	</p>

	<ul>
		<li>
			Awarded the Torch Award for Trust & Integrity in 2019, a testimony to the unwavering
			commitment and customer recognition, presented by the Better Business Bureau.
		</li>
		<li>
			Mastered web development independently, prior to formal education, leading to the creation of
			a website that delivered entirely organic leads and optimized end-to-end client experiences.
		</li>
		<li>
			Devised an innovative mobile app quoting tool for partner companies, enhancing accuracy and
			efficiency, which significantly boosted the closing rate by an impressive 30%.
		</li>
	</ul>

	<h3 class="text-center bg-emerald-300">References</h3>
	<p class="italic">Contact information available at request</p>
	<p class="m-0 p-0">
		<strong>David Croft, M.Eng., P.Eng.</strong>
		<span class="italic">Instructor, Department Chair</span>
	</p>
	<p class="m-0 p-0 mb-5">Information Technology & Applied Systems, Vancouver Island University</p>

	<p class="m-0 p-0">
		<strong>Michael Carpenter</strong>
		<span class="italic">Web Manager</span>
	</p>
	<p class="m-0 p-0 mb-5">Information Technology, Vancouver Island University</p>

	<p class="m-0 p-0">
		<strong>Lené (Nile) Olenick</strong>
		<span class="italic">Student,Tutoring Mentee</span>
	</p>
	<p class="m-0 p-0">Vancouver Island University</p>
	<p class="m-0 p-0 font-semibold italic mb-5">See reference letter below</p>

	<h3 class="text-center bg-emerald-300">Letter of Reference</h3>
	<div>
		<p>
			Lené Olenick<br />March 25, 2022
		</p>
		<p>To whom this may concern.</p>
		<p>
			I am writing with enthusiasm to recommend Ryan Roga for a position in your establishment. As a
			classmate of Ryan's, I had the pleasure and opportunity to work alongside him in the web and
			mobile development program at the Vancouver Island University.
		</p>
		<p>
			Ryan is a motivated and fiery individual who cares deeply about his work and education.
			Throughout the classes I participated in with Ryan, he has demonstrated his passion,
			curiosity, intelligence, zealousness, approachability, and kindliness time and time again.
		</p>
		<p>
			During the program, Ryan recognized a need in the other students. He happily stepped into a
			role that should have been filled by the teacher and offered both group, and one-on-one
			tutoring sessions.
		</p>
		<p>
			As someone who took on the offer for his one-on-one tutoring sessions, I can easily say it was
			the best decision I have made during the duration of the program. Ryan took on my concerns and
			adapted his teaching technique to help me in a way where I could easily digest the mass amount
			of information that is JavaScript. Never did he make me feel like I was a burden for needing
			help or asking questions. He was patient and enthusiastic about the topic, and because of
			this, my dead enthusiasm was brought back, and I now feel more confident in my abilities to
			take on the upcoming challenges.
		</p>
		<p>
			Ryan is a strong “hands and head-on” individual whom I think would be an incredible addition
			to any company he becomes a part of; as he can offer the rare independent and entrepreneurial
			mindset that is not often paired with interpersonal-consideration.
		</p>
		<p>
			If you would like to speak further on Ryan's character or have further questions, please feel
			free to contact me by phone or email.
		</p>
		<p>
			All the best,<br />Lené Olenick
		</p>
	</div>
</main>
