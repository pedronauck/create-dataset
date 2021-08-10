import { SketchPicker } from 'react-color'
import { createDataset, useDataset } from './createDataset'

export const colorData = createDataset('#FF6347')

export function ColorPicker() {
  const [color, setColor] = useDataset(colorData)
  return (
    <SketchPicker
      color={color}
      onChangeComplete={({ hex }) => {
        setColor(hex)
      }}
    />
  )
}
