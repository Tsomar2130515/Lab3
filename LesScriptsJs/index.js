
const params = new URLSearchParams(window.location.search);
const publicationId = params.get('id');
function App() {
    return <>
        <Header />
        <Recherche />
        <BlogList />
        <Footer />
    </>
}



const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App/>)


