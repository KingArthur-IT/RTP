import { sendRequest } from './useRequest' 
import { sendFileRequest } from './sendFileRequest' 

//Получить системы и категории 
export const getCatalog = async () => {
    return await sendRequest('', 'POST', { 'method': 'get_catalog_sections' })
      .then((res) => {
        if (res.status === 200 && res.data && res.data.get_catalog_sections && res.data.get_catalog_sections.data) {
          const list = res.data.get_catalog_sections.data
            .map(el => { return { ID: el.ID, NAME: el.NAME, IBLOCK_SECTION_ID: el.IBLOCK_SECTION_ID, CODE: el.CODE, list: []} }) //transform data
            .reduce((acc, el) => { //collect categotiest to list []
              if (!el.IBLOCK_SECTION_ID) //если это не категория а верхний уровень
                acc.push(el)
              else
                acc.find(item => item.ID === el.IBLOCK_SECTION_ID).list.push({ count: 0, ...el })
              return acc
            }, [])
          return list
        } else {
          console.log('Error while get catalog list', res);
        }
      })
      .catch((err) => console.log('Error while get catalog list', err))
  };

//Посчитать сколько товаров есть по категориям { IBLOCK_SECTION_ID: count, ... }
export const getAllCategoriesCount = async () => {
    return await sendRequest('', 'POST', { 'method': 'get_catalog_num_prod_in_section' })
        .then((res) => {
            if (res.status === 200 && res.data && res.data.get_catalog_num_prod_in_section && res.data.get_catalog_num_prod_in_section.data && res.data.get_catalog_num_prod_in_section.data.prod_sect) {
                return res.data.get_catalog_num_prod_in_section.data.prod_sect
            } else {
                console.log('Error while getAllCategoriesCount', res);
            }
        })
        .catch((err) => console.log('Error while getAllCategoriesCount', err))
};

//получить продукты только заданных катогория по массиву id этих категорий
export const getProductsOfSelectedSystem = async (idsArr) => {
  return await sendRequest('', 'POST', { 'method': 'get_catalog_prod', 'section_id': idsArr.join(';') })
      .then((res) => {
          if (res.status === 200 && res.data && res.data.get_catalog_prod && res.data.get_catalog_prod.data) {
              return Object.values(res.data.get_catalog_prod.data)
          } else {
              console.log('Error while getProductsOfSelectedSystem', res);
          }
      })
      .catch((err) => console.log('Error while getProductsOfSelectedSystem', err))
};

