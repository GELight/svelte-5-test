<svelte:options customElement="cow-ps-modal" />

<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    import { mdiClose } from "@mdi/js";

    interface Props extends HTMLAttributes<HTMLElement> {
        showCloseIcon: boolean;
        show: boolean;
        showHeader: boolean;
        noContentScroll: boolean;
        size: "full" | "xs" | "sm" | "md" | "lg" | "xl";
        iframe: boolean;
    }

    let {
        showCloseIcon = true,
        show = false,
        noContentScroll = false,
        size = "md",
        iframe = false,
    }: Props = $props();

    let dialog: HTMLDialogElement;

    const onClose = () => {
        dialog.close();
        $host().dispatchEvent(new CustomEvent("close"));
    };

    $effect(() => {
        if (dialog) {
            if (show) {
                dialog.showModal();
            } else {
                dialog.close();
                $host().dispatchEvent(new CustomEvent("close"));
            }
        }
    });
</script>

<dialog
    bind:this="{dialog}"
    class="modal {size ? 'modal-' + size : ''}"
    onclose="{onClose}"
>
    {#if showCloseIcon}
        <div class="modal-close" onclick="{onClose}" onkeydown="{onClose}" tabindex="0" role="button">
            {#if showCloseIcon}
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24" width="24" height="24">
                    <path d="{mdiClose}" fill="currentColor"></path>
                </svg>
            {/if}
            <slot name="close" />
        </div>
    {/if}

    {#if $$slots.header}
        <div class="modal-header">
            <slot name="header" />
        </div>
    {/if}

    {#if $$slots.default}
        <div class="modal-content" class:iframe-content="{iframe}" class:no-content-scroll="{noContentScroll}">
            <slot />
        </div>
    {/if}

    {#if $$slots.footer}
        <div class="modal-footer">
            <slot name="footer" />
        </div>
    {/if}

</dialog>

<style lang="scss">
    dialog {
        &.modal {
            background-color: var(--cow-modal-background);
            box-shadow: var(--cow-modal-box-shadow);
            border: var(--cow-modal-border);
            border-radius: var(--cow-modal-border-radius);
            transition: var(--cow-modal-transition);
            padding: var(--cow-modal-padding);
            transform: var(--cow-modal-transform-initial);
            flex-direction: column;
            display: none;
            z-index: 99999999;
            inset: 0;
            outline: none;
            overflow: visible;

            &::backdrop {
                position: fixed;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-color: rgba(0, 0, 0, 0.8);
            }

            &.modal-xs {
                width: 30vw;
                max-height: 90vh;

                @media screen and (max-width: 1250px) {
                    width: 50vw;
                }
                @media screen and (max-width: 1050px) {
                    width: 60vw;
                }
                @media screen and (max-width: 768px) {
                    width: 95vw;
                }
            }

            &.modal-sm {
                width: 40vw;
                max-height: 90vh;

                @media screen and (max-width: 1250px) {
                    width: 50vw;
                }
                @media screen and (max-width: 1050px) {
                    width: 60vw;
                }
                @media screen and (max-width: 768px) {
                    width: 95vw;
                }
            }

            &.modal-md {
                width: 50vw;
                max-height: 90vh;

                @media screen and (max-width: 1250px) {
                    width: 60vw;
                }
                @media screen and (max-width: 1050px) {
                    width: 70vw;
                }
                @media screen and (max-width: 768px) {
                    width: 95vw;
                }
            }

            &.modal-lg {
                width: 60vw;
                max-height: 90vh;

                @media screen and (max-width: 1250px) {
                    width: 70vw;
                }
                @media screen and (max-width: 1050px) {
                    width: 80vw;
                }
                @media screen and (max-width: 768px) {
                    width: 95vw;
                }
            }

            &.modal-xl {
                width: 80vw;
                max-height: 90vh;

                @media screen and (max-width: 1050px) {
                    width: 90vw;
                }
                @media screen and (max-width: 768px) {
                    width: 95vw;
                }
            }

            &.modal-full {
                width: 98vw;
                height: 98vw;
                max-height: 98vh;
            }

            & .modal-close {
                cursor: pointer;
                position: absolute;
                top: var(--cow-modal-close-top);
                right: var(--cow-modal-close-right);
                background: var(--cow-modal-close-background);
                box-shadow: var(--cow-modal-close-box-shadow);
                border-radius: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10;
            }

            & .modal-header {
                box-sizing: border-box;
                height: var(--cow-modal-header-height);
                padding: var(--cow-modal-header-padding);
                margin: var(--cow-modal-header-margin);
                border-radius: var(--cow-modal-header-border-radius);
                border-bottom: var(--cow-modal-header-border-bottom);
                background: var(--cow-modal-header-background);
                color: var(--cow-modal-header-color);
                font-size: var(--cow-modal-header-font-size);
                line-height: var(--cow-modal-header-line-height);
                font-weight: var(--cow-modal-header-font-weight);
                text-transform: var(--cow-modal-header-text-transform);
                display: flex;
                justify-content: var(--cow-modal-header-justify-content);
                align-items: center;
                text-align: var(--cow-modal-header-text-align);

                @media (max-width: 576px) {
                    font-size: var(--cow-modal-header-font-size-max-576);
                    height: var(--cow-modal-header-height-max-576);
                    line-height: var(--cow-modal-header-line-height-max-576);
                    margin: var(--cow-modal-header-margin-max-576);
                }
            }

            & .modal-content {
                box-sizing: border-box;
                position: relative;
                padding: var(--cow-modal-content-padding);
                border-radius: var(--cow-modal-header-border-radius);
                color: var(--cow-modal-content-color);
                font-size: var(--cow-modal-content-font-size);
                font-weight: var(--cow-modal-content-font-weight);
                text-align: var(--cow-modal-content-text-align);
                flex-grow: 1;
                overflow: auto;

                @media (max-width: 576px) {
                    padding: var(--cow-modal-content-padding-max-576);
                    font-size: var(--cow-modal-content-font-size-max-576);
                }

                &.no-content-scroll {
                    overflow: hidden;
                }

                &.iframe-content {
                    padding-left: 0;
                    padding-right: 0;
                    box-sizing: border-box;
                }
            }

            & .modal-footer {
                box-sizing: border-box;
                margin: var(--cow-modal-footer-margin);
                padding: var(--cow-modal-footer-padding);
                border-radius: var(--cow-modal-footer-border-radius);
                background: var(--cow-modal-footer-background);
                display: flex;
                justify-content: var(--cow-modal-footer-justify-content);
                align-items: var(--cow-modal-footer-align-items);
            }

            &[open] {
                display: flex;
                opacity: 1;
                transform: var(--cow-modal-transform-showed);
            }
        }
    }
</style>