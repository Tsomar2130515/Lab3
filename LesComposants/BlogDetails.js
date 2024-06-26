function BlogDetails({ publicationId }) {
    const [publication, setPublication] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://localhost:3000/publications/${publicationId}`)
            .then(response => response.json())
            .then(json => setPublication(json))
           
    }, [publicationId]);


    return <>
    <div className="container">
            <div className="grandeImg">
                <img id="imgTech" src="images/image1.png" alt="Image technique" />
            </div>

            <h2 id="titreBlog">{publication.titre}</h2>

            <div>
                <p id="contenuBlog">{publication.contenu}</p>
            </div>

            <center>
                <figure className="figure">
                    <img src="images/ai.png" className="classLog" alt="ai image" />
                    <figcaption className="figure-caption">Caption</figcaption>
                </figure>
            </center>

            <p id="auteurBlog">{publication.auteur}</p>
            <p id="dateBlog">{publication.datePublication}</p>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Commentaires</h3>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    
}

