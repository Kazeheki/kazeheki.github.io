<svelte:head>
	<title>Kazeheki</title>
</svelte:head>

<script>
	const data = {
		name: 'Kazeheki',
		job_title: 'Software Developer',
		main_skills: [
			'JavaScript',
			'Angular',
			'Java (EE)',
			'Kubernetes'
		],
		main_interests: [
			'Frontend Development',
			'UX',
			'Game Development'
		]
	};

	const color = {
		braces: 'text-amber-300',
		curlies: 'text-green-300',
		strings: 'text-red-300',
		attributes: 'text-blue-300'
	};

	const markAttribute = (text) => text.replace(/(^\s*)("[\w_]+")(:)/gm, `$1<span class='${color.attributes}'>$2</span>$3`);
	const markBrackets = (text) => text.replace(/([\[\]])/g, `<span class='${color.braces}'>$1</span>`);
	const markCurlies = (text) => text.replace(/([{}])/g, `<span class='${color.curlies}'>$1</span>`);
	const markStrings = (text) => {
		let result = text.replace(/(^\s*)("[\w\d -_()]+")([^:])/gm, `$1<span class='${color.strings}'>$2</span>$3`);
		result = result.replace(/(: )("[\w\d -_()]+")/gm, `$1<span class='${color.strings}'>$2</span>`);
		return result;
	};

	let text = JSON.stringify(data, null, 2);
	text = markAttribute(text);
	text = markBrackets(text);
	text = markCurlies(text);
	text = markStrings(text);

	const code = text;
</script>

<div class='bg-primary-900 text-beryl_green font-mono px-7 md:px-16 py-5 rounded-2xl shadow-primary-900 shadow-md'>
		<pre>
			{@html code}
		</pre>
</div>

<p class='max-w-prose px-5 md:px-0'>
	Hi! I'm <em>Kazeheki</em>.
	A Software Developer based in Bavaria, Germany.
	I'm interested in webpages since I was a teenager when I found a HTML course on
	<abbr title='www.neopets.com was/is a page where you can care for virtual pets.'>Neopets</abbr>.
	Since then I've learned much more: Java, Angular, Kubernetes, Python and some more.
	For details check out my <a href='/skills'>skills</a> page.
</p>

<p class='max-w-prose px-5 md:px-0'>
	I'm interested in frontend development
	but I'm not scared to dive into backend as well.
	Game development is also very interesting to me, but that is currently a hobby.
</p>

<p class='max-w-prose px-5 md:px-0'>
	Since 2017 I'm employed as full-stack developer.
	But I've worked on projects in university some years before already.
</p>
