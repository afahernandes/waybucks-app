import {Route, Redirect} from 'react-router-dom';

const AdminRoute = ({component: Component , ...rest}) => {
    const isLogin = JSON.parse(localStorage.getItem('login'))
    console.log(isLogin);
    const datalogin = JSON.parse(localStorage.getItem('datalogin'))
    console.log(datalogin);
    
    return (
        <Route
            {...rest}
            render = {(props) => {
                    if (isLogin==true && datalogin.status === "Admin") {
                        return <Component {...props}/>
                    } else {
                        return <Redirect to="/" 
                        /> 
                    }
                }}
        />
    );
};

export default AdminRoute;