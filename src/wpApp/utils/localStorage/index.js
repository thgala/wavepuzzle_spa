export default {
  project: APP_CONFIG.project,
  currentLocalStorageJson: function(){
    return JSON.parse( (localStorage.getItem(this.project) || "{}") )
  },
  getAll: function(){
    return this.currentLocalStorageJson()
  },

  set: function(key, val){
    const
      newVal = Object.assign({}, this.currentLocalStorageJson(), {
        [key]: val
      })

    localStorage.setItem(this.project, JSON.stringify(newVal))
  },
  get: function(key){
    return this.currentLocalStorageJson()[key]
  },
  remove: function(key){
    let
      newVal = Object.assign({}, this.currentLocalStorageJson());
    delete newVal[key]

    localStorage.setItem(this.project, JSON.stringify(newVal))
  },
  clear: function(){
    localStorage.setItem(this.project, JSON.stringify(newVal))
  }
}