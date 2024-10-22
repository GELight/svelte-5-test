<svelte:options customElement="cow-ps-layout" />

<slot />

<style>
    :host {
        box-sizing: border-box;
        position: relative;
        display: flex;
    }

    :host(.stretch) {
        flex-grow: 1;
    }

    :host(.fill) {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }


    :host(.gap-xs) {
        gap: var(--cow-theme-gap-xs);
    }

    :host(.gap-sm) {
        gap: var(--cow-theme-gap-sm);
    }

    :host(.gap-md) {
        gap: var(--cow-theme-gap-md);
    }

    :host(.gap-lg) {
        gap: var(--cow-theme-gap-lg);
    }

    :host(.gap-xl) {
        gap: var(--cow-theme-gap-xl);
    }

    :host(.p-xs) {
        padding: var(--cow-theme-gap-xs);
    }

    :host(.pt-xs) {
        padding-top: var(--cow-theme-gap-xs);
    }

    :host(.pr-xs) {
        padding-right: var(--cow-theme-gap-xs);
    }

    :host(.pb-xs) {
        padding-bottom: var(--cow-theme-gap-xs);
    }

    :host(.pl-xs) {
        padding-left: var(--cow-theme-gap-xs);
    }

    :host(.p-sm) {
        padding: var(--cow-theme-gap-sm);
    }

    :host(.pt-sm) {
        padding-top: var(--cow-theme-gap-sm);
    }

    :host(.pr-sm) {
        padding-right: var(--cow-theme-gap-sm);
    }

    :host(.pb-sm) {
        padding-bottom: var(--cow-theme-gap-sm);
    }

    :host(.pl-sm) {
        padding-left: var(--cow-theme-gap-sm);
    }

    :host(.p-md) {
        padding: var(--cow-theme-gap-md);
    }

    :host(.pt-md) {
        padding-top: var(--cow-theme-gap-md);
    }

    :host(.pr-md) {
        padding-right: var(--cow-theme-gap-md);
    }

    :host(.pb-md) {
        padding-bottom: var(--cow-theme-gap-md);
    }

    :host(.pl-md) {
        padding-left: var(--cow-theme-gap-md);
    }

    :host(.p-lg) {
        padding: var(--cow-theme-gap-lg);
    }

    :host(.pt-lg) {
        padding-top: var(--cow-theme-gap-lg);
    }

    :host(.pr-lg) {
        padding-right: var(--cow-theme-gap-lg);
    }

    :host(.pb-lg) {
        padding-bottom: var(--cow-theme-gap-lg);
    }

    :host(.pl-lg) {
        padding-left: var(--cow-theme-gap-lg);
    }

    :host(.p-xl) {
        padding: var(--cow-theme-gap-xl);
    }

    :host(.pt-xl) {
        padding-top: var(--cow-theme-gap-xl);
    }

    :host(.pr-xl) {
        padding-right: var(--cow-theme-gap-xl);
    }

    :host(.pb-xl) {
        padding-bottom: var(--cow-theme-gap-xl);
    }

    :host(.pl-xl) {
        padding-left: var(--cow-theme-gap-xl);
    }


    :host(.m-xs) {
        margin: var(--cow-theme-gap-xs);
    }

    :host(.mt-xs) {
        margin-top: var(--cow-theme-gap-xs);
    }

    :host(.mr-xs) {
        margin-right: var(--cow-theme-gap-xs);
    }

    :host(.mb-xs) {
        margin-bottom: var(--cow-theme-gap-xs);
    }

    :host(.ml-xs) {
        margin-left: var(--cow-theme-gap-xs);
    }

    :host(.m-sm) {
        margin: var(--cow-theme-gap-sm);
    }

    :host(.mt-sm) {
        margin-top: var(--cow-theme-gap-sm);
    }

    :host(.mr-sm) {
        margin-right: var(--cow-theme-gap-sm);
    }

    :host(.mb-sm) {
        margin-bottom: var(--cow-theme-gap-sm);
    }

    :host(.ml-sm) {
        margin-left: var(--cow-theme-gap-sm);
    }

    :host(.m-md) {
        margin: var(--cow-theme-gap-md);
    }

    :host(.mt-md) {
        margin-top: var(--cow-theme-gap-md);
    }

    :host(.mr-md) {
        margin-right: var(--cow-theme-gap-md);
    }

    :host(.mb-md) {
        margin-bottom: var(--cow-theme-gap-md);
    }

    :host(.ml-md) {
        margin-left: var(--cow-theme-gap-md);
    }

    :host(.m-lg) {
        margin: var(--cow-theme-gap-lg);
    }

    :host(.mt-lg) {
        margin-top: var(--cow-theme-gap-lg);
    }

    :host(.mr-lg) {
        margin-right: var(--cow-theme-gap-lg);
    }

    :host(.mb-lg) {
        margin-bottom: var(--cow-theme-gap-lg);
    }

    :host(.ml-lg) {
        margin-left: var(--cow-theme-gap-lg);
    }

    :host(.m-xl) {
        margin: var(--cow-theme-gap-xl);
    }

    :host(.mt-xl) {
        margin-top: var(--cow-theme-gap-xl);
    }

    :host(.mr-xl) {
        margin-right: var(--cow-theme-gap-xl);
    }

    :host(.mb-xl) {
        margin-bottom: var(--cow-theme-gap-xl);
    }

    :host(.ml-xl) {
        margin-left: var(--cow-theme-gap-xl);
    }

    :host(.direction-row) {
        flex-direction: row;
    }

    :host(.direction-row-reverse) {
        flex-direction: row-reverse;
    }

    :host(.direction-column) {
        flex-direction: column;
    }

    :host(.direction-column-reverse) {
        flex-direction: column-reverse;
    }

    :host(.wrap) {
        flex-wrap: wrap;
    }

    :host(.nowrap) {
        flex-wrap: nowrap;
    }

    :host(.wrap-reverse) {
        flex-wrap: wrap-reverse;
    }

    :host(.justify-content-start) {
        justify-content: flex-start;
    }

    :host(.justify-content-end) {
        justify-content: flex-end;
    }

    :host(.justify-content-center) {
        justify-content: center;
    }

    :host(.justify-content-space-between) {
        justify-content: space-between;
    }

    :host(.justify-content-space-around) {
        justify-content: space-around;
    }

    :host(.justify-content-space-evenly) {
        justify-content: space-evenly;
    }

    :host(.align-content-start) {
        align-content: flex-start;
    }

    :host(.align-content-end) {
        align-content: flex-end;
    }

    :host(.align-content-center) {
        align-content: center;
    }

    :host(.align-content-stretch) {
        align-content: stretch;
    }

    :host(.align-content-space-between) {
        align-content: space-between;
    }

    :host(.align-content-space-around) {
        align-content: space-around;
    }

    :host(.align-content-space-evenly) {
        align-content: space-evenly;
    }

    :host(.align-items-start) {
        align-items: flex-start;
    }

    :host(.align-items-end) {
        align-items: flex-end;
    }

    :host(.align-items-center) {
        align-items: center;
    }

    :host(.align-items-stretch) {
        align-items: stretch;
    }

    :host(.align-items-baseline) {
        align-items: baseline;
    }

    :host(.align-self-auto) {
        align-self: auto;
    }

    :host(.align-self-start) {
        align-self: flex-start;
    }

    :host(.align-self-end) {
        align-self: flex-end;
    }

    :host(.align-self-center) {
        align-self: center;
    }

    :host(.align-self-baseline) {
        align-self: baseline;
    }

    :host(.align-self-stretch) {
        align-self: stretch;
    }

    :host(.container) {
        width: 100%;
        margin-right: auto;
        margin-left: auto;
    }

    @media (min-width: 600px) {
        :host(.container) {
            width: 540px;
        }
    }

    @media (min-width: 960px) {
        :host(.container) {
            width: 840px;
        }
    }

    @media (min-width: 1200px) {
        :host(.container) {
            width: 1140px;
        }
    }

    @media (min-width: 1920px) {
        :host(.container) {
            width: 1680px;
        }
    }

    @media (min-width: 2560px) {
        :host(.container) {
            width: 1680px;
        }
    }

    @media (min-width: 1920px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
        :host(.container) {
            width: 1920px;
        }
    }
</style>