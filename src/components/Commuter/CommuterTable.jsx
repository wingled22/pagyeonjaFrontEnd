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

const CommuterTable = ({ selectUser, searchValueCommuter, suspensionStatus }) => {
    const [commuters, setCommuters] = useState([]);
    const [filteredCommuters, setFilteredCommuters] = useState([]);

    const [commuterID, setCommuterID] = useState(null);
    const [commuterSuspensionStatus, setCommuterSuspensionStatus] = useState(null);
    // const updateSuspensionStatus = () => setCommuterSuspensionStatus(!commuterSuspensionStatus);

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

    const [reason, setReason] = useState('');
    const [suspensionDate, setSuspensionDate] = useState("");

    const updateReason = (e) => { setReason(e) }
    const updateSuspensionDate = (e) => { setSuspensionDate(e) }

    const getSuspension = async (suspendStatus, commuterId) => {
        try {

            if (suspendStatus === true) {
                //If suspended, then get the latest end date suspension
                const response = await fetch(`http://localhost:5180/api/Suspension/GetSuspension?userid=${commuterId}&usertype=Commuter`)
                const data = await response.json();
                setReason(data.reason);
                setSuspensionDate(data.suspensionDate);
            }
            else {
                setReason("");
                setSuspensionDate("");
            }
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const handleUpdateSuspensionCommuter = async () => {
        try {
            const formData =
            {
                userId: commuterID,
                userType: "Commuter",
                reason: reason,
                suspensionDate: suspensionDate
            }

            const response = await fetch(
                "http://localhost:5180/api/Suspension/RegisterSuspension",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData)
                }
            );

            setReason("");
            setSuspensionDate("");
            getCommuters();
            toggleSuspension();

            //toggle so that the suspension status is true
            suspensionStatus(true);

        } catch (error) {
            console.error("Error fetching data: ", error)
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
            {commuterID ? <CommuterSuspensionModal isOpen={modalSuspension} untoggle={toggleSuspension} commuterID={commuterID} reason={reason} suspensionDate={suspensionDate} updateReason={updateReason} updateSuspensionDate={updateSuspensionDate} handleUpdateSuspensionCommuter={handleUpdateSuspensionCommuter} /> : ''}
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
                        {commuters.length === 0 && <tr><td>No commuters on the list</td></tr>}
                        {filteredCommuters.map(item => (
                            <tr className='commuterRow' key={item.commuterId} onClick={() => { selectUser(item.commuterId), suspensionStatus(item.suspensionStatus) }}>
                                <td className='commuterName' style={{ borderBottom: 'groove', padding: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>{item.firstName} {item.middleName ? item.middleName[0] + '.' : ''} {item.lastName}</td>
                                <td style={{ borderBottom: 'groove', padding: '20px' }}>
                                    <Badge className='badgeStatusCommuter' color={item.suspensionStatus === false ? 'success' : 'danger'}>
                                        <span className='statusName'>{item.suspensionStatus === false ? 'Active' : 'Suspended'}</span>
                                    </Badge></td>
                                <td style={{ borderBottom: 'groove', padding: '20px', textAlign: 'center' }}>
                                    <button className='btn btn-success btnAction' onClick={() => { toggleUpdate() }}>
                                        <Icon icon={faPenToSquare} color='white' />
                                    </button>
                                    <button className='btn btn-danger btnSuspendCommuter' onClick={() => { toggleSuspension(); setCommuterID(item.commuterId); getSuspension(item.suspensionStatus, item.commuterId); }}>
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
