<svelte:options customElement="cow-ps-payment" />

<script lang="ts">
    let show = $state<boolean>(false);
    let exampleState = $state<boolean>(false);
    
    const toggleShow = () => {
        show = !show;
    };
</script>

<div class="layout column align-items-center gap-4">

    <cow-ps-button onclick={toggleShow} onkeypress={toggleShow} role="button" tabindex="0">Toggle Show Modal</cow-ps-button>

    <cow-ps-modal show={show}> <!-- HERE IS THE PROBLEM ... show={true} works -->

        <div slot="header">Modal Header Slot</div>

        {#if exampleState}

            Any content here will be placed in the default slot of the modal.

            <div slot="footer">
                <cow-ps-layout class="stretch justify-content-center">
                    <cow-ps-button
                            onclick={() => exampleState = !exampleState}
                            onkeypress={() => exampleState = !exampleState}
                            role="button" tabindex="0">Footer State 1</cow-ps-button>
                </cow-ps-layout>
            </div>

        {:else}

            Another content here will be placed in the default slot.

            <div slot="footer">
                <cow-ps-layout class="stretch justify-content-center">
                    <cow-ps-button
                        onclick={() => exampleState = !exampleState}
                        onkeypress={() => exampleState = !exampleState}
                        role="button" tabindex="0">State 2</cow-ps-button>
                </cow-ps-layout>
            </div>

        {/if}

    </cow-ps-modal>

</div>