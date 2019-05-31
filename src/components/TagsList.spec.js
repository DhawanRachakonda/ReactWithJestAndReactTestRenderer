import React from 'react';
import renderer from 'react-test-renderer';

import TagsList from './TagsList';

describe('tests snapshot for TagsList', ()=>{
    it('checks the generated shapshot tree', ()=>{
        const tree = renderer.create(<TagsList tags={['python', 'ruby', 'java']}/>);
        tree.toJSON();
        expect(tree).toMatchSnapshot();
    });
})