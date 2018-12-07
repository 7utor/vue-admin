import { setStore,getStore} from '@/common/storage.js'

const app = {
	state: {
		sidebar: {
			opened: !+getStore('sidebarStatus')
		}
	},
	mutations: {
		TOGGLE_SIDEBAR: state => {
			if(state.sidebar.opened) {
				setStore('sidebarStatus',1)
			}else{
				setStore('sidebarStatus',0)
			}
			state.sidebar.opened = !state.sidebar.opened
		}
	},
	actions: {
		ToggleSideBar: ({commit}) => {
			commit('TOGGLE_SIDEBAR')
		}
	}
}

export default app
