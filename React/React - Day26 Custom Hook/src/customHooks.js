import { useEffect, useState } from "react"

export function useDocumentTitle(customTitle) {
  useEffect(() => {
    document.title = customTitle
  }, [customTitle])
}

export function useLocalStorage(key, value) {
  const [storageValue, setStorageValue] = useState(() => {
    console.log(localStorage.getItem(key))
    const data = JSON.parse(localStorage.getItem(key)) || value
    return data
  })

  useEffect(() => {
    localStorage.setItem(key, storageValue)
  }, [storageValue])

  return [storageValue, setStorageValue]
}