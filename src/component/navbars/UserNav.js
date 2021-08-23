import { useHistory } from 'react-router-dom';
import { Nav, Dropdown, Image } from 'react-bootstrap';
import cart from "../../assets/cart.svg";
import logout from "../../assets/logout.svg";
import user from "../../assets/user.svg";

function UserNav(props) {
    const router = useHistory();
    const datalogin = JSON.parse(localStorage.getItem('datalogin'))
    const goToProfile = () => router.push('/profile');
    const goToCart = () => router.push('/cart');



    return (
        <>
            <Nav.Link onClick={goToCart}>
                <Image src={cart} alt="cart" style={{marginTop:"8px"}} />
                {datalogin.order.length > 0 && 
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-white">{datalogin.order.length}</span>
                }
            </Nav.Link>
            <Dropdown as={Nav.Item} className="ml-3">
                <Dropdown.Toggle as={Nav.Link}>
                    {datalogin.avatar ? <Image src={datalogin.image} alt="profile" style={{position : 'relative' , transform : 'translate(15px, -3px)'}} className="img-avatar" />
                        : <Image src={datalogin.image} alt="profile" className="img-avatar" style={{width:"50px",height:"50px", position : 'relative' , transform : 'translate(35px, -3px)'}} />
                    }
                </Dropdown.Toggle>
                <Dropdown.Menu align="right">
                    <Dropdown.Item onClick={goToProfile} ><Image src={user} alt="profile" className="img-icon mr-2" />Profile</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item onClick={props.handleLogout} ><Image src={logout} alt="logout" className="img-icon mr-2" />Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
};

export default UserNav;