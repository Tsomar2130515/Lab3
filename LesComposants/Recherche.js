function Recherche() {
    return <>
        <div id="navbarNav">
            <div class="container md-3">
                <div class="row">
                    <div class="col-md-4">
                        <form class="input-group">
                            <input type="text" class="form-control" placeholder="Rechercher..." aria-label="Rechercher" />
                        </form>
                    </div>
                    <div class="col-md-4">
                        <p class="mt-2 mb-0 text-center">Trier par :</p>
                    </div>
                    <div class="col-md-4">
                        <select class="form-select">
                            <option >Sélectionner</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </>
}
