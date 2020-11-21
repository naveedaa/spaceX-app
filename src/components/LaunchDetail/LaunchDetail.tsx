import React from 'react'
import { LaunchinfoQuery } from '../../generated/graphql';
import Paper from '@material-ui/core/Paper';
import './style.css'
import { Link } from 'react-router-dom';

interface Props {
    data: LaunchinfoQuery
}

export const LaunchDetail: React.FC<Props> = ({ data }) => {
    return (
        <div className='detailContainer'>
            <div className='heading'>
                Mission: {data.launch?.mission_name}
            </div>
            <div className='content'>
                <div>
                    <h2>Launch Data</h2>
                    <Paper className='Date' elevation={3} >
                        <div className='smallHeading'>
                            Flight Number : {data.launch?.flight_number}
                        </div>
                        <div className="line"></div>

                        <div className='smallHeading'>
                            Launch Year : {data.launch?.launch_year}
                        </div>
                        <div className="line"></div>

                        <div className='smallHeading'>
                            Date:  {data.launch?.launch_date_local}
                        </div>
                    </Paper>
                </div>
                <br />

                <h2>Rocket Details</h2>
                <Paper className='Rocket' elevation={3} >
                    <div className='smallHeading'>
                        Rocket_ID : {data.launch?.rocket?.rocket_id}
                    </div>
                    <div className="line"></div>

                    <div className='smallHeading'>
                        Rocket_Name : {data.launch?.rocket?.rocket_name}
                    </div>
                    <div className="line"></div>
                    <div className='smallHeading'>
                        Rocket_Type : {data.launch?.rocket?.rocket_type}
                    </div>
                </Paper>

                <br />
                <h2>Launch Details</h2>
                <Paper className='Date' elevation={3} >
                    <div className='Detail'>
                        <div className='smallHeading'>Status:
                        <span className={data.launch?.launch_success ? "green" : (data.launch?.upcoming) ? 'gray' : 'red'}>
                                {data.launch?.launch_success ? " Success" : (data.launch?.upcoming) ? ' Upcoming' : ' Fail'}
                            </span>
                        </div>
                        <div className="line"></div>
                        <div className='smallHeading'>
                            Reason: {data.launch?.details}
                        </div>
                        <div className="line"></div>
                        <div className='smallHeading'>
                            Site Name: {data.launch?.launch_site?.site_name}
                        </div>
                    </div>
                </Paper>
            </div>
            <Link to='/'>
                <button className="btn">Back</button>
            </Link>
        </div>
    )
};