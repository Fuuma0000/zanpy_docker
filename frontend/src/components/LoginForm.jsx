import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-white rounded-3xl mx-auto w-4/12 p-8 shadow-2xl'>
      <h2 className='my-4 text-center text-test font-arial font-black text-4xl'>
        Log in
      </h2>

      <form className='mx-auto max-w-sm'>
        <div className='flex flex-col gap-4 p-4 md:p-8'>
          <div>
            <label
              for='email'
              className='mb-2 inline-block text-test font-arial font-black text-2xl tracking-widest'
            >
              社員ID
            </label>
            <input
              name='email'
              className='w-full rounded border bg-form px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring'
            />
          </div>

          <div>
            <label
              for='password'
              className='mb-2 inline-block text-test font-arial font-black text-2xl tracking-widest'
            >
              パスワード
            </label>
            <input
              name='password'
              type='password'
              className='w-full rounded border bg-form px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring'
            />
          </div>
          <Button
            variant='contained'
            style={{
              backgroundColor: "#88E186", //bg-main-green
              fontWeight: 900,
              fontSize: 24,
              top: 20,
              paddingRight: 10,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 10,
            }}
            className='w-6/12 '
            onClick={() => navigate("/my-area")}
          >
            ログイン
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
