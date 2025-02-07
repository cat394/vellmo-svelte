<script>
	import { link } from '$lib/link-generator';
</script>

<section>
	<h2>当店のスケジュール</h2>
	<iframe
		title="Style & Color Vell moの公開スケジュール"
		src="https://calendar.google.com/calendar/embed?src=326855ca45ebc37d17ab7612fe61cd17e883197d895a60f5555323f957fc9366%40group.calendar.google.com&ctz=Asia%2FTokyo"
		style="border: 0"
		width="800"
		height="600"
		frameborder="0"
		scrolling="no"
	></iframe>
	<p>
		希望する時間帯が空いているかどうかを調べるためには、<a
			href="https://calendar.google.com/calendar/embed?src=326855ca45ebc37d17ab7612fe61cd17e883197d895a60f5555323f957fc9366%40group.calendar.google.com&ctz=Asia%2FTokyo"
			target="_blank">当店の公開カレンダー</a
		>をご覧ください。<br />予約が入っている枠は『予定あり』と書かれています。<br />カレンダーの右上にある格子のアイコンから月の表示を週に切り替えたりと、見やすく表示を切り替えることができます。
	</p>
</section>

<style>
	p {
		display: none;
	}
	@media (width < 856px) {
		p {
			display: block;
		}
		iframe {
			display: none;
		}
	}
</style>
