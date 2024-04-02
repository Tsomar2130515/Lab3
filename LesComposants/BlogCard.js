function BlogCard({id,titre,contenu})
{
    return <>
    
    <div className="col-md-4">
            <a href={`blogPost.html?id=${id}`} className="card-link">
                <div className="card mb-3">
                    <img src="images/ai.png" className="card-img-top" alt="image ai" />
                    <div className="card-body testClick">
                        <h5 className="card-title">{titre}</h5>
                        <p className="card-text">{contenu}</p>
                    </div>
                </div>
            </a>
        </div>   
        
          
    </>
}


