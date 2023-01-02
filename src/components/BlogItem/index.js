// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {itemDetails} = props
  const {title, description, publishedDate} = itemDetails
  return (
    <li className="list-item">
      <div className="itemcard">
        <h1 className="heading2">{title}</h1>
        <p className="paragraph2">{publishedDate}</p>
      </div>
      <p className="paragraph2">{description}</p>
    </li>
  )
}
export default BlogItem
