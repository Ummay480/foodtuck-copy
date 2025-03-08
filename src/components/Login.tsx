import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@/lib/redux/slices/userSlice';

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ name, email }));
  };

  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-2 p-2"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2 p-2"
      />
      <button onClick={handleLogin} className="bg-blue-500 p-2 text-white">
        Login
      </button>
    </div>
  );
};

export default Login;
