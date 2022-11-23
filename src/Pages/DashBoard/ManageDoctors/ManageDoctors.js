import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';


const ManageDoctors = () => {

    const [deleteDoctor, setDeleteDoctor] = useState(null);

    const handleCancel = () => {
        setDeleteDoctor(null);
    }


    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ["doctors"],
        queryFn: async () => {
            try {
                const res = await fetch('https://doctors-portal-server-pied-ten.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }
    })

    const handleSuccess = (doctor) => {
        fetch(`https://doctors-portal-server-pied-ten.vercel.app/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`doctor ${doctor.name} deleted successfully.`)
                    refetch();
                }
            })

    }

    if (isLoading) {
        return <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    return (
        <div>
            <h3 className="text-3xl">Manage Doctors:{doctors?.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={doctor.image} alt='' />
                                    </div>
                                </div></td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <label onClick={() => setDeleteDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteDoctor && <ConfirmationModal
                    title={`Are you sure you want to delete ${deleteDoctor.name}?`}
                    message={`Once you delete it, the data will be deleted permanently!`}
                    handleCancel={handleCancel}
                    handleSuccess={handleSuccess}
                    successBtnName='Delete'
                    modalData={deleteDoctor}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;