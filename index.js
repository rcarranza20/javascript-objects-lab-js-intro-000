var recipes = New

function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({},{key:'value'})
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object['key']='value'
  return object
}