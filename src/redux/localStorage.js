export const saveState = (state) =>{
    try{
        const seralizedState = JSON.stringify(state)
        localStorage.setItem('crmState', seralizedState)
    }catch(error){
        console.error('Unable to save state', error)
    }
}

export const loadState = () =>{
    try{
       const seralizedState = localStorage.getItem('crmState')

        if(seralizedState === null) {
            return undefined
        }
        return JSON.parse(seralizedState)
    }catch(error){
        console.error("Unable to load the State", error)
        return undefined
    }
}