export function setMainData(data){
  return {
    type: 'SET_BT_MAIN_DATA',
    data
  }
}

export function setCreditcardData(data){
  return {
    type: 'SET_BT_CC_DATA',
    data
  }
}

export function setPaypalData(data){
  return {
    type: 'SET_BT_PP_DATA',
    data
  }
}

export function startFetching(){
  return {
    type: 'BRAINTREE_FETCHING'
  }
}

export function stopFetching(){
  return {
    type: 'BRAINTREE_STOP_FETCHING'
  }
}