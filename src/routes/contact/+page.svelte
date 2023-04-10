<script lang="ts">
  import JsonBox from '$lib/components/JsonBox.svelte';

  const email = 'kazeheki@web.de';
  const github = 'https://github.com/Kazeheki';

  const data = {
    eMail: email,
    GitHub: github
  };

  const specialTransform = (text: string) => {
    text = text.replace(new RegExp(`"${email}"`), `<a href="mailto:${email}">"${email}"</a>`);
    text = text.replace(new RegExp(`"${github}"`), `<a href="${github}">"${github}"</a>`);
    return text;
  };
</script>

<JsonBox {data} {specialTransform} />
