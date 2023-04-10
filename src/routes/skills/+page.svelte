<script lang="ts">
  import { BehaviorSubject, map } from 'rxjs';
  import { flip } from 'svelte/animate';

  const frontend = [
    'JavaScript',
    'TypeScript',
    'Angular 2+',
    'Angular JS',
    'Svelte',
    'UI5',
    'HTML + CSS',
    'TailwindCSS',
    'RxJS'
  ];
  const backend = ['Java', 'NodeJS', 'Python', 'C#', 'C++'];
  const gameDevelopment = ['Unity', 'Godot'];
  const specials = ['open62541'];
  const cloud = ['Azure', 'AWS', 'OpenShift'];
  const cicd = ['Jenkins', 'Kubernetes', 'Helm', 'Git', 'ArgoCD', 'GitHub Actions'];
  const methodologies = ['Agile', 'Scrum', 'Kanban', 'GitOps', 'UX'];

  const completeList = frontend
    .concat(backend)
    .concat(gameDevelopment)
    .concat(specials)
    .concat(cloud)
    .concat(cicd)
    .concat(methodologies)
    .sort((a, b) => a.localeCompare(b));

  const mainInterests = [
    'JavaScript',
    'TypeScript',
    'Angular 2+',
    'Godot',
    'HTML + CSS',
    'Tailwind',
    'Kubernetes',
    'UX'
  ];

  function isMainInterest(item: string) {
    return mainInterests.includes(item);
  }

  const inputElement: BehaviorSubject<string> = new BehaviorSubject('');
  inputElement.set = inputElement.next;

  const filtered$ = inputElement.pipe(
    map((input: string) => {
      return input.replace(new RegExp('([+\\*?])', 'g'), '\\$1');
    }),
    map((escapedInput: string) => {
      const regex = new RegExp(`.*${escapedInput}.*`, 'i');
      return completeList.filter((item) => regex.test(item));
    })
  );
</script>

<svelte:head>
  <title>Kazeheki - Skills</title>
</svelte:head>

<div class="max-w-prose px-5 md:px-0 flex flex-col gap-5 items-center">
  <p class="order-1">
    So, you're interested in my skills in detail?<br />
    Awesome!<br />
    Here you can find a list of technologies and methodologies that I've already worked with. If a point
    is <strong>bold</strong> it means I'm deeply interested in the element.
  </p>

  <div class="order-3 md:order-2">
    {#if $filtered$.length === 0}
      <small>Seems like I've not worked with that before, sorry.</small>
    {:else}
      <div class="columns-2 gap-16">
        <ul>
          {#each $filtered$ as item, index (index)}
            <li animate:flip={{ duration: 300, delay: 100 }}>
              {#if isMainInterest(item)}
                <strong>{item}</strong>
              {:else}
                {item}
              {/if}
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  </div>

  <div class="order-2 md:order-3">
    Looking for something specific?
    <input bind:value={$inputElement} class="px-1" placeholder="Type here to filter the list" />
  </div>
</div>
