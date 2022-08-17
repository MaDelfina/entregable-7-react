import { BrowserRouter } from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import NavBar from "./componetes/NavBar";
import ItemDetailContainer from "./componetes/ItemDetailContainer";
import ItemListContainer from "./componetes/ItemListContainer";
import Cart from "./componetes/Cart";
import Footer from "./componetes/Footer"

const App = () => {

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/categoria/:id" element={<ItemListContainer />} />
                <Route path="/detalle/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;