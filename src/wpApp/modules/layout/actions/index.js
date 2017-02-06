import axios from 'wpApp/utils/requests';


export function globalLoaderShow(){
  return{
    type: 'layout/GLOBAL_LOADER_SHOW'
  }
}

export function globalLoaderHide(){
  return{
    type: 'layout/GLOBAL_LOADER_HIDE'
  }
}

export function getTextFields(){
  return (dispatch, getState) => {
    axios.get(`/text_field`)
      .then((res) => {
        dispatch({
          data: res.data,
          type: 'layout/GET_TEXT_FIELDS'
        })
      })
  }
}

export function addBodyClass(className){
  document.body.classList.add(className)
  return { type: '' }
}

export function removeBodyClass(className){
  document.body.classList.remove(className)
  return { type: '' }
}

export function addHtmlClass(className){
  document.getElementsByTagName('html')[0].classList
    .add(className)
  return { type: '' }
}
export function removeHtmlClass(className){
  document.getElementsByTagName('html')[0].classList
    .remove(className)
  return { type: '' }
}