import React from 'react';
import { LaunchesQuery } from '../../generated/graphql'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import './style.css';

interface Props {
    data: LaunchesQuery
}

export const Launch: React.FC<Props> = ({ data }) => {
    // console.log(data)
    return (

        <div className='launch'>
            {
                !!data.launches && data.launches.map((obj, index) => {
                    return (
                        <Card key={index} className="rootLaunch">
                            <CardActionArea>
                                <CardContent>
                                    <Typography className='titleLaunch' gutterBottom variant="h6" >
                                        Mission: {obj?.mission_name}
                                    </Typography>

                                    <div className='DatesLaunch'>
                                        <div style={{ display: 'flex' }}>
                                            <Typography variant="subtitle1" component="h2">
                                                <ScheduleIcon style={{ marginRight: '5px', fontSize: '18px', marginTop: '4px', marginBottom: '0px' }} />
                                            </Typography>

                                            <Typography variant="subtitle1" component="h2">
                                                {obj?.launch_date_local}
                                            </Typography>
                                        </div>
                                        <div>
                                            <Typography variant="subtitle1" component="h2">
                                                {obj?.launch_year}
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className='upcomingLaunch'>
                                        <Typography className={obj?.launch_success ? "greenLaunch" : (obj?.upcoming) ? 'grayLaunch' : 'redLaunch'} variant="h5" component="h2">
                                            {obj?.launch_success ? "Success" : (obj?.upcoming) ? 'Upcoming' : 'Failed'}
                                        </Typography>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Link className='ButtonLaunch' to={`/${obj?.flight_number}`}>
                                    <Button size="small" color="primary">
                                        Explore
                                </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    );
                })
            }
        </div>


    )
}