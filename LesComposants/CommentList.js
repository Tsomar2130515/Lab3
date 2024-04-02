
function CommentList({ publicationId }) {
    const [commentaires, setCommentaires] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://localhost:3000/commentaires`)
            .then(response => response.json())
            .then(commentaires => {
                
                const commentairesPub = commentaires.filter(commentaire => commentaire.publicationID === publicationId);
                setCommentaires(commentairesPub);
            })
    }, [publicationId]); 

    return <>
        <div className="container">
            <div className="row" id="groupComments">
                {commentaires.map(unCommentaire => (
                    <Comment
                        key={unCommentaire.id}
                        id={unCommentaire.id}
                        publicationID={unCommentaire.publicationID}
                        datePublication={unCommentaire.datePublication}
                        contenu={unCommentaire.contenu}
                    />
                ))}
            </div>
        </div>
        </>
}

