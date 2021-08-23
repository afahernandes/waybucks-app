import { useHistory } from 'react-router-dom';
import { Nav, Dropdown } from 'react-bootstrap';
// import { uploadURL } from '../../config/api';

function UserNav(props) {
    const router = useHistory();
    const datalogin = JSON.parse(localStorage.getItem('datalogin'))
    const goToProfile = () => router.push('/profile');
    const goToCart = () => router.push('/cart');



    return (
        <>
            <Nav.Link onClick={goToCart}>
                <img src="/img/cart.svg" alt="cart" />
                {datalogin.order.length > 0 && 
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-white">{datalogin.order.length}</span>
                }
            </Nav.Link>
            <Dropdown as={Nav.Item} className="ml-3">
                <Dropdown.Toggle as={Nav.Link}>
                    {datalogin.avatar ? <img src={datalogin.image} alt="profile" className="img-avatar" />
                        : <img src="/img/profile/person-circle.png" alt="profile" className="img-avatar" />
                    }
                </Dropdown.Toggle>
                <Dropdown.Menu align="right">
                    <Dropdown.Item onClick={goToProfile} ><img src="/img/user.svg" alt="profile" className="img-icon mr-2" />Profile</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item onClick={props.handleLogout} ><img src="/img/logout.svg" alt="logout" className="img-icon mr-2" />Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
};

export default UserNav;