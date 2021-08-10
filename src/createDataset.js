import { useEffect, useState } from 'react'

const createSubscriber = () => {
  const listeners = new Set()
  return {
    subscribe: (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
    emit: (event) => {
      listeners.forEach((listener) => {
        listener(event)
      })
    },
  }
}

export const createDataset = (initial) => {
  const map = new Map()
  const subscriber = createSubscriber()
  map.set('value', initial)
  return { map, subscriber }
}

export const useDataset = ({ map, subscriber }) => {
  const [value, setValue] = useState(() => map.get('value'))

  useEffect(() => {
    const unsubscribe = subscriber.subscribe((event) => {
      const current = map.get('value')
      const next = typeof event === 'function' ? event(current) : event
      map.set('value', next)
      setValue(map.get('value'))
      return () => unsubscribe()
    })
  }, [])

  const handler = (val) => {
    subscriber.emit(val)
  }

  return [value, handler]
}
