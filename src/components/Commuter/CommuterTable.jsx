import { Table, Button, Badge } from 'reactstrap';
import "../../assets/css/CommuterTable.css"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
    faPenToSquare,
    faCirclePause
} from "@fortawesome/free-solid-svg-icons";

import { Row, Col, Container } from 'reactstrap';
import CommuterSuspensionModal from "../../components/Commuter/CommuterSuspensionModal.jsx";
import { useState, useEffect } from "react";
import CommuterUpdateModal from '../../components/Commuter/CommuterUpdateModal.jsx';

const CommuterTable = ({ selectUser, searchValueCommuter }) => {
    const [commuters, setCommuters] = useState([]);
    const [filteredCommuters, setFilteredCommuters] = useState([]);

    const commuterMatchesSearchTerm = (commuter) => {
        if (!searchValueCommuter) return true;
        const fullName = `${commuter.firstName} ${commuter.middleName ? commuter.middleName + ' ' : ''}${commuter.lastName}`.toLowerCase();
        const status = commuter.suspensionStatus === false ? 'active' : 'suspended';
        const fullNameWords = fullName.split(' ');
        const searchWords = searchValueCommuter.toLowerCase().split(' ').filter(word => word);
    
        return searchWords.some(searchWord => fullNameWords.some(fullNameWord => fullNameWord.includes(searchWord))) || status.includes(searchValueCommuter.toLowerCase());
    };
    
    useEffect(() => {
        const filtered = commuters.filter((commuter) =>
            commuterMatchesSearchTerm(commuter)
        );
        setFilteredCommuters(filtered);
    }, [commuters, searchValueCommuter]);
    


    const getCommuters = async () => {
        try {
            const response = await fetch('http://localhost:5180/api/CommuterRegistration/GetCommutersApproved');
            const data = await response.json();
            setCommuters(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCommuters();
    }, []);


    const [modalSuspension, setModalSuspension] = useState(false);
    const toggleSuspension = () => setModalSuspension(!modalSuspension);

    const [modalupdate, setModalUpdate] = useState(false);
    const toggleUpdate = () => setModalUpdate(!modalupdate)

    return (
        <>
            <CommuterUpdateModal isOpen={modalupdate} untoggle={toggleUpdate} />
            <CommuterSuspensionModal isOpen={modalSuspension} untoggle={toggleSuspension} />
            <div className="CommuterTableContainer">
                <table className='tableCommuterTable'>
                    <thead className='theadCommuterTable' style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                        <tr className='trCommuterTable'>
                            <th id='thCommuter' className='thCommuterTable col-6 col-sm-5' style={{ paddingLeft: '20px', borderRadius: '20px 0 0 0', marginBottom: '10px', position: 'sticky' }}>Name</th>
                            <th id='thCommuter' className='thCommuterTable col-1 col-sm-1 statusTh' style={{ padding: '20px' }}>Status</th>
                            <th id='thCommuter' className='thCommuterTable col-3 col-sm-5' style={{ padding: '20px', borderRadius: '0 20px 0 0', textAlign: 'center' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {commuters.length === 0 && "No commuters on the list."}
                        {filteredCommuters.map(item => (
                            <tr className='commuterRow' key={item.commuterId} onClick={() => { selectUser(item.commuterId) }}>
                                <td className='commuterName' style={{ borderBottom: 'groove', padding: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>{item.firstName} {item.middleName} {item.lastName}</td>
                                <td style={{ borderBottom: 'groove', padding: '20px' }}>
                                    <Badge className='badgeStatusCommuter' color={item.suspensionStatus === false ? 'success' : 'danger'}>
                                        <span className='statusName'>{item.suspensionStatus === false ? 'Active' : 'Suspended'}</span>
                                    </Badge></td>
                                <td style={{ borderBottom: 'groove', padding: '20px', textAlign: 'center' }}>
                                    <button className='btn btn-success btnAction' onClick={() => { toggleUpdate() }}>
                                        <Icon icon={faPenToSquare} color='white' />
                                    </button>
                                    <button className='btn btn-danger btnSuspendCommuter' onClick={() => { toggleSuspension() }}>
                                        <Icon icon={faCirclePause} color='white' />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CommuterTable;
