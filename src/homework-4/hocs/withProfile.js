import { useDispatch, useSelector  } from "react-redux";
import { TOGGLE_SHOW_PROFILE } from "../store/profile/action";

export const withProfile = (Component) => {
    return (props) => {
        const dispatch = useDispatch();
        const isShow = useSelector((state) => state.isShow);


        const toggleShowProfile = () => {
            dispatch({
                type: TOGGLE_SHOW_PROFILE
            })
        }


        return (<Component
            {...props}
            isShow={isShow}
            toggleShowProfile={toggleShowProfile}
        />)
    }
}            