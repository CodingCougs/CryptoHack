import { fork, all } from 'redux-saga/effects';
//import sagas here

import baseSaga from '../base/baseAppSaga'

const sagas = [
    // add sagas here
    baseSaga
];

function* globalSagas(){
    const globallSagasForks = sagas.map( saga => fork(saga));

    yield all([...globallSagasForks]);
} 

export default globalSagas;