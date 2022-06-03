import { Routes, Route } from 'react-router-dom';
import About from '../Pages/About';
import Categories from '../Pages/Categories';
import Landing from '../Pages/Landing';
import Header from './Header';

function Content() {
    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    )
}

export default Content