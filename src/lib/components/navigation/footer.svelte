<script>
    export let contactLabel;
    export let faqLabel;
    export let shippingLabel;
    export let returnsLabel;
    export let tosLabel;
    export let privacyLabel;

    const year = new Date().getFullYear();
</script>

<footer class="container">
    <div class="links">
        <ul>
            <li><a href="/contact">{contactLabel}</a></li>
            <li><a href="/faq">{faqLabel}</a></li>
            <li><a href="/shipping">{shippingLabel}</a></li>
            <li><a href="/returns">{returnsLabel}</a></li>
            <li><a href="/tos">{tosLabel}</a></li>
            <li><a href="/privacy">{privacyLabel}</a></li>
        </ul>
    </div>
    <div class="copyright">
        &#169 {year} Koios Merch
    </div>
</footer>

<style>
    footer {
        margin: 30px auto;
        border-radius: 10px;
        box-shadow: inset 0 4px 48px #FFFFFF, inset 0 4px 19px #FFFFFF;
        background-color: #D9D9D9;
    }

    footer .links {
        margin: 0 20px 10px 20px;
        padding-top: 20px;
    }

    footer .links ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        list-style: none;
        text-transform: capitalize;
        font-size: 18px;
        font-family: 'Outfit', sans-serif;
    }

    footer .links ul li a {
        text-decoration: none;
        color: #21234C;
    }

    footer .links ul li:not(:last-child)::after {
        content: '•';
        margin: 0 5px;
    }

    footer .copyright {
        padding-bottom: 5px;
        text-align: center;
        font-family: 'Outfit', sans-serif;
        font-size: 18px;
        color: #21234C;
    }
</style>