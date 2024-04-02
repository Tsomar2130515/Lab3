
function Blog({ publicationId }) {
    


    return <>
        <Header/>
        <BlogDetails publicationId={publicationId} />
        <AddComment publicationId={publicationId}   />
        <CommentList publicationId={publicationId} />
        <Footer />

        </>
        
}

