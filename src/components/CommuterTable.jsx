import { Table, Button } from 'reactstrap';
import "../assets/css/CommuterTable.css"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
    faPenToSquare,
    faCirclePause
} from "@fortawesome/free-solid-svg-icons";


const CommuterTable = () => {
    const data = [
        { id: 1, name: 'John Doe', status: 'Active' },
        { id: 2, name: 'Jane Doe', status: 'Inactive' },
        { id: 3, name: 'Bob Smith', status: 'Active' },
    ];

    return (
        <>
            <div className="CommuterTableContainer">
                <table className='tableCommuterTable'>
                    <thead>
                        <tr className='trCommuterTable'>
                            <th style={{ width: '45%', paddingLeft: '20px', borderRadius: '20px 0 0 0', marginBottom: '10px' }}>Name</th>
                            <th style={{ width: '25%', padding: '20px' }}>Status</th>
                            <th style={{ width: '30%', padding: '20px', paddingLeft: '50px', borderRadius: '0 20px 0 0' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td style={{ borderTop: 'groove', padding: '20px' }}>{item.name}</td>
                                <td style={{ borderTop: 'groove', padding: '20px' }}>{item.status}</td>
                                <td style={{ borderTop: 'groove', padding: '20px' }}>
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
