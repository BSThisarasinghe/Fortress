import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from '../slices/userSlice';

// Mock API Call
const fetchUserApi = async (): Promise<string | null> => {
  const response = await fetch('https://api.example.com/animals');
  if (!response.ok) throw new Error('Failed to fetch animals');
  return response.json();
};

// Worker Saga
function* fetchUser() {
  try {
    const data: string = yield call(fetchUserApi);
    yield put(fetchUserSuccess(data));
  } catch (error: any) {
    yield put(fetchUserFailure(error.message));
  }
}

// Watcher Saga
export default function* userSaga() {
  yield takeLatest(fetchUserRequest.type, fetchUser);
}
