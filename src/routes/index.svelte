<script>
  import JsonBox from '$lib/components/JsonBox.svelte';

  const data = {
    name: 'Kazeheki',
    job_title: 'Software&nbsp;Developer',
    main_skills: ['JavaScript', 'Angular', 'Java (EE)', 'Kubernetes'],
    main_interests: ['Frontend Development', 'UX', 'Game Development']
  };
</script>

<svelte:head>
  <title>Kazeheki</title>
</svelte:head>

<JsonBox {data} />

<p class="max-w-prose px-5 md:px-0">
  Hi! I'm <em>Kazeheki</em>. A Software Developer based in Bavaria, Germany. I'm interested in
  webpages since I was a teenager when I found a HTML course on
  <abbr title="www.neopets.com was/is a page where you can care for virtual pets.">Neopets</abbr>.
  Since then I've learned much more: Java, Angular, Kubernetes, Python and some more. For details
  check out my <a href="/skills">skills</a> page.
</p>

<p class="max-w-prose px-5 md:px-0">
  I'm interested in frontend development but I'm not scared to dive into backend as well. Game
  development is also very interesting to me, but that is currently a hobby.
</p>

<p class="max-w-prose px-5 md:px-0">
  Since 2017 I'm employed as full-stack developer. But I've worked on projects in university some
  years before already.
</p>
