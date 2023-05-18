import { sendRequest } from './useRequest' 

export const getCatalog = async () => {
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
          console.log('catList = ', list);
          return list
        } else {
          console.log('Error while get catalog list', res);
        }
      })
      .catch((err) => console.log('Error while get catalog list', err))
  };

export const getAllCategoriesCount = async () => {
    return await sendRequest('', 'POST', { 'method': 'get_catalog_prod' })
        .then((res) => {
            console.log(res);
            if (res.status === 200 && res.data && res.data.get_catalog_prod && res.data.get_catalog_prod.data) {
                const sectionsIdsCount = Object.values(res.data.get_catalog_prod.data)
                    .map(el => { return el.arFields.IBLOCK_SECTION_ID })
                    .reduce((acc, el) => {
                        acc[el] = ( acc[el] || 0 ) + 1
                        return acc
                    }, {})
                console.log('prod card list = ', sectionsIdsCount);
                return sectionsIdsCount
            } else {
                console.log('Error while get catalog list', res);
            }
        })
        .catch((err) => console.log('Error while get catalog list', err))
};

export const getAllProducts = async () => {
  return await sendRequest('', 'POST', { 'method': 'get_catalog_prod' })
      .then((res) => {
          console.log(res);
          if (res.status === 200 && res.data && res.data.get_catalog_prod && res.data.get_catalog_prod.data) {
              return Object.values(res.data.get_catalog_prod.data)
          } else {
              console.log('Error while get catalog list', res);
          }
      })
      .catch((err) => console.log('Error while get catalog list', err))
};

export const getProductsOfSelectedSystem = async (idsArr) => {
    return await sendRequest('', 'POST', { 'method': 'get_catalog_prod' })
        .then((res) => {
            if (res.status === 200 && res.data && res.data.get_catalog_prod && res.data.get_catalog_prod.data) {
                const products = []
                Object.values(res.data.get_catalog_prod.data).forEach(el => {
                    if (idsArr.some(id => id === el.arFields.IBLOCK_SECTION_ID))
                        products.push(el)
                })
                return products
            } else {
                console.log('Error while get catalog list', res);
            }
        })
        .catch((err) => console.log('Error while get catalog list', err))
};

export const addProductToBacket = async (id, count, backet_id) => {
  const dataSend = { 'method': 'cart_add_prod', 'prod_id': id, 'count': count }
  if (backet_id)
    dataSend['fuser_id'] = backet_id

  return await sendRequest('', 'POST', dataSend)
      .then((res) => {
        console.log(res);
          if (res.status === 200 && res.data && res.data.cart_add_prod && res.data.cart_add_prod.data) {
              if (res.data.cart_add_prod.isSuccess === 1) {
                return res.data.cart_add_prod.data.fuser_id
              }
          } else {
              console.log('Error while get catalog list', res);
              return 0
          }
      })
      .catch((err) => console.log('Error while get catalog list', err))
};

export const getBacketProducts = async (backet_id) => {
  return await sendRequest('', 'POST', { 'method': 'cart_get', 'fuser_id': backet_id})
      .then((res) => {
        console.log(res);
          if (res.status === 200) {
              if (res.data.cart_get.isSuccess === 1) {
                return res.data.cart_get.data
              }
          } else {
              console.log('Error while get catalog list', res);
              return []
          }
      })
      .catch((err) => console.log('Error while get catalog list', err))
};

export const deleteCartItem = async (id, cart_id) => {
  return await sendRequest('', 'POST', { 'method': 'cart_clear', 'prod_id': id, 'fuser_id': cart_id})
      .then((res) => {
        console.log(res);
          if (res.status === 200) {
              return res.data.cart_clear.isSuccess === 1
          } else {
              console.log('Error while get catalog list', res);
              return false
          }
      })
      .catch((err) => console.log('Error while get catalog list', err))
};