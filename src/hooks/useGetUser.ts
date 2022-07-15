import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux';
import { useGetUserQuery } from '../redux/authSlice';
import { IUser, setUserData } from '../redux/userReducer';

interface IValue {user: IUser, loading: boolean, login: boolean};

const useGetUser = (): IValue => {
  const [cookies] = useCookies(['clothesToken']);
  const token: string = !cookies.clothesToken ? '' : cookies.clothesToken;
  const { data, isError, isLoading } = useGetUserQuery(token);

  const dispatch = useDispatch<AppDispatch>();
  const [user, setUser] = useState<IUser>({});
  const [login, setLogin] = useState<boolean>(true);

  const fetchUser = () => {
    if (data?.user) {
      setUser(data?.user);
      setLogin(false);
      dispatch(setUserData({data: data?.user}));
    };
    if (isError) {dispatch(setUserData({data: null}))};
  }

  useEffect(() => {fetchUser()}, [isError, isLoading]);
  return { user, loading: isLoading, login };
} 

export default useGetUser;