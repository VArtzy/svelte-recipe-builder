<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav class="p-8 flex justify-between items-center">
<a href="/"><img src="/favicon.png" width="64" alt="Coookeed logo" /></a>
    <div class="flex gap-4">
        <a href="/app" class="text-white px-4 py-2 bg-orange-600 rounded-md">Try it</a>
        <a href="/login" class="text-orange-600 px-4 py-2 bg-white px-4 py-2 rounded-md">Login</a>
    </div>
</nav>
{@render children()}
