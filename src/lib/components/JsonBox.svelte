<script>
  export let data = {};

  const color = {
    braces: 'text-amber-300',
    curlies: 'text-green-300',
    strings: 'text-red-300',
    attributes: 'text-blue-300'
  };

  const markAttribute = (text) =>
    text.replace(/(^\s*)("[\w_]+")(:)/gm, `$1<span class='${color.attributes}'>$2</span>$3`);
  const markBrackets = (text) =>
    text.replace(/([[\]])/g, `<span class='${color.braces}'>$1</span>`);
  const markCurlies = (text) => text.replace(/([{}])/g, `<span class='${color.curlies}'>$1</span>`);
  const markStrings = (text) => {
    let result = text.replace(
      /(^\s*)("[\w\d -_()]+")([^:])/gm,
      `$1<span class='${color.strings}'>$2</span>$3`
    );
    result = result.replace(/(: )("[\w\d -_()]+")/gm, `$1<span class='${color.strings}'>$2</span>`);
    return result;
  };

  let text = JSON.stringify(data, null, 2);
  text = markAttribute(text);
  text = markBrackets(text);
  text = markCurlies(text);
  text = markStrings(text);
</script>

<div
  class="bg-primary-900 text-beryl_green font-mono px-7 md:px-16 py-5 rounded-2xl shadow-primary-900 shadow-md"
>
  <pre>
			{@html text}
		</pre>
</div>
