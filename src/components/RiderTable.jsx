import React from 'react';
import "../assets/css/RiderPage.css";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faPenToSquare,
  faCirclePause 
} from "@fortawesome/free-solid-svg-icons";
import { Table } from 'reactstrap';

const RiderTable = () => {
    const data = [
        { id: 1, riderId: '123123', name: 'Mark Zuckerberg', status: 'active' },
        { id: 2, riderId: '456456', name: 'Jacob Wikowski', status: 'inactive' },
        { id: 3, riderId: '789789', name: 'Larry Myersekerist', status: 'pending' }
    ];

    return (
        <>
            <div className='rider-container'>
                <Table>
                    <thead>
                        <tr>
                            <th>Rider ID No.</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((rider) => (
                            <tr key={rider.id}>
                                <td>{rider.riderId}</td>
                                <td>{rider.name}</td>
                                <td>{rider.status}</td>
                                <td>
                                    <button className='btn btn-primary'><Icon icon={faCircleInfo} color='white'/></button>
                                    <button className='btn btn-success'><Icon icon={faPenToSquare} color='white'/></button>
                                    <button className='btn btn-danger'><Icon icon={faCirclePause} color='white'/></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>


            </div>
        </>

    );
}

export default RiderTable;