//получить только id заданных катогория по массиву id этих категорий
export const getIdsOfSelectedSystem = async (idsArr, filters = null) => {
  return await sendRequest('', 'POST', { 'method': 'get_catalog_prod_id', 'section_id': idsArr.join(';'), ...filters })
      .then((res) => {
          if (res.status === 200 && res.data && res.data.get_catalog_prod_id && res.data.get_catalog_prod_id.data && res.data.get_catalog_prod_id.data_prop && res.data.get_catalog_prod_id.data_price_max) {
            console.log('data', res.data.get_catalog_prod_id.data);
              return {
                data: { ids: res.data.get_catalog_prod_id.data, codes: res.data.get_catalog_prod_id.data_code },
                props: res.data.get_catalog_prod_id.data_prop,
                max_price: res.data.get_catalog_prod_id.data_price_max,
              }
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
          if (res.status === 200 && res.data && res.data.get_catalog_prod && res.data.get_catalog_prod.data) {
              return Object.values(res.data.get_catalog_prod.data)
          } else {
              console.log('Error while getAllProducts', res);
          }
      })
      .catch((err) => console.log('Error while getAllProducts', err))
};

//получить продукты из корзины
export const getAllProductsInCart = async (idsArr) => {
  return await sendRequest('', 'POST', { 'method': 'get_catalog_prod', 'prod_id': idsArr.join(';') })
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
  const phoneOnlyDigits = phone.replaceAll(' ', '').replaceAll('-', '').replaceAll('(','').replaceAll(')','').replaceAll('+','')
  return await sendRequest('', 'POST', { 
    'method': 'order_create',
    'user_name': name,
    'user_phone': phoneOnlyDigits,
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
export const sendFormData = async (type, formInfo, url, name, surname, phone, email, theme, message, fileUrl, additional_message = '') => {
  const phoneOnlyDigits = phone.replaceAll(' ', '').replaceAll('-', '').replaceAll('(','').replaceAll(')','').replaceAll('+','')
  return await sendRequest('', 'POST', 
    { 
      'method': 'form_send',
      'type': type,
      'form': formInfo,
      'data_url': url,
      'data_name': name,
      'data_fam': surname,
      'data_phone': phoneOnlyDigits,
      'data_email': email,
      'data_theme': theme,
      'data_mess': message,
      'files': fileUrl,
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

//отправка файла для формы
export const sendFile = async (file) => {
  let formData = new FormData();
  formData.append("file", file, file.name);

  return await sendFileRequest('', 'POST', formData)
    .then((res) => {
        if (res.status === 200) {
          if (res.data && res.data.data)
            return res.data.data[0]
          else console.log('Error while send form data', res);
        } else {
            console.log('Error while send form data', res);
            return false
        }
    })
    .catch((err) => console.log('Error while send form data', err))
};

//получить товар по id для карточки
export const getProductById = async (id) => {
  return await sendRequest('', 'POST', { 'method': 'get_catalog_prod', 'prod_id': id, 'get_all_no_null_prop': 'Y', 'get_podob': "Y" })
      .then((res) => {
          if (res.status === 200 && res.data && res.data.get_catalog_prod && res.data.get_catalog_prod.data) {
              return Object.values(res.data.get_catalog_prod.data)[0]
          } else {
              console.log('Error while getProductById', res);
          }
      })
      .catch((err) => console.log('Error while getProductById', err))
};

//получить товар по code для карточки
export const getProductByCode = async (code) => {
  return await sendRequest('', 'POST', { 'method': 'get_catalog_prod', 'prod_code': code, 'get_all_no_null_prop': 'Y', 'get_podob': "Y" })
      .then((res) => {
          if (res.status === 200 && res.data && res.data.get_catalog_prod && res.data.get_catalog_prod.data) {
              return Object.values(res.data.get_catalog_prod.data)[0]
          } else {
              console.log('Error while getProductById', res);
          }
      })
      .catch((err) => console.log('Error while getProductById', err))
};

//получить товары по массиву id
export const getProductsByIdArr = async (idsArr) => {
  return await sendRequest('', 'POST', { 'method': 'get_catalog_prod', 'prod_id': idsArr.join(';')})
      .then((res) => {
          if (res.status === 200 && res.data && res.data.get_catalog_prod && res.data.get_catalog_prod.data) {
            const resData = res.data.get_catalog_prod.data
            const sortedRez = []

            idsArr.forEach((key) => {
              if (resData.hasOwnProperty(key)) {
                sortedRez.push(resData[key]);
              }
            });            
            return sortedRez
            // return Object.values(res.data.get_catalog_prod.data)
          } else {
              console.log('Error while getProductsByIdArr', res);
          }
      })
      .catch((err) => console.log('Error while getProductsByIdArr', err))
};

//получить лучшие предложения
export const getBestPropositions = async () => {
  return await sendRequest('', 'POST', { 'method': 'get_catalog_prod' })
      .then((res) => {
          if (res.status === 200 && res.data && res.data.get_catalog_prod && res.data.get_catalog_prod.data) {
              return Object.values(res.data.get_catalog_prod.data)
          } else {
              console.log('Error while getBestPropositions', res);
          }
      })
      .catch((err) => console.log('Error while getBestPropositions', err))
};

//поиск
export const searchProducts = async (search_text) => {
  const searchText = String(search_text).toLowerCase()
  //check
  let isFileExist = false
  const fileData = await sendRequest('', 'POST', { 'method': 'get_search_cash', 'search_text': searchText })
  if (fileData && fileData.data && fileData.data.get_search_cash) {
    const fileDataRez = JSON.parse(fileData.data.get_search_cash)
    if (fileDataRez && fileDataRez.data && fileDataRez.data.length)
      isFileExist = true
  }
  if (!isFileExist)
    return await sendRequest('', 'POST', { 'method': 'get_catalog_prod', 'search_text': searchText })
        .then((res) => {
            if (res.status === 200 && res.data && res.data.get_catalog_prod && res.data.get_catalog_prod.data) {
              return Object.values(res.data.get_catalog_prod.data)
            } else {
                console.log('Error while getBestPropositions', res);
            }
        })
        .catch((err) => console.log('Error while getBestPropositions', err))
  else {
    return await fetch(`https://bitrix.rtp-test.swforge.ru:8080/api-static-search/${searchText}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Ошибка при загрузке файла: ' + response.status);
          }
          return response.text();
        })
        .then(data => {
          if (!data) {
            console.log(`getSearchFromFile - file data is ${data}`);
            return
          }
          const allSearchResult = JSON.parse(data)
          
          if (allSearchResult && allSearchResult.get_catalog_prod && allSearchResult.get_catalog_prod.data) {
            return Object.values(allSearchResult.get_catalog_prod.data)
          } else {
              console.log('Error while get search from file', allSearchResult);
          }
        })
        .catch(error => {
          console.error('Произошла ошибка:', error);
        });
  }
};

//поиск - подсказка
export const hintSearchProducts = async (search_text) => {
  const searchText = String(search_text).toLowerCase()
  //check
  let isFileExist = false
  const fileData = await sendRequest('', 'POST', { 'method': 'get_search_cash', 'search_text': searchText })
  if (fileData && fileData.data && fileData.data.get_search_cash) {
    const fileDataRez = JSON.parse(fileData.data.get_search_cash)
    if (fileDataRez && fileDataRez.data && fileDataRez.data.length)
      isFileExist = true
  }

  if (!isFileExist)
    return await sendRequest('', 'POST', { 'method': 'get_catalog_prod', 'search_text': searchText, 'small_result': 'Y' })
        .then((res) => {
            if (res.status === 200 && res.data && res.data.get_catalog_prod && res.data.get_catalog_prod.data) {
              return Object.values(res.data.get_catalog_prod.data)
            } else {
                console.log('Error while getBestPropositions', res);
            }
        })
        .catch((err) => console.log('Error while getBestPropositions', err))
  else {
    return await fetch(`https://bitrix.rtp-test.swforge.ru:8080/api-static-search/${searchText}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Ошибка при загрузке файла: ' + response.status);
          }
          return response.text();
        })
        .then(data => {
          if (!data) {
            console.log(`getSearchFromFile - file data is ${data}`);
            return
          }
          const allSearchResult = JSON.parse(data)

          if (allSearchResult && allSearchResult.get_catalog_prod && allSearchResult.get_catalog_prod.data) {
            return Object.values(allSearchResult.get_catalog_prod.data)
          } else {
              console.log('Error while get search hints from file', allSearchResult);
          }
        })
        .catch(error => {
          console.error('Произошла ошибка:', error);
        });
  }
};