import { Table, Button, Badge } from 'reactstrap';
import "../../assets/css/CommuterTable.css"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
    faPenToSquare,
    faCirclePause
} from "@fortawesome/free-solid-svg-icons";

import { Row, Col, Container } from 'reactstrap';
import CommuterSuspensionModal from "../../components/Commuter/CommuterSuspensionModal.jsx";
import { useState } from "react";
import CommuterUpdateModal from '../../components/Commuter/CommuterUpdateModal.jsx';

const CommuterTable = () => {
    const data = [
        { id: 1, name: 'Dawn Keith Francisco', status: 'Active' },
        { id: 2, name: 'Axle Adolfo', status: 'Suspended' },
        { id: 3, name: 'Ademel Viagedor', status: 'Active' },
        { id: 4, name: 'Michael Jay Sinadjan', status: 'Active' },
        { id: 5, name: 'Nino Abao', status: 'Active' },
        { id: 6, name: 'Client Stewart Booc', status: 'Active' },
        { id: 7, name: 'Neil Chris Ursal', status: 'Suspended' },
        { id: 8, name: 'Windel Pelayo', status: 'Active' },
    ];

    const [modalSuspension, setModalSuspension] = useState(false);
    const toggleSuspension = () => setModalSuspension(!modalSuspension);

    const [modalupdate, setModalUpdate] = useState(false);
    const toggleUpdate = () => setModalUpdate(!modalupdate)

    return (
        <>
        <CommuterUpdateModal isOpen={modalupdate} untoggle={toggleUpdate}/>        
        <CommuterSuspensionModal isOpen={modalSuspension} untoggle={toggleSuspension} />
            <div className="CommuterTableContainer">
                <table className='tableCommuterTable'>
                    <thead className='theadCommuterTable'>
                        <tr className='trCommuterTable'>
                            <th className='thCommuterTable col-6 col-sm-5' style={{ paddingLeft: '20px', borderRadius: '20px 0 0 0', marginBottom: '10px' }}>Name</th>
                            <th className='thCommuterTable col-3 col-sm-3 statusTh' style={{ padding: '20px' }}>Status</th>
                            <th className='thCommuterTable col-3 col-sm-4' style={{ padding: '20px', borderRadius: '0 20px 0 0', textAlign: 'center' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td className='commuterName' style={{ borderTop: 'groove', padding: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>{item.name}</td>
                                <td style={{ borderTop: 'groove', padding: '20px' }}>
                                    <Badge className='badgeStatusCommuter' color={item.status === 'Active' ? 'success' : 'danger'}>
                                        <span className='statusName'>{item.status}</span>
                                    </Badge></td>
                                <td style={{ borderTop: 'groove', padding: '20px', textAlign: 'center' }}>
                                    {/* Use Reactstrap Button for the action */}
                                    {/* <button className='btn btn-success btnAction' onClick={() => console.log(`Action clicked for ${item.name}`)}>
                                        <Icon icon={faPenToSquare} color='white' />
                                    </button> */}
                                    <button className='btn btn-success btnAction' onClick={() => {toggleUpdate()}}>
                                        <Icon icon={faPenToSquare} color='white' />
                                    </button>
                                    <button className='btn btn-danger btnSuspendCommuter' onClick={() => {toggleSuspension()}}>
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
