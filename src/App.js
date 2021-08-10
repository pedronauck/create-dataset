import { colorData, ColorPicker } from './ColorPicker'
import { ColorPreview } from './ColorPreview'
import { useDataset } from './createDataset'

export default function App() {
  const [color] = useDataset(colorData)
  return (
    <div style={{ background: color }}>
      <ColorPreview />
      <ColorPicker />
    </div>
  )
}
