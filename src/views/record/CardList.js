import React, { useEffect, useState } from 'react';
import ActivityCard from '../../components/ActivityCard';
import { card_arr } from '../../assets/data/card_data';
import { useDispatch, useSelector } from 'react-redux';
import { getActivitiesList } from '../../redux/store/actions';

function CardList() {
    const [apiData, setApiData] = useState(null);
    const [delId, setDelId] = useState();
    const dispatch = useDispatch();
    const myStore = useSelector((state) => state);

    const deleteActivity = (id) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        };

        fetch('http://localhost:7000/activity/delete', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setDelId(id);
                    dispatch(getActivitiesList());
                }
                // setApiData([...data?.data]);
            });
    }

    // useEffect(() => {
    //     dispatch(getActivitiesList());
    // }, [delId]);

    // useEffect(() => {
    //     if (myStore?.activitiesList.length) {
    //         setApiData([...myStore?.activitiesList]);
    //     }
    // }, [delId]);

    return (
        <div className='container'>
            <div className='row mt-5'>
                {
                    myStore.activitiesList?.length !== 0 && myStore.activitiesList?.map((items, index) => {
                        return (
                            <div className='col-sm-3 col-12' key={index}>
                                <ActivityCard {...items} deleteActivity={deleteActivity} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardList;
