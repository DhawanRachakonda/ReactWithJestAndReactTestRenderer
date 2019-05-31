import React from 'react';
import renderer from 'react-test-renderer';
import { delay } from 'redux-saga';
import NotificationsViewer from '../NotificaationsViewer.jsx';

jest.mock('../../services/NotificationServices');
const NotificationServices = require('../../services/NotificationServices').default;

describe('The notification viewer', ()=>{
    beforeAll(()=>{
        NotificationServices.__setCount(42);
    });
    it("should display the correct number of notifications", async ()=>{
        const tree = renderer
            .create(
                <NotificationsViewer />
            );
        await delay();

        const instance = tree.root;
        const component = instance.findByProps({className: 'notifications'});
        const text = component.children[0];
        expect(text).toEqual('42 Notification Awaiting!')
    });
});