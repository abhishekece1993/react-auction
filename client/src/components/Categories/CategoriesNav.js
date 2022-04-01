import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Categories.css'
import { BsHouseDoorFill, BsFillHouseFill, BsFillPuzzleFill } from 'react-icons/bs'
import { AiFillCar } from 'react-icons/ai';
import { GiFlowerPot, GiClothes } from 'react-icons/gi';
import { TiSortAlphabetically } from 'react-icons/ti';
import { MdPhoneAndroid } from 'react-icons/md'

function CategoriesNav() {
    return (
        <div className="container" id="categories">
            <h1>Categories</h1>
            <Link to="/categories/all">
                <Button variant="dark" id="all"><TiSortAlphabetically />All</Button>{' '}
            </Link>
            <Link to="/categories/Hatchback">
                <Button variant="dark" id="Hatchback"><AiFillCar />Hatchback</Button>{' '}
            </Link>
            <Link to="/categories/Sedan">
                <Button variant="dark" id="Sedan"><BsHouseDoorFill />Sedan</Button>{' '}
            </Link>
            <Link to="/categories/SUV">
                <Button variant="dark" id="SUV"><BsFillHouseFill />SUV</Button>{' '}
            </Link>
            <Link to="/categories/Coupe">
                <Button variant="dark" id="Coupe"><BsFillHouseFill />Coupe</Button>{' '}
            </Link>
            <Link to="/categories/Convertible">
                <Button variant="dark" id="Convertible"><BsFillHouseFill />Convertible</Button>{' '}
            </Link>
            <Link to="/categories/Minivan">
                <Button variant="dark" id="Minivan"><BsFillHouseFill />Minivan</Button>{' '}
            </Link>
        </div>
    )
}

export default CategoriesNav;