<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import ProductCard from '../ProductCard.svelte';
	import { link } from '$lib/link-generator';

	const products: ComponentProps<typeof ProductCard>[] = [
		{
			name: 'Esthe Pro Labo®',
			description: `<a href=${link('external/prolabo')} target="_blank">Esthe Pro Labo<sup>®</sup></a> は、内面からの美しさや健康を追求する「インナービューティ」の分野で活躍しているブランドです。<br />ここは、主にエステサロンやスパ、フィットネスクラブなど、美や健康に関わるプロフェッショナル向けの商品を提供しています。<br />たとえば、代表的な商品として「酵素ドリンク」があります。これは、健康的な食事のサポートやファスティング（断食）のために作られたもので、体の中から美しさを引き出すのが特徴です。<br />また、リラックスや体調管理のためのハーブティーも人気のアイテムです。`,
			image: {
				src: link('images/products/prolabo'),
				alt: 'エステポロラボの、紅茶の茶葉が入れられている大きい箱や、長くて大きい酵素飲料のボトルが並べられている',
				width: 500,
				height: 375
			},
			tags: ['紅茶', 'ハーブ', '酵素飲料']
		},
		{
			name: 'Eufora',
			description: `<a href=${link('external/eufora')} target="_blank">Eufora</a>（ユフォラ）は、自然由来の成分を主原料とした美容室専用のヘアケア製品を提供するブランドです。<br />特に、製品には水を一切使用せず、有効成分100%の天然素材にこだわっています。<br />これにより、地球や人に優しい製品作りを実現しています。<br />ユフォラ製品の「ノリッシュ」シリーズは、アロエベラジュースをベースにして作られているため、髪に必要な潤いと栄養を与えながら、自然な仕上がりを目指すベーシックなヘアケアラインです。`,
			image: {
				src: link('images/products/eufora'),
				alt: '青や白のボトルのユフォラのシャンプーやリンスなどが並んでいる',
				width: 500,
				height: 325
			},
			tags: ['シャンプー', 'リンス']
		},
		{
			name: "RE L'ABEAUTE",
			description: `<a href=${link('external/relabeaute')} target="_blank">RE L'ABEAUTE</a>は、「さらなる美への追及、“満足”と“感動”を全ての女性に」をコンセプトに掲げる日本の美容ブランドです。<br />主に幹細胞サイエンスを活用したスキンケア製品の開発・提供を行い、女性の自然な美しさを引き出すことを目指しています。<br />RE L'ABEAUTE のクレアスキンという製品シリーズは、肌の潤いとハリをサポートするために開発された製品群で、メイクや皮脂汚れを優しく落とすリムーバーや、肌に潤いを与えるローション、肌をしっとりと整えるステムクリームなどがあります。`,
			image: {
				src: link('images/products/relabeaute'),
				alt: '茶色と白を基調とした、リラボーテのローションやクリームのボトルが並んでいる',
				width: 400,
				height: 382
			},
			tags: ['クリーム', '化粧水', 'ローション']
		},
		{
			name: 'MTG・Refa',
			description: `<a href=${link("external/refa")} target="_blank">Refa</a>は、日本の美容機器メーカーである<a href=${link('external/mtg')} target="_blank">株式会社MTG</a>が展開する美容ブランドです。<br />ReFaは、美容ローラーをはじめとする多彩な美容・健康関連製品を提供し、国内外で高い評価を得ています。人気の 'ReFa CARAT' シリーズは、ローラー部分が肌にしっかり密着し、心地よい刺激で顔や体を引き締めます。<br />また、当店ではMTGのスポーツウェアも扱っており、これは、天然鉱石を原料とした特殊繊維を使用しており、体から放出される体温を反射し血行を促進することで、筋肉の疲労回復やコリの緩和をサポートします。`,
			image: {
				src: link('images/products/refa'),
				alt: '光沢のある美容ローラーとドライヤー',
				width: 500,
				height: 491
			},
			tags: ['美容機器', '美容ローラー', 'スポーツウェア']
		}
	];
</script>

<div class="products">
	{#each products as product}
		<ProductCard {...product} />
	{/each}
</div>

<style>
	.products {
		display: grid;
		gap: 5rem;
	}
</style>
