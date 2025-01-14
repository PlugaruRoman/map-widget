import { toggleItem } from '../../utils'
import './index.css'

export const MapViewToggle = ({ activeView, onChangeToggle }) => {
  return (
    <div className="map-view-toggle">
      <span
        onClick={() => onChangeToggle(toggleItem.map)}
        className={
          activeView === toggleItem.map
            ? 'map-view-toggle-item__active'
            : 'map-view-toggle-item'
        }
      >
        {toggleItem.map}
      </span>

      <span
        onClick={() => onChangeToggle(toggleItem.satellite)}
        className={
          activeView === toggleItem.satellite
            ? 'map-view-toggle-item__active'
            : 'map-view-toggle-item'
        }
      >
        {toggleItem.satellite}
      </span>
    </div>
  )
}
