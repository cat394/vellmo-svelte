export interface Menu {
	category: string;
	plans: {
		name: string;
		price: number;
		description?: string;
	}[];
}

export const menus: Menu[] = [
	{
		category: 'カット',
		plans: [
			{
				name: '一般',
				price: 4550
			},
			{
				name: '中学生・高校生',
				price: 3500
			},
			{
				name: '子供(小学生以下)',
				price: 2200
			}
		]
	},
	{
		category: 'カラー',
		plans: [
			{
				name: 'カラー＋カット',
				price: 7700,
				description: 'リタッチ45日以内'
			},
			{
				name: 'カラー全体染め＋カット',
				price: 9900,
				description: 'ロングは＋￥1100'
			},
			{
				name: 'カラー(リタッチのみ)',
				price: 5500,
				description: 'リタッチ2cm以内'
			},
			{
				name: '店長イチオシ！和漢カラー＋カット＋トリートメント',
				price: 13200,
				description: 'ハーブトリートメントカラー'
			},
			{
				name: '和漢カラーのみ',
				price: 7700,
				description: '和漢ハーブカラー'
			}
		]
	},
	{
		category: 'ネイル',
		plans: [
			{
				name: 'ワンカラー',
				price: 4400
			},
			{
				name: 'グラデーション',
				price: 4400
			},
			{
				name: 'マグネット',
				price: 4950
			},
			{
				name: 'ミラー(ワンカラーまたはグラデ)',
				price: 4950
			},
			{
				name: 'フレンチ',
				price: 4950
			},
			{
				name: '＋ミニオプション',
				price: 550
			},
			{
				name: '＋ベースカラー追加',
				price: 1100
			},
			{
				name: '＋カラー１色追加',
				price: 110
			},
			{
				name: '＋マットコート',
				price: 550
			},
			{
				name: '定額A',
				price: 4950
			},
			{
				name: '定額B',
				price: 5500
			}
		]
	},
	{
		category: 'その他',
		plans: [
			{
				name: 'パーマ＋カット',
				price: 9900
			},
			{
				name: 'デジタルパーマ＋カット',
				price: 21000
			},
			{
				name: '縮毛矯正(ポイント前髪のみ)',
				price: 9900
			},
			{
				name: '縮毛矯正＋カット',
				price: 21000
			},
			{
				name: '縮毛矯正＋カット＋カラー',
				price: 23000
			},
			{
				name: 'パリジェンヌ(まつ毛カール)',
				price: 6600
			}
		]
	}
];
