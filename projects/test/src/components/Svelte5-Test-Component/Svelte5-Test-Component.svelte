<svelte:options customElement="svelte5-test-component" />

<script lang="ts">
    import { onMount } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    // Input props type definitions
    interface Props extends HTMLAttributes<HTMLElement> {
        optionalProp: number;
        requiredProp: string;
    }

    // Input props
    let { optionalProp = 42, requiredProp }: Props = $props();

    onMount(() => {

        // New debug loggers in Svelte 5
        $inspect(optionalProp, requiredProp);
        $inspect("34");

        // Dispatch an event
        $host().dispatchEvent(
            new CustomEvent("mounted", {}),
        );
    });

</script>

<p>svelte5-test-component (custom element)</p>
<p>to learn new svelte 5 techniques</p>

<style lang="scss">
    :host {
        border: 1px dashed #ccc;
        padding: 20px;
    }
</style>
