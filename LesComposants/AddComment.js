function AddComment({ publicationId }) {
    const [comment, setComment] = React.useState('');

    function handleComment(event) {
        setComment(event.target.value);
    }

    

    function ConfirmationDialogue() {
        $('<div></div>').appendTo('body')
            .html('<div><h6>Confirmez-vous l\'envoi de ce commentaire ?</h6></div>')
            .dialog({
                modal: true,
                title: 'Confirmation-Commentaire',
                zIndex: 10000,
                autoOpen: true,
                width: 'auto',
                resizable: false,
                closeText: '<span class="ui-icon ui-icon-closethick"></span>',
                buttons: {
                    Oui: function () {
                        $(this).dialog("close");
                        
                        AjouterCommentaire(publicationId, new Date().toLocaleDateString(), comment);
                        
                        setComment('');
                    },
                    Non: function () {
                        $(this).dialog("close");
                    }
                },
                close: function (event, ui) {
                    $(this).remove();
                }
            });
    }
    function handleSubmit(event) {
        event.preventDefault();
        if (!comment.trim()) {
            alert('Veuillez entrer un commentaire');
            return;
        }
        
        ConfirmationDialogue();
    }

    function AjouterCommentaire(publicationIDParam, dateParam, contenuParam) {
        fetch('http://localhost:3000/commentaires', {
            method: 'POST',
            body: JSON.stringify({
                publicationID: publicationIDParam,
                datePublication: dateParam,
                contenu: contenuParam
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => {
            if (response.ok) {
                console.log('Commentaire envoyé avec succès');
            } else {
                console.error('Erreur durant l\'envoi du commentaire');
            }
        })
        .catch(err => console.log('Erreur durant l\'envoi du commentaire :', err));
    }

    return <>
    <div className="container">
        <div className="row" id="groupComments">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col">
                    <textarea className="form-control" id="commentaire" rows="6" required placeholder="Ajouter un commentaire" value={comment} onChange={handleComment}></textarea>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col text-end">
                    <button type="submit" className="btn btn-primary text-white">Submit</button>
                </div>
            </div>
        </form>
            
        </div>
        </div>
        
    </>
}