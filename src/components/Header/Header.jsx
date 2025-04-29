import s from './style.module.css';
import logo from '../../assets/images/logo.png';
import { Logo } from '../logo/index';
import { ButtonPrimary } from '../ButtonPrimary/ButtonPrimary.jsx';
import { useNavigate } from 'react-router-dom';

export const Header = ({props}) => {
    const navigate = useNavigate();

    return (
        <div className={`row ${s.container}`}>
            <div className="col-xs-12 col-sm-4">
                <Logo  onClick={() => navigate("/")} title={"Notamic"} subtitle="Manage your notes" image={logo} />
            </div>
            <div className="col-xs-12 col-sm-8 text-end">
                <ButtonPrimary
                    onClick={() => navigate("/note/new")}
                >Add Note +</ButtonPrimary>
            </div>
        </div>
    );
}