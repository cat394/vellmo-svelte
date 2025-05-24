export interface Menu {
	category: string;
	plans: {
		name: string;
		price: string;
	}[];
}

export const menus: Menu[] = [
	{
		category: 'カット',
		plans: [
			{
				name: '一般',
				price: '4550'
			},
			{
				name: '中高生',
				price: '3500'
			},
			{
				name: '小学生',
				price: '2500'
			},
			{
				name: '幼児',
				price: '2000'
			}
		]
	},
	{
		category: 'カラー',
		plans: [
			{
				name: '全体染め',
				price: '7700～'
			},
			{
				name: 'リタッチ',
				price: '4400～'
			},
			{
				name: 'カット＆カラー',
				price: '7700～'
			},
			{
				name: 'カット＆リタッチ',
				price: '5500～'
			},
			{
				name: '和漢カラー',
				price: '9900～'
			},
			{
				name: 'ヘナ',
				price: '7700～'
			}
		]
	},
	{
		category: 'パーマ',
		plans: [
			{
				name: 'ストレート(カット込み)',
				price: '7700～'
			},
			{
				name: '縮毛矯正(カット込み)',
				price: '9000'
			},
			{
				name: '縮毛矯正(ポイントのみ)',
				price: '8800～'
			},
			{
				name: 'デジタルパーマ(ポイントのみ)',
				price: '8500～'
			},
			{
				name: '縮毛矯正＋カット',
				price: '16500'
			},
			{
				name: 'デジタルパーマ＋カット',
				price: '15400'
			}
		]
	},
	{
		category: 'ネイル',
		plans: [
			{
				name: 'ワンカラー',
				price: '4400'
			},
			{
				name: 'グラデーション',
				price: '4400'
			},
			{
				name: 'マグネット',
				price: '4950'
			},
			{
				name: 'ミラー(ワンカラーまたはグラデ)',
				price: '4950'
			},
			{
				name: 'フレンチ',
				price: '4950'
			},
			{
				name: '＋ミニオプション',
				price: '550'
			},
			{
				name: '＋ベースカラー追加',
				price: '1100'
			},
			{
				name: '＋カラー１色追加',
				price: '110'
			},
			{
				name: '＋マットコート',
				price: '550'
			},
			{
				name: '定額A',
				price: '4950'
			},
			{
				name: '定額B',
				price: '5500'
			}
		]
	},
	{
		category: 'その他',
		plans: [
			{
				name: 'トリートメント',
				price: '1650～3850'
			},
			{
				name: 'スキャルプ',
				price: '1650～3850'
			},
			{
				name: 'シャンプーブロー',
				price: '1650～'
			},
			{
				name: '着付け',
				price: '8800'
			},
			{
				name: '振袖',
				price: '15400'
			},
			{
				name: 'パリジェンヌ(まつ毛カール)',
				price: '6600'
			}
		]
	}
];
