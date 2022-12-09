import { MdOutlineAccountCircle ,MdSettings ,MdLogout,MdSpaceDashboard,MdMailOutline,MdOutlineHomeWork} from "react-icons/md";
import {FiUsers} from 'react-icons/fi'
import {TbBrandBooking} from 'react-icons/tb';

export const DrawerElements1= [
    {
        label:'Dashboard',
        Icon:MdSpaceDashboard
    },
    {
        label:'Profile',
        Icon:MdOutlineAccountCircle
    },
    {
        label:'Users',
        Icon:FiUsers
    },
    {
        label:'Diseases',
        Icon:TbBrandBooking
    },
    {
        label:'Crop Tracker',
        Icon:MdOutlineHomeWork
    },
    {
        label:'Message',
        Icon:MdMailOutline
    }
]
export const DrawerElements2 = [
    {
        label:'Settings',
        Icon:MdSettings
    },
    {
        label:'Logout',
        Icon:MdLogout
    }
]
