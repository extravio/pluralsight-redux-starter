import expect from 'expect';
import * as types from './actionTypes';
import * as courseActions from './courseActions';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      const course = { id: 'clean-code', title: 'Clean code' };
      const expectedAction = { type: types.CREATE_COURSE_SUCCESS, course: course };
      const action = courseActions.createCourseSuccess(course);
      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    // Example call to nock. Not needed as we're using mock api
    // nock('http://example.com/')
    // .get('/courses')
    // .reply(200, {body: { course: [{ id: 'cory-house', firstName: 'Cory', lastName: 'House' }] }});

    const expectedActions = [
        { type: types.BEGIN_AJAX_CALL },
        { type: types.LOAD_COURSES_SUCCESS, body: { courses: [{ id: 'clean-code', title: 'Clean code' }] } },
    ];

    const store = mockStore({courses: []}, expectedActions);

    store.dispatch(courseActions.loadCourses()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
        expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
        done();
    });

  });

});
