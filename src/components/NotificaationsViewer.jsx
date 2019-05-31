import React from 'react';
import NotificationServices from '../services/NotificationServices';

export default class extends React.PureComponent {
    state = {
        count: -1,
    };
    async componentDidMount() {
        const {count} = await NotificationServices.getNotifications();
        this.setState({
            count,
        });
    }
    render(){
        return(
            <section className='mt-3 mb-2'>
                <div className='notifications'>
                    {this.state.count != -1 ? `${this.state.count} Notification Awaiting!` : 'Loading...'}
                </div>
            </section>
        );
    }
}