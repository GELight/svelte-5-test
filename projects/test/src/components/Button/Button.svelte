<svelte:options customElement="cow-ps-button" />

<script lang="ts">
    import { onMount } from "svelte";
    import { on } from 'svelte/events';
    import type { HTMLAttributes } from "svelte/elements";

    interface Props extends HTMLAttributes<HTMLElement> {
        disabled: boolean;
    }
    let { disabled = false }: Props = $props();

    let focused = $state<boolean>(false);

    onMount(() => {
        on($host(), 'focus', () => {
            focused = true;
        });
        on($host(), 'focusout', () => {
            focused = false;
        });
    });

    $effect(() => {
        if (disabled) {
            $host().setAttribute("tabindex", "-1");
        } else {
            $host().setAttribute("tabindex", "0");
        }
    });
</script>

<button
    class="cow-button"
    class:focused={focused}
    disabled={disabled}
    tabindex="-1"
>
    <slot></slot>
</button>

<style lang="scss">
  :host {
    position: relative;
    display: inline-block;
    vertical-align: center;
    outline: none;
  }

  .cow-button {
    box-sizing: border-box;
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: all .1s ease-in-out;
    outline: none;

    color: var(--cow-button-color);
    background: var(--cow-button-bg);
    border: var(--cow-button-border);
    padding: var(--cow-button-padding);
    margin: var(--cow-button-margin);
    box-shadow: var(--cow-button-box-shadow);
    font-size: var(--cow-button-font-size);
    font-weight: var(--cow-button-font-weight);

    &:hover:not(.disabled) {
      cursor: pointer;
      color: var(--cow-button-hover-color);
      background: var(--cow-button-hover-bg);
      border: var(--cow-button-hover-border);
      box-shadow: var(--cow-button-hover-box-shadow);
    }

    &.inverted {
      color: var(--cow-button-inverted-color);
      background: var(--cow-button-inverted-bg);
      border: var(--cow-button-inverted-border);

      &:hover {
        color: var(--cow-button-inverted-hover-color);
        background: var(--cow-button-inverted-hover-bg);
        border: var(--cow-button-inverted-hover-border);
      }
    }

    &[disabled] {
      opacity: var(--cow-button-disabled-opacity);
      cursor: auto;
      pointer-events: none;
    }

    &.secondary {
      color: var(--cow-button-secondary-color);
      background: var(--cow-button-secondary-bg);
      border: var(--cow-button-secondary-border);
      padding: var(--cow-button-secondary-padding);
      margin: var(--cow-button-secondary-margin);
      text-decoration: var(--cow-button-secondary-text-decoration);
      box-shadow: var(--cow-button-secondary-box-shadow);

      &.inverted {
        color: var(--cow-button-secondary-inverted-color);
        background: var(--cow-button-secondary-inverted-bg);
        border: var(--cow-button-secondary-inverted-border);

        &:hover {
          color: var(--cow-button-secondary-inverted-hover-color);
          background: var(--cow-button-secondary-inverted-hover-bg);
          border: var(--cow-button-secondary-inverted-hover-border);
        }
      }

      &:hover {
        cursor: pointer;
        color: var(--cow-button-secondary-hover-color);
        background: var(--cow-button-secondary-hover-bg);
        border: var(--cow-button-secondary-hover-border);
        text-decoration: var(--cow-button-secondary-hover-text-decoration);
        box-shadow: var(--cow-button-secondary-hover-box-shadow);
      }
    }

    &.link {
      color: var(--cow-button-link-color);
      background: var(--cow-button-link-bg);
      border: var(--cow-button-link-border);
      padding: var(--cow-button-link-padding);
      margin: var(--cow-button-link-margin);
      text-decoration: var(--cow-button-link-text-decoration);

      &:hover {
        cursor: pointer;
        color: var(--cow-button-link-hover-color);
        background: var(--cow-button-link-hover-bg);
        border: var(--cow-button-link-hover-border);
        text-decoration: var(--cow-button-link-hover-text-decoration);
      }
    }

    &.small {
      padding: var(--cow-button-sm-padding);
      font-size: var(--cow-button-sm-font-size);
      font-weight: var(--cow-button-sm-font-weight);
    }

    &.focused {
      &:before {
        z-index: 10000;
        content: " ";
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        border: var(--cow-theme-focus-border);
      }
    }
  }
</style>