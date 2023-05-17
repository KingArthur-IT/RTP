import { sendRequest } from '@/use/useRequest' 
import createPersistedState from "vuex-persistedstate";

export default{
  name: 'catalog', 
  namespaced: true,

  state: {
    catalogList: []
  },

  getters: {
    catalogList: state => state.catalogList
  },

  mutations: {

  },

  actions: {
    async getCatalog() {
      return await sendRequest('', 'POST', { 'method': 'get_catalog_sections' })
        .then((res) => {
          if (res.status === 200 && res.data && res.data.get_catalog_sections && res.data.get_catalog_sections.data) {
            const list = res.data.get_catalog_sections.data
              .map(el => { return { ID: el.ID, NAME: el.NAME, IBLOCK_SECTION_ID: el.IBLOCK_SECTION_ID, list: []} })
              .reduce((acc, el) => {
                if (!el.IBLOCK_SECTION_ID)
                  acc.push(el)
                else {
                  acc.find(item => item.ID === el.IBLOCK_SECTION_ID).list.push({ count: 0, ...el })
                }
                return acc
              }, [])
            console.log(list);
            return list
          } else {
            console.log('Error while get catalog list', res);
          }
        })
        .catch((err) => console.log('Error while get catalog list', err))
    },
  },

  plugins: [createPersistedState()]
};
