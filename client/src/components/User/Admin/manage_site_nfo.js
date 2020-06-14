import React from "react";
import UserLayout from "../../../hoc/user";
import UpdateSite from "./update_site";

const ManageSite = ()=>{
    return(
        <UserLayout>
           <UpdateSite/>
        </UserLayout>
    );
};

export default ManageSite;