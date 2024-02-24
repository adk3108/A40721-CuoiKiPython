import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import { useShoppingContext } from '../contexts/ShoppingContext'
import { formatCurrency } from '../helpers/common'
import { useUserContext } from '../contexts/UserContext'
import CreateProduct from './CreateProduct'
const Header = () => {
    const { cartItems, cartQty, totalPrice } = useShoppingContext()
    const { user, logout } = useUserContext()

    const isLoggedIn = user.auth

    function handleLogout(): void {
        logout()
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to='/'><strong>Cellphone X</strong></Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link" to='/products'>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/contact'>Contact</Link>
                        </li>
                        { isLoggedIn &&
                        <li className="nav-item">
                            <CreateProduct/>
                        </li>
                        }
                        

                    </ul>
                </div>

                <div className="ml-auto">
                    <ul className="navbar-nav">
                        {isLoggedIn ? (
                            <>
                                <li className="nav-item dropdown" style={{ marginRight: '30px',  marginTop: '5px'}}>
                                    <div className="nav-item avatar" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false"
                                    >
                                        <img 
                                        src={'../images/product1.jpg'} // Thay đổi thành URL hình ảnh của người dùng
                                        alt="User Avatar"
                                        style={{ width: '25px', height: '25px', borderRadius: '50%', cursor: 'pointer' }}
                                        />
                                        <span className="username ml-4">{user.name}</span>
                                    </div>
                        
                                    <ul className="dropdown-menu ml-4" aria-labelledby="dropdownMenuButton">
                                        <li><Link to="/profile" className="dropdown-item">Profile</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                                    </ul>

                                
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownCart" data-bs-auto-close="outside" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <i className="fas fa-shopping-cart"></i>
                                        <span className="position-absolute top-0 start-1 badge badge-pill bg-danger">{cartQty}</span>
                                    </a>

                                    <ul className="dropdown-menu dropdown-menu-end cart-dropdown" aria-labelledby="navbarDropdownCart">
                                        <li>
                                            <h3 className="dropdown-item">Your Cart</h3>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <tbody>
                                                        {cartItems.map(item => {
                                                            return <CartItem key={item.id} {...item} />
                                                        })}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </li>

                                        <li>
                                            <span className="float-start ms-2"><strong>Total: {formatCurrency(totalPrice)}</strong></span>
                                            <Link to='/checkout' className='btn btn-sm btn-success float-end me-2'>Checkout</Link>
                                        </li>

                                    </ul>

                                </li>

                                
                                
                            </>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link border rounded p-2 fw-normal me-2" to='/login'>Login</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
