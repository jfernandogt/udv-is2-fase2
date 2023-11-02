// import { v4 as uuidv4 } from "uuid";

export function removeItemFromLocalStorage (key) {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key)
  }
}

export function addItemToLocalStorage (key, title) {
    if (typeof window !== 'undefined') {
        let current = localStorage.getItem(key)
        if (current) {
            current = JSON.parse(current)
            current.push({
                id: current.length + 1,
                title
            })
            localStorage.setItem(key, JSON.stringify(current))
        } else {
            localStorage.setItem(key, JSON.stringify([{
                id: 1,
                title
            }]))
        }
    }
}

export function removeItemFromLocalStorageById (key, id) {
    if (typeof window !== 'undefined') {
        let current = localStorage.getItem(key)
        if (current) {
            current = JSON.parse(current)
            current = current.filter(item => item.id !== id)
            localStorage.setItem(key, JSON.stringify(current))
        }
    }
}

export function getItemFromLocalStorageById (key, id) {
    if (typeof window !== 'undefined') {
        let current = localStorage.getItem(key)
        if (current) {
            current = JSON.parse(current)
            return current.find(item => item.id === Number(id))
        }
    }
    return {}
}

export function updateItemFromLocalStorageById (key, obj) {
    if (typeof window !== 'undefined') {
        let current = localStorage.getItem(key)
        if (current) {
            current = JSON.parse(current)
            current = current.map(item => {
                if (item.id === Number(obj.id)) {
                    return {
                        ...obj,
                        id: Number(obj.id)
                    }
                }
                return item
            })
            localStorage.setItem(key, JSON.stringify(current))
        }
    }
}

export function getItemsFromLocalStorage (key) {
    if (typeof window !== 'undefined') {
        let current = localStorage.getItem(key)
        if (current) {
            return JSON.parse(current)
        }
    }
    return []

}
