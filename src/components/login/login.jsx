import { ReactComponent as EyeIcon } from './eye-icon.svg'
import ImageSrc from './image.jpeg'
import { FcGoogle } from 'react-icons/fc'

export const Login = () => {
  return (
    <div className="flex max-w-3xl items-center rounded-2xl bg-gray-100 p-5 shadow-lg">
      <div className="px-8 md:w-1/2 md:px-16">
        <h2 className="text-2xl font-bold text-blau">Login</h2>
        <p className="mt-4 text-xs text-blau">
          If you are already a member, easily log in
        </p>

        <form action="" className="flex flex-col gap-4">
          <input
            className="mt-8 rounded-xl border p-2"
            type="email"
            name="email"
            placeholder="Email"
          />
          <div className="relative">
            <input
              className="w-full rounded-xl border p-2"
              type="password"
              name="password"
              placeholder="Password"
            />
            <EyeIcon className="absolute top-1/2 right-3 -translate-y-1/2" />
          </div>
          <button className="rounded-xl bg-blau py-2 text-white duration-300 hover:scale-105">
            Login
          </button>
        </form>

        <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
          <hr className="border-gray-400" />
          <p className="text-center text-sm">OR</p>
          <hr className="border-gray-400" />
        </div>

        <button className="mt-5 flex w-full items-center justify-center rounded-xl border bg-white py-2 text-sm text-blau duration-300 hover:scale-105">
          <FcGoogle className="mr-3 h-6.5 w-6.5" />
          Login with Google
        </button>

        <div className="mt-5 border-b border-blau py-4 text-xs text-blau">
          <a href="#">Forgot your password?</a>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs text-blau">
          <p>Don't have an account?</p>
          <button className="rounded-xl border bg-white py-2 px-5 duration-300 hover:scale-110">
            Register
          </button>
        </div>
      </div>

      <div className="hidden w-1/2 md:block">
        <img className="rounded-2xl" src={ImageSrc} />
      </div>
    </div>
  )
}
