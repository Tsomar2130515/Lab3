// ************************************** Fichier Javascript pour le blogPost ************************************************************

const params = new URLSearchParams(window.location.search);
const publicationId = params.get('id');
function App() {
    return <>

        <Blog publicationId={publicationId} />
        
    </>
}
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App/>)
