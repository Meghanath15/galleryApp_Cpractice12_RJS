// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, clickThumbnailItem, isSelected} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const onClickThumbnail = () => {
    clickThumbnailItem(id)
  }

  const selectedThumbnailClassName = isSelected
    ? 'selected thumbnail'
    : 'thumbnail'

  return (
    <li className="thumbnail-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          className={selectedThumbnailClassName}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
