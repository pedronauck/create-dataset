import { colorData } from './ColorPicker'
import { useDataset } from './createDataset'

export function ColorPreview() {
  const [color] = useDataset(colorData)
  return <div>{color}</div>
}
