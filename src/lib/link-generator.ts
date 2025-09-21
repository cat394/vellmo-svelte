import {
	type RouteConfig,
	type ExtractRouteData,
	type FlatRoutes,
	link_generator
} from '@kokomi/link-generator';

const route_config = {
	home: {
		path: '/'
	},
	about: {
		path: '/about'
	},
	price: {
		path: '/price'
	},
	products: {
		path: '/products'
	},
	contact: {
		path: '/contact'
	},
	site: {
		path: '/site'
	},
	others: {
		path: '/others'
	},
	external: {
		path: 'https://',
		children: {
			line: {
				path: 'lin.ee/PjB4ayi'
			},
			form: {
				path: 'ssgform.com/s/aDSyajnIlm3n'
			},
			prolabo: {
				path: 'esthepro-labo.com'
			},
			eufora: {
				path: 'euforajp.com'
			},
			relabeaute: {
				path: 'relabeaute.com'
			},
			refa: {
				path: 'refa.net'
			},
			mtg: {
				path: 'mtg.gr.jp'
			}
		}
	},
	images: {
		path: '/images',
		children: {
			logo: {
				path: '/logo.svg'
			},
			qr: {
				path: '/line-qr.webp'
			},
			exterior: {
				path: '/exterior',
				children: {
					wall: {
						path: '/wall.webp'
					},
					parking: {
						path: '/parking.webp'
					},
					front: {
						path: '/front.webp'
					}
				}
			},
			interior: {
				path: '/interior',
				children: {
					sofa: {
						path: '/sofa.webp'
					},
					chair: {
						path: '/chair.webp'
					},
					shelf: {
						path: '/shelf.webp'
					}
				}
			},
			nails: {
				path: '/nails',
				children: {
					nailing: {
						path: '/nailing.webp'
					},
					display: {
						path: '/display.webp'
					},
					room: {
						path: '/room.webp'
					},
					list: {
						path: '/list.webp'
					}
				}
			},
			products: {
				path: '/products',
				children: {
					prolabo: {
						path: '/prolabo.webp'
					},
					eufora: {
						path: '/eufora.webp'
					},
					relabeaute: {
						path: '/relabeaute.webp'
					},
					refa: {
						path: '/refa.webp'
					}
				}
			},
			icons: {
				path: '/icons',
				children: {
					scissors: {
						path: '/scissors.svg'
					},
					cup: {
						path: '/cup.svg'
					},
					tag: {
						path: '/tag.svg'
					}
				}
			}
		}
	}
} as const satisfies RouteConfig;

export const link = link_generator(route_config);

export type RouteType = ExtractRouteData<FlatRoutes<typeof route_config>>;
