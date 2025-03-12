import { Navigate } from "react-router-dom";

const AdminRoute = ({ element, user }) => {
    console.log(user.role);
    return user?.role === "ADMIN" ? element : <Navigate to="/forbidden" replace />;
};

export default AdminRoute;
