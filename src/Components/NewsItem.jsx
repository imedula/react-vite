import image from '../assets/news.jpg'


const NewsItem = ({title, description, src, url}) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"300px"}}>
  <img src={src?src:image} style={{height:"200px",width:"280px",placeItems: 'center'}} className="card-img-top text-center" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Current ivent. It's information about that has just happend."}</p>
    <a href={url} target='_blank' className="btn btn-primary">Read More</a>
  </div>
</div>
    )
}
export default NewsItem