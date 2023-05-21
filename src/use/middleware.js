import { sendRequest } from './useRequest' 

//Получить системы и категории 
export const getCatalog = async () => {
    return await sendRequest('', 'POST', { 'method': 'get_catalog_sections' })
      .then((res) => {
        if (res.status === 200 && res.data && res.data.get_catalog_sections && res.data.get_catalog_sections.data) {
          const list = res.data.get_catalog_sections.data
            .map(el => { return { ID: el.ID, NAME: el.NAME, IBLOCK_SECTION_ID: el.IBLOCK_SECTION_ID, list: []} }) //transform data
            .reduce((acc, el) => { //collect categotiest to list []
              if (!el.IBLOCK_SECTION_ID) //если это не категория а верхний уровень
                acc.push(el)
              else
                acc.find(item => item.ID === el.IBLOCK_SECTION_ID).list.push({ count: 0, ...el })
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

//Посчитать сколько товаров есть по категориям { IBLOCK_SECTION_ID: count, ... }
export const getAllCategoriesCount = async () => {
    return await sendRequest('', 'POST', { 'method': 'get_catalog_prod' })
        .then((res) => {
            if (res.status === 200 && res.data && res.data.get_catalog_prod && res.data.get_catalog_prod.data) {
                const sectionsIdsCount = Object.values(res.data.get_catalog_prod.data)
                    .map(el => { return el.arFields.IBLOCK_SECTION_ID }) //вытащить только IBLOCK_SECTION_ID из товаров
                    .reduce((acc, el) => {
                        acc[el] = ( acc[el] || 0 ) + 1
                        return acc
                    }, {})
                return sectionsIdsCount
            } else {
                console.log('Error while getAllCategoriesCount', res);
            }
        })
        .catch((err) => console.log('Error while getAllCategoriesCount', err))
};

//получить продукты только заданных катогория по массиву id этих категорий
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
              console.log('Error while getProductsOfSelectedSystem', res);
          }
      })
      .catch((err) => console.log('Error while getProductsOfSelectedSystem', err))
};

//получить все продукты в виде массива
export const getAllProducts = async () => {
  return await sendRequest('', 'POST', { 'method': 'get_catalog_prod' })
      .then((res) => {
          console.log(res);
          if (res.status === 200 && res.data && res.data.get_catalog_prod && res.data.get_catalog_prod.data) {
              return Object.values(res.data.get_catalog_prod.data)
          } else {
              console.log('Error while getAllProducts', res);
          }
      })
      .catch((err) => console.log('Error while getAllProducts', err))
};

//добавить продукт в корзину
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
              console.log('Error while addProductToBacket', res);
              return 0
          }
      })
      .catch((err) => console.log('Error while addProductToBacket', err))
};

//получить из корзины продукты
export const getBacketProducts = async (backet_id) => {
  return await sendRequest('', 'POST', { 'method': 'cart_get', 'fuser_id': backet_id})
      .then((res) => {
        console.log(res);
          if (res.status === 200) {
              if (res.data.cart_get.isSuccess === 1) {
                return res.data.cart_get.data
              }
          } else {
              console.log('Error while getBacketProducts', res);
              return []
          }
      })
      .catch((err) => console.log('Error while getBacketProducts', err))
};

//удалить товар из корзины
export const deleteCartItem = async (id, cart_id) => {
  return await sendRequest('', 'POST', { 'method': 'cart_clear', 'prod_id': id, 'fuser_id': cart_id})
      .then((res) => {
        console.log(res);
          if (res.status === 200) {
              return res.data.cart_clear.isSuccess === 1
          } else {
              console.log('Error while deleteCartItem', res);
              return false
          }
      })
      .catch((err) => console.log('Error while deleteCartItem', err))
};

//оформить заказ из корзины
export const createOrder = async (name, phone, email, date, adress, comment, cart_id) => {
  return await sendRequest('', 'POST', { 
    'method': 'order_create',
    'user_name': name,
    'user_phone': phone,
    'user_email': email,
    'user_data_poluch': date,
    'user_address': adress,
    'user_comment': comment,
    'fuser_id': cart_id,
  })
      .then((res) => {
          if (res.status === 200) {
            return res.data.order_create.isSuccess === 1
          } else {
              console.log('Error while createOrder', res);
              return false
          }
      })
      .catch((err) => console.log('Error while createOrder', err))
};

//получить файл сметы
export const printCart = async (cart_id) => {
  return await sendRequest('', 'POST', { 'method': 'cart_print', 'fuser_id': cart_id })
      .then((res) => {
          if (res.status === 200) {
            return res.data.cart_print.data
          } else {
              console.log('Error while printCart', res);
              return ''
          }
      })
      .catch((err) => console.log('Error while printCart', err))
};

//отправка данных формы
export const sendFormData = async (type, formInfo, url, name, surname, phone, email, theme, message, additional_message = '') => {
  return await sendRequest('', 'POST', 
    { 
      'method': 'form_send',
      'type': type,
      'form': formInfo,
      'data_url': url,
      'data_name': name,
      'data_fam': surname,
      'data_phone': phone,
      'data_email': email,
      'data_theme': theme,
      'data_mess': message,
      'data_dop_mess': additional_message,
    }
  )
      .then((res) => {
          if (res.status === 200) {
            return res.data.form_send.isSuccess === 1
          } else {
              console.log('Error while send form data', res);
              return false
          }
      })
      .catch((err) => console.log('Error while send form data', err))
};