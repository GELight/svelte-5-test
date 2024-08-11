<svelte:options customElement="cow-ps-button" />

<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import type { Snippet } from "svelte";

    // Input props type definitions
    interface Props extends HTMLAttributes<HTMLElement> {
        children: Snippet<[]>;
        named: Snippet<[]>;
        variant: string;
        url: string;
        excludeValidation: boolean; // Test with "exclude-validation" (kebab-case) in template
        inverted: boolean;
        disabled: boolean;
    }

    let {
        children,
        named,
        variant,
        url,
        excludeValidation,
        inverted,
        disabled,
    }: Props = $props();

    const click = (e: Event) => {
        e.preventDefault();

        if (!disabled) {
            if (isValidUrl(url)) {
                window.location.href = url;
            }

            $host().dispatchEvent(
                new CustomEvent("click", { detail: e }),
            );
        }
    };

    const isValidUrl = (url: string) => {
        if (excludeValidation || url === "/") {
            return true;
        }

        return /^(https?:\/\/)?([^\s$.?#].[^\s]*)$/i.test(url);
    };
</script>

<p>cow-ps-button (custom element)</p>
<p>First try to refactor my old svelte 3 button component</p>
<h2>Slots are empty!</h2>

<button
    class="btn {variant ? 'btn-' + variant : ''}"
    class:disabled={disabled}
    class:inverted={inverted}
    onclick="{click}"
>
    {@render children()}
    {@render named()}
</button>

<style lang="scss">
  :host {
    display: inline-block;
    vertical-align: center;
    border: 1px dashed #ed0000;
    padding: 20px;
  }

  .btn {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 5px;
    box-sizing: border-box;
    height: 32px;
    padding: 0 10px;
  }
</style>
