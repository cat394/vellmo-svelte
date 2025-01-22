<script>
	import Contact from '$lib/components/contact/Contact.svelte';
	import Head from '$lib/components/Head.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { shop } from '$lib/data/shop';
	import { link } from '$lib/link-generator';
</script>

<Head
	name="contact"
	path={link('contact')}
	description={`${shop.name}へのお問い合わせはこちらのページからどうぞ。ご予約やご質問はお気軽にお問い合わせください。`}
	keywords={['お問い合わせ', '予約', 'サポート', 'Line']}
></Head>

<PageTitle title="Contact" />
<Contact />
