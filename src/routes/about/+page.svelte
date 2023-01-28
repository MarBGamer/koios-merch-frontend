<script>
    import { goto } from '$app/navigation';
    import { query } from 'svelte-apollo';
    import { TwitterIcon } from 'svelte-feathers';
    import { GET_ABOUT } from '$lib/queries';
    import { settingsStore } from '$lib/stores';

    const about = query(GET_ABOUT);
</script>

<svelte:head>
    <title>{$about.data?.about.data.attributes.title ?? 'About'} {$settingsStore.baseTitle}</title>
</svelte:head>

{#if !$about.loading && !$about.error}
    <h1 class="about-title">{$about.data.about.data.attributes.about.aboutHeader}</h1>
    <div class="about">
        <div>
            <article class="merch">
                <h3 class="header">{$about.data.about.data.attributes.about.merchHeader}</h3>
                {#each $about.data.about.data.attributes.about.merchText as text}
                    <p class="paragraph">{text.text}</p>
                {/each}
            </article>
            <article class="world">
                <h3 class="header">{$about.data.about.data.attributes.about.worldHeader}</h3>
                {#each $about.data.about.data.attributes.about.worldText as text}
                    <p class="paragraph">{text.text}</p>
                {/each}
            </article>
        </div>
        <img src="{$settingsStore.cmsUrl}{$about.data.about.data.attributes.about.image.data.attributes.url}"
             alt="{$about.data.about.data.attributes.about.image.data.attributes.alternativeText}" />
    </div>

    <h2 class="community-title">{$about.data.about.data.attributes.community.communityHeader}</h2>
    <div class="community">
        {#each $about.data.about.data.attributes.community.cards as card}
            <div class="card">
                <img src="{$settingsStore.cmsUrl}{card.image.data.attributes.url}" alt="{card.image.data.attributes.alternativeText}" />
                <h3>
                    {card.name.split(/ (.*)/s)[0]}
                    <b>{card.name.split(/ (.*)/s)[1]}</b>
                </h3>
                <button class="secondary" on:click="{() => goto(card.buttonLink)}">{card.buttonLabel}</button>
            </div>
        {/each}
    </div>

    <div class="socials">
        <div class="socials-title">{$about.data.about.data.attributes.community.socialsHeader}</div>
        <div class="icon" on:click="{() => goto($about.data.about.data.attributes.community.twitterLink)}">
            <TwitterIcon color="#9816FF" size="50" />
        </div>
    </div>
{/if}

<style>
    .about-title {
        margin-top: 90px;
        text-align: center;
        text-transform: capitalize;
    }

    .about {
        margin: 0 75px;
        display: grid;
        grid-template-columns: 1fr 35%;
    }

    .about .header {
        margin: 50px 0 1em 0;
        text-transform: capitalize;
    }

    .about .paragraph {
        margin-bottom: 1em;
    }

    .community-title {
        margin: 280px 0 35px 0;
        text-align: center;
        text-transform: capitalize;
    }

    .community {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 100px;
    }

    .community .card {
        padding: 22px 22px 15px 22px;
        display: flex;
        flex-direction: column;
        border: 4px solid #FFFFFF;
        border-radius: 15px;
        filter: drop-shadow(-4px -3px 15px #FFFFFF) drop-shadow(2px 2px 19px rgba(79, 79, 79, 0.4));
        box-shadow: inset 0 0 15px 5px #FFFFFF;
        background-color: #EEEEEE;
    }

    .community .card img {
        margin-bottom: 15px;
        width: 100%;
        border-radius: 10px;
    }

    .community .card h3 {
        margin: 20px 0 15px 0;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 18px;
        font-weight: 400;
    }

    .community .card button {
        margin: 0 auto;
    }

    .socials {
        margin: 280px 0 150px 0;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .socials .socials-title {
        margin: 0 auto;
        display: inline;
        text-transform: capitalize;
        font-family: 'Outfit', sans-serif;
        font-size: 30px;
        font-weight: 700;
        color: transparent;
        background: linear-gradient(269.95deg, #3E25D3 5.22%, #F318AC 116.89%);
        background-clip: text;
        -webkit-background-clip: text;
    }

    .socials .icon {
        margin: 20px auto 0 auto;
    }

    .socials .icon:hover {
        cursor: pointer;
    }
</style>