import React from 'react';
import renderer from 'react-test-renderer';
import { mapStateToProps, QuestionDetailDisplay } from '../QuestionDetail.jsx';

describe('The Question Detail Component', () => {
    describe('The container element', ()=>{
        describe('mapStateToProps', ()=>{
            it('should map the state to props correctely', ()=>{
                const sampleQuestion = {
                    question_id: 42,
                    body: 'What is PureComponent',
                };
                const appState = {
                    questions: [ sampleQuestion ],
                };
                const ownProps = {
                    question_id: 42,
                };
                const componentState = mapStateToProps(appState, ownProps);
                expect(componentState).toEqual(sampleQuestion);
            });
        });
    });
    it('The display element', () => {
        const tree = renderer.create(
            <QuestionDetailDisplay
                title="Hooks"
                body="What are hooks in React"
                answer_count={2}
                tags={['React']}
            />
        );
        expect(tree.toJSON()).toMatchSnapshot();
    });
});