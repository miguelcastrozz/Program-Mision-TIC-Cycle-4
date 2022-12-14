import {useParams} from "react-router-dom";
import UserCard from "../components/users/UserCard";

export default function User() {

    const {name} = useParams();

    return (
        <h1>
            Estas viendo al usuario: {name}
        </h1>
    );

}
