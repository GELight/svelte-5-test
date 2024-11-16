<svelte:options customElement="cow-ps-payment" />

<script lang="ts">
    let show = $state<boolean>(false);
    let exampleState = $state<number>(1);
    
    const toggleShow = () => {
        show = !show;
    };
</script>

<div class="layout column align-items-center gap-4">

    <cow-ps-button onclick={toggleShow} onkeypress={toggleShow} role="button" tabindex="0">Toggle Show Modal</cow-ps-button>

    <cow-ps-modal show={show}>
        <div slot="header">Modal Header Slot</div>

        {#if exampleState === 1}

            <cow-ps-layout class="stretch direction-column align-items-center gap-md">
                Content of State 1
                    <cow-ps-button
                        onclick={() => exampleState = 2}
                        onkeypress={() => exampleState = 2}
                        role="button" tabindex="0">Footer State 1</cow-ps-button>
            </cow-ps-layout>

            <!--
            Problem is here:
                If no named footer slot is initially rendered anywhere in the template,
                no further footer slots are rendered in other conditions.
            <div slot="footer"></div>
            -->

        {:else if exampleState === 2}

            Content of State 2

            <div slot="footer">
                <cow-ps-layout class="stretch justify-content-center">
                    <cow-ps-button
                            onclick={() => exampleState = 3}
                            onkeypress={() => exampleState = 3}
                            role="button" tabindex="0">Footer State 1</cow-ps-button>
                </cow-ps-layout>
            </div>

        {:else if exampleState === 3}

            Content of State 3

            <div slot="footer">
                <cow-ps-layout class="stretch justify-content-center">
                    <cow-ps-button
                        onclick={() => exampleState = 1}
                        onkeypress={() => exampleState = 1}
                        role="button" tabindex="0">State 2</cow-ps-button>
                </cow-ps-layout>
            </div>

        {/if}

    </cow-ps-modal>

</div>