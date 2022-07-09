import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../redux';
import { useGetUserQuery } from '../redux/authSlice';
import { IUser, setUserData } from '../redux/userReducer';

interface IValue {user: IUser, loading: boolean, login: boolean};

const useGetUser = ({redirect = false}: {redirect?: boolean}): IValue => {
  const [cookies] = useCookies(['clothesToken']);
  const token: string = !cookies.clothesToken ? '' : cookies.clothesToken;
  const { data, isError, isLoading } = useGetUserQuery(token);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser>({});
  const [login, setLogin] = useState<boolean>(true);

  const fetchUser = () => {
    if (data?.user) {
      setUser(data?.user);
      setLogin(false);
      dispatch(setUserData({data: data?.user}));
    };
    if (redirect && !user && !data?.user && isError) {navigate('/home')};
  }

  useEffect(() => {fetchUser()}, [isError, isLoading]);
  return { user, loading: isLoading, login };
} 

export default useGetUser;