import { Table, Button, Badge } from 'reactstrap';
import "../../assets/css/CommuterTable.css"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
    faPenToSquare,
    faCirclePause
} from "@fortawesome/free-solid-svg-icons";


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

    return (
        <>
            <div className="CommuterTableContainer">
                <table className='tableCommuterTable'>
                    <thead className='theadCommuterTable'>
                        <tr className='trCommuterTable'>
                            <th className='thCommuterTable' style={{ width: '35%', paddingLeft: '20px', borderRadius: '20px 0 0 0', marginBottom: '10px' }}>Name</th>
                            <th className='thCommuterTable' style={{ width: '30%', padding: '20px', textAlign:'center'}}>Status</th>
                            <th className='thCommuterTable' style={{ width: '30%', padding: '20px', borderRadius: '0 20px 0 0', textAlign:'center' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td style={{ borderTop: 'groove', padding: '20px' }}>{item.name}</td>
                                <td style={{ borderTop: 'groove', padding: '20px' }}>
                                <Badge className='badgeStatusCommuter' color={item.status === 'Active' ? 'success' : 'danger'}>
                                    {item.status}
                                </Badge></td>
                                <td style={{ borderTop: 'groove', padding: '20px', textAlign: 'center'}}>
                                    {/* Use Reactstrap Button for the action */}
                                    <button className='btn btn-success' onClick={() => console.log(`Action clicked for ${item.name}`)}>
                                        <Icon icon={faPenToSquare} color='white' />
                                    </button>
                                    <button className='btn btn-danger' onClick={() => console.log(`Action clicked for ${item.name}`)}>
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
